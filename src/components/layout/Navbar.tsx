"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavLinks from "../widgets/NavLinks";
import Link from "next/link";

type NavLink = {
  title: string;
  href: string;
  isOpenInNewTab?: boolean;
};

export const navLinks: NavLink[] = [
  { title: "blog", href: "/" },
  { title: "about", href: "/about" },
  { title: "sign in", href: "" },
  { title: "icon", href: "" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav>
      <NavLinks pathName={pathName} />
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href!}
                    target={link.isOpenInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2 capitalize",
                      pathName === link.href && "font-semibold"
                    )}
                  >
                    {link.title}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
