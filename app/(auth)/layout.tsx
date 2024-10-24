"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();
  const signUpRoute = pathname === "/sign-up";
  const signInRoute = pathname === "/sign-in";

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={152}
              height={56}
              className="cursor-pointer"
              priority
            />
          </Link>
          <Button variant="secondary" asChild>
            <Link href={signInRoute ? "/sign-up" : "/sign-in"}>
              {signUpRoute ? "Sign In" : "Sign Up"}
            </Link>
          </Button>
        </nav>
        <main className="flex items-center justify-center mt-4 md:mt-10 lg:mt-14">
          {children}
        </main>
      </div>
    </div>
  );
}
