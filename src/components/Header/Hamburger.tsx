import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const Hamburger = ({
  toggleDrawer,
  isOpen,
}: {
  toggleDrawer: () => void;
  isOpen: boolean;
}) => {
  return (
    <button
      className="text-gray-400  shadow-[0_0_3px] shadow-primary-yellow p-[1px] rounded"
      onClick={toggleDrawer}
    >
      {isOpen ? (
        <XMarkIcon className="h-8 w-8 stroke-2" />
      ) : (
        <Bars3Icon className="h-8 w-8 stroke-2" />
      )}
    </button>
  );
};

export default Hamburger;
