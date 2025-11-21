"use client";

import { usePathname } from "next/navigation";
import { Hammer } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const authPages = ['/login', '/register'];
  if (authPages.includes(pathname)) {
    return null;
  }

  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Hammer className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Woodify</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Woodify. All rights reserved.
            </p>
            <nav className="flex justify-center md:justify-end space-x-4 mt-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
