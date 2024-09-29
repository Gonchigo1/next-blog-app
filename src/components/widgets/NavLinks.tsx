import { cn } from "@/lib/utils";
import Link from "next/link";
import { navLinks } from "../layout/Navbar";

const NavLinks = ({ pathName }: { pathName: string }) => {
  return (
    <div className="hidden md:flex items-center">
      {navLinks.map((link) => (
        <div key={link.title} className="ml-4 md:ml-8">
          <Link
            href={link.href!}
            target={link.isOpenInNewTab ? "_blank" : "_self"}
            className={cn(
              "capitalize hover:text-gray-900",
              pathName === link.href && "font-semibold"
            )}
          >
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
