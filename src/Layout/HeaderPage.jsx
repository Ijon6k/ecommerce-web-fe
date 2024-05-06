import { FaShoppingCart } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Navtab from "../Components/Navtab";
import SearchBar from "../Components/SearchBar";
import { Link } from "react-router-dom";
import WebLogo from "../Components/WebLogo";

const HeaderPage = ({ custom }) => {
  return (
    <div>
      <section
        className={`${custom}    top-0 z-10 h-auto w-full bg-[#EBEBEB] `}
      >
        <WebLogo
          custom={
            "absolute top-2 left-2 md:left-10 md:top-14 md:left-10 md:text-xl"
          }
        ></WebLogo>
        <Navbar custom=" p-2 md:p-14" text="text-black" />
        <SearchBar custom={"ml-10"} />
        <div className="flex w-full items-center justify-between">
          <Navtab custom={"mt-8"}></Navtab>
          <Link
            to="/cart"
            className="mr-10 hidden w-fit gap-4 rounded-3xl bg-greenprime  px-7 py-3 text-xl font-semibold text-white md:flex"
          >
            Keranjang <FaShoppingCart size={30} color="white" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeaderPage;
