import scalekit from "@/lib/scalekit";
import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const state = crypto.randomBytes(32).toString("hex");
    (await cookies()).set("sk_state",state,{
        httpOnly:true,
        secure:true,
        sameSite:"lax",
        maxAge:60*60*24,
        path:"/"
    })
    const redirectUri = process.env.SCALEKIT_REDIRECT_URI!;
    const options = {
        scopes: ['openid', 'profile', 'email', 'offline_access'],
        state
    }
    const authorizationUrl = scalekit.getAuthorizationUrl(redirectUri,options);
    return NextResponse.redirect(authorizationUrl);
  } catch (error) {
    console.error("Error in GET /api/auth:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
