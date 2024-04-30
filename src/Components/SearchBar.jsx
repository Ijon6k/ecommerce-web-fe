import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ custom }) => {
  return (
    <>
      <form
        action="submit "
        className={`  flex h-12 w-fit items-center rounded-3xl border border-black bg-white p-5 ${custom}`}
      >
        <button className="pr-4 text-slate-500">
          <IoIosSearch size={25} />
        </button>
        <input
          type="text"
          placeholder="Cari Produk Anda disini..."
          className=" w-64  border-none bg-transparent outline-none"
        />
      </form>
    </>
  );
};

export default SearchBar;
