import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/' className="font-stylish md:text-2xl text-xl">
      <span className="text-primary-yellow">Music</span>
      <span className="text-white">Land</span>
    </Link>
  );
};

export default Logo;
