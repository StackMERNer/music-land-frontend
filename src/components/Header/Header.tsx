import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Sidebar } from "./Sidebar";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import useUser from "../../hooks/useUser";
import { IoMdCart } from "react-icons/io";
import useCart from "../../hooks/useCart";
const Header = () => {
  const [gUser] = useAuthState(auth);
  const { user } = useUser(gUser?.uid);
  const [signOut] = useSignOut(auth);
  const { cart } = useCart();
  return (
    <nav className="sticky left-0 right-0 top-0 z-10 bg-dark-solid ">
      <div className="container mx-auto px-5 py-1 flex items-center justify-between">
        <div className="flex items-center gap-4 py-1 ">
          <Sidebar />
          <Logo />
        </div>
        <div className="font-roboto  flex items-center gap-4">
          <Link to="/cart">
            <div className="relative ">
              <span className="px-2 bg-primary-yellow rounded-full inline-block text-[10px]  absolute top-[-8px] left-[10px]">
                {cart.length}
              </span>
              <IoMdCart size={25} color="white" />
            </div>
          </Link>
          <Link to={`/orders/${user?._id}`}>
            <span className="text-white">Orders</span>
          </Link>

          {user?.email ? (
            <button onClick={() => signOut()} className="text-white">
              Sign Out
            </button>
          ) : (
            <Link
              to="/signIn"
              className="px-4 py-1 rounded-full bg-primary-yellow text-black text-[12px]"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
      <span
        className={`h-[2px]  block w-full mt-1 bg-gradient-to-br from-yellow-500 via-green-light [clip-path:polygon(0%_0%,50%_100%,100%_0%)]`}
      ></span>
    </nav>
  );
};

export default Header;
