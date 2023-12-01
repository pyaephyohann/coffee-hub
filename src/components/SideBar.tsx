import logo from "../assets/logo.png";
import { FaXmark } from "react-icons/fa6";
import { navBarItems } from "../datas";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SideBar = ({ open, setOpen }: Props) => {
  return (
    <div
      className={`
      ${
        open ? "w-[60%] px-4 py-4" : "w-0"
      } transition-all duration-500 ease-in-out fixed right-0 top-0 h-screen bg-primary text-white z-[9999]`}
    >
      {/* top bar */}
      <div className="flex items-center justify-between">
        {/* logo and name */}
        <a href="/" className="flex items-center">
          <img className="h-[4.5rem]" src={logo} alt="logo" />
          <h1 className="text-xl md:text-2xl font-bold">Coffee Hub</h1>
        </a>
        <button onClick={() => setOpen(false)}>
          <FaXmark className="text-3xl" />
        </button>
      </div>
      {/* nav bar items */}
      <div className="pl-4 mt-10">
        <ul className="flex flex-col space-y-6">
          {navBarItems.map((item, index) => {
            return (
              <a className="text-xl" href={item.path}>
                {item.name}
              </a>
            );
          })}
        </ul>
        <button className="text-md md:text-lg bg-secondary text-white py-2 px-4 rounded-md mt-10">
          Make Coffee
        </button>
      </div>
    </div>
  );
};

export default SideBar;
