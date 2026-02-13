import { db } from "@/db/client";
import scalekit from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";
import { user as User } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const error_description = searchParams.get("error_description");

  if (error) {
    return NextResponse.json({ error, error_description }, { status: 401 });
  }
  if (!code) {
    return NextResponse.json({ error: "no code provided" }, { status: 400 });
  }
  try {
    const redirectUri = process.env.SCALEKIT_REDIRECT_URI!;
    const authReuslt = await scalekit.authenticateWithCode(code, redirectUri);
    const { user, idToken } = authReuslt;

    const claims = await scalekit.validateToken(idToken);
    const organizationId =
      (claims as any).organizatio_id ||
      (claims as any).org_id ||
      (claims as any).oid ||
      null;

    if (!organizationId) {
      return NextResponse.json(
        { error: "no organization id" },
        { status: 500 },
      );
    }

    const existing = await db
      .select()
      .from(User)
      .where(eq(User.email, user.email));
    if (existing.length === 0) {
      await db.insert(User).values({
        name: user?.name,
        email: user.email,
        organizationId,
        image: user?.picture,
      });
    }

    const response = NextResponse.redirect(new URL("/", req.url));
    const userSession = {
      email: user.email,
      name: user.name,
    };
    response.cookies.set("user_session", JSON.stringify(userSession), {
      httpOnly: true,
      secure: process.env.NODE_ENV==='production',
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Error in GET /api/auth/callback:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
