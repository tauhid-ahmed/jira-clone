import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
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
          <Button variant="secondary">Sign up</Button>
        </nav>
        <main className="flex items-center justify-center mt-4 md:mt-10 lg:mt-14">
          {children}
        </main>
      </div>
    </div>
  );
}
