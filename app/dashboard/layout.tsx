import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const metadata = {
  title: "one minute suppport dashboard",
  description:
    "it instantly answrs user faqs related to the website and generates ticket for the unanswered questions",
};
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const metadataCookie = cookieStore.get("metadata");
  return (
    <div className="bg-[#050509] min-h-screen font-sans antialiased text-white selection:bg-zinc-800 flex">
      {metadataCookie?.value ? <>{children}</> : children}
    </div>
  );
}
