import { cn } from "@/lib/utils";
import Link from "next/link";
import { navLinks } from "../layout/Navbar";

const NavLinks = ({ pathName }: { pathName: string }) => {
  return (
    <div className="hidden md:flex items-center">
      {navLinks.map((link) => {
        const { title } = link;
        const value = link.getValue() as string;

        if (title !== "login") {
          return (
            <div key={title} className="ml-4 md:ml-8">
              <Link
                href={value}
                target={link.isOpenInNewTab ? "_blank" : "_self"}
                className={cn(
                  "capitalize hover:text-gray-900",
                  pathName === value && "font-semibold"
                )}
              >
                {title}
              </Link>
            </div>
          );
        }

        return link.getValue("ms-10") as JSX.Element;
      })}
    </div>
  );
};

export default NavLinks;
