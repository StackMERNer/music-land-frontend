import { Sidebar } from "./Sidebar";

const Header = () => {
  return (
    <nav>
      <div className="container mx-auto px-5 py-1 flex items-center">
        <Sidebar />
        <h2 className="font-stylish text-xl">
          <span className="text-primary-yellow">Music</span>
          <span className="text-white">Land</span>
        </h2>
      </div>
    </nav>
  );
};

export default Header;
