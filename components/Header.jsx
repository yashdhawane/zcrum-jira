import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./UserMenu";
import { checkUser } from "@/lib/checkUser";
import UserLoading from "./user-loading";

async function Header() {
  await checkUser();
  return (
    <div>
       <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            <Image
              src={"/logo2.png"}
              alt="Zscrum Logo"
              width={200}
              height={56}
              className="h-10 w-auto object-contain"
            />
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/projects/create">
            <Button variant="destructive" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </Button>
          </Link>
          
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
          <UserMenu/>
          </SignedIn>
          </div>
        </nav>

        <UserLoading/>
        </header>
       

         
    </div>
  )
}

export default Header