"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavLinks from "../widgets/NavLinks";
import Link from "next/link";

type NavLink = {
  title: string;
  getValue(): string | JSX.Element;
  isOpenInNewTab?: boolean;
};

export const navLinks: NavLink[] = [
  { title: "blog", getValue: () => "/" },
  { title: "about", getValue: () => "/about" },
  {
    title: "login",
    getValue: () => (
      <Button className={cn("block py-2 ml-2")} variant="ghost">
        Login
      </Button>
    ),
  },
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
                {navLinks.map((link) => {
                  if (link.title !== "login") {
                    const value = link.getValue() as string;

                    return (
                      <Link
                        key={link.title}
                        href={value}
                        target={link.isOpenInNewTab ? "_blank" : "_self"}
                        className={cn(
                          "block py-2 capitalize",
                          pathName === value && "font-semibold"
                        )}
                      >
                        {link.title}
                      </Link>
                    );
                  }

                  return link.getValue() as JSX.Element;
                })}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
