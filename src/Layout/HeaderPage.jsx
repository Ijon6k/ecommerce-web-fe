import { FaShoppingCart } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Navtab from "../Components/Navtab";
import SearchBar from "../Components/SearchBar";
import { Link } from "react-router-dom";

const HeaderPage = ({ custom }) => {
  return (
    <div>
      <section
        className={`${custom}  top-0 z-10 h-auto w-full border-b  border-slate-300 bg-[#EBEBEB] pb-2 lg:border-none lg:pb-0 `}
      >
        <Navbar custom=" p-2 md:p-8 lg:px-14" text="text-black" />
        <SearchBar custom={"mx-auto sm:ml-10"} />
        <div className="flex w-full items-center justify-between">
          <Navtab custom={"mt-8"}></Navtab>
          <Link
            to="/cart"
            className="mr-10 hidden w-fit gap-4 rounded-3xl bg-greenprime  px-7 py-3 text-xl font-semibold text-white lg:flex"
          >
            Keranjang <FaShoppingCart size={30} color="white" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeaderPage;
