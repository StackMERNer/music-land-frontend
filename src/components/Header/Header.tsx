import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Sidebar } from "./Sidebar";

const Header = () => {
  return (
    <nav className="sticky left-0 right-0 top-0 z-10 bg-dark-solid ">
      <div className="container mx-auto px-5 py-1 flex items-center justify-between">
        <div className="flex items-center gap-4 py-1 ">
          <Sidebar />
          <Logo />
        </div>
        <div className="font-roboto font-semibold">
          <Link to='/signIn' className="px-4 py-1 rounded-full bg-primary-yellow text-black text-[12px]">
            Sign In
          </Link>
        </div>
      </div>
      <span
        className={`h-[2px]  block w-full mt-1 bg-gradient-to-br from-yellow-500 via-green-light [clip-path:polygon(0%_0%,50%_100%,100%_0%)]`}
      ></span>
    </nav>
  );
};

export default Header;
