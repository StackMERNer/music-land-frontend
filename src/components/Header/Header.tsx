import { Sidebar } from "./Sidebar";

const Header = () => {
  return (
    <nav>
      <div className="container mx-auto px-5 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2 py-1 ">
          <Sidebar />
          <h2 className="font-stylish text-xl">
            <span className="text-primary-yellow">Music</span>
            <span className="text-white">Land</span>
          </h2>
        </div>
        <div className="font-roboto font-semibold">
          <button className="px-4 py-1 rounded-full bg-primary-yellow text-black text-[12px]">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
