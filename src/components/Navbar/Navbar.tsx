import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3 text-white">
        <Link href="/">
          <h3 className="font-bold text-3xl">Home</h3>
        </Link>
        <ul className="flex gap-x-10 text-lg font-bold">
          <li>
            <Link href="/analytics" className="text-slate-300 hover:text-slate-200">
              Analiticas
            </Link>
          
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;