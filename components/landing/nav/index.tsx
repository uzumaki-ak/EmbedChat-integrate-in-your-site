import Link from "next/link";
import { useUser } from "@/hooks/useUser";
import isAuthorized from "@/lib/isAuthorized";


const Navbar = async()=> {
  const user = await isAuthorized();
  console.log(user);

  return (
    <nav className="fixed rounded-4xl p-2 m-2 top-0 inset-x-0 z-50 transition-all duration-300 backdrop:blur-sm border-b border-white/5 bg-[#050509]/50 hover:bg-black/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/59 border border-white/10 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-black rounded-2xl"></div>
          </div>
          <span className="text-sm font-medium tracking-tight text-white/90">
            OneMinute Support
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-light text-zinc-400">
          <Link
            href="#features"
            className=" hover:text-blue-300 transition-colors duration-300 font-medium"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-blue-300 transition-colors duration-300 font-medium"
          >
            Integrations
          </Link>
          <Link
            href="#pricing"
            className="hover:text-blue-300 transition-colors duration-300 font-medium"
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          {
            user ? (
              <div className="flex items-center gap-3">
                <Link href={"/dashboard"} className="text-xs bg-gray-900 px-4 py-1 rounded-br-2xl rounded-tl-2xl hover:text-blue-300/90 transition-colors duration-300 font-medium tracking-tight text-white/90">Dashboard</Link>
              </div>
            ) : (
              <>
                <Link
                  href={"/api/auth"}
                  className="text-xs hover:text-blue-300 transition-colors duration-300 font-medium tracking-tight text-white/90"
                >
                  SignIN
                </Link>
                <Link
                  href={"/api/auth"}
                  className="text-xs bg-gray-800 px-4 py-1 rounded-br-2xl rounded-tl-2xl hover:text-blue-300 transition-colors duration-300 font-medium tracking-tight text-white/90"
                >
                  Get Started
                </Link>
              </>
            )
          }
       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
