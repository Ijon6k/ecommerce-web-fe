import { FaShoppingCart } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Navtab from "../Components/Navtab";
import SearchBar from "../Components/SearchBar";

const HeaderPage = () => {
  return (
    <div>
      <section className="h-auto   w-full bg-[#F3FFF3] ">
        <Navbar custom="text-black" />
        <SearchBar custom={"ml-10"} />
        <div className="flex w-full items-center justify-between">
          <Navtab custom={"mt-8"}></Navtab>
          <button className="mr-10 flex w-fit gap-4 rounded-3xl  bg-greenprime px-7 py-3 text-xl font-semibold text-white">
            Keranjang <FaShoppingCart size={30} color="white" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeaderPage;
