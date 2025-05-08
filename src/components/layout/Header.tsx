import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      <Link href="/">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          Самнах машины тооцоолол
        </h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
