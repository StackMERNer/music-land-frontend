import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer>
      <span
        className={`md:h-[3px] h-[2px]  block w-full mt-1 bg-gradient-to-br  from-yellow-500 via-green-light [clip-path:polygon(0%_0%,50%_80%,100%_0%)]`}
      ></span>
      <div className="container  mx-auto p-5 flex justify-between items-center">
        <Logo />
        <p className="text-gray-500"> &copy; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
