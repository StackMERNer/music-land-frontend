import Logo from "./Logo";
import { Sidebar } from "./Sidebar";

const Header = () => {
  return (
    <nav>
      <div className="container mx-auto px-5 py-1 flex items-center justify-between">
        <div className="flex items-center gap-4 py-1 ">
          <Sidebar />
          <Logo/>
        </div>
        <div className="font-roboto font-semibold">
          <button className="px-4 py-1 rounded-full bg-primary-yellow text-black text-[12px]">
            Sign In
          </button>
        </div>
      </div>
      <span
        className={`h-[5px] bg-clip-border-[20] block w-full mt-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 [clip-path:polygon(0%_0%,50%_100%,100%_0%)]`}
      ></span>
    </nav>
  );
};

export default Header;
