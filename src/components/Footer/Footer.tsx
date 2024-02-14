import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className="  border-t-[1px] border-green-100/[.5]">
      <div className="container  mx-auto p-5 flex justify-between items-center">
        <Logo />
        <p className="text-gray-500"> &copy; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
