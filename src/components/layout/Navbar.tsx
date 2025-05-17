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
  getValue(styles?: string): string | JSX.Element;
  isOpenInNewTab?: boolean;
};

export const navLinks: NavLink[] = [
  { title: "Самнах ажиллагааны тухай", getValue: () => "/" },
  { title: "ЧММ-450-4 Тооцоолол", getValue: () => "/calculate" },
  { title: "Бидний тухай", getValue: () => "/about" },
  {
    title: "login",
    getValue: (styles: string) => (
      <Button className={cn(`block py-2 ${styles}`)}>Login</Button>
    ),
  },
  {
    title: "register",
    getValue: (styles: string) => (
      <Button className={cn(`block py-2 ${styles}`)}>Register</Button>
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
                {navLinks.map((link,index) => {
                  if (link.title !== "login") {
                    const value = link.getValue() as string;

                    return (
                      <Link
                        key={`${link.title}-${index}`}
                        href={value}
                        target={link.isOpenInNewTab ? "_blank" : "_self"}
                        className={cn(
                          "block py-2 ps-3 capitalize",
                          pathName === value && "font-semibold"
                        )}
                      >
                        {link.title}
                      </Link>
                    );
                  }

                  return link.getValue("ms-0 mt-3") as JSX.Element;
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
