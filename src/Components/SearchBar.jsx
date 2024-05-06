import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ custom }) => {
  return (
    <>
      <form
        action="submit "
        className={`  flex h-2 w-fit items-center rounded-3xl border border-black bg-white p-5 sm:h-12 ${custom}`}
      >
        <button className="pr-4 text-slate-500">
          <IoIosSearch size={25} />
        </button>
        <input
          type="text"
          placeholder="Cari Produk Anda disini..."
          className=" w-full border-none  bg-transparent outline-none sm:w-64"
        />
      </form>
    </>
  );
};

export default SearchBar;
