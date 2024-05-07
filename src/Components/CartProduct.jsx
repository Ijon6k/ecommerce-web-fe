import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";

const CartProduct = () => {
  return (
    <div className=" relative flex h-fit justify-between rounded-bl-3xl rounded-br-3xl bg-white p-2 py-3 lg:p-10">
      <div className="flex h-fit w-full justify-between  sm:w-fit sm:justify-normal ">
        <input
          type="checkbox"
          className="h-4 w-4 rounded-md md:mr-10 lg:h-6 lg:w-6"
        />
        {/* <!-- image --> */}
        <img
          src="./src/assets/Product1.webp"
          className="object-fit h-20 w-20 rounded-2xl bg-gray-300 object-cover object-center md:mr-7 lg:h-44 lg:w-44"
        ></img>
        {/* <!-- image --> */}
        <div className="min-h-36 w-44 lg:w-96  ">
          <h1 className="mb-3 font-bold lg:text-2xl ">Title Product</h1>
          <p className="lg line-clamp-2 h-10 w-full max-w-[500px] truncate text-wrap pr-5 text-sm text-slate-400 lg:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
      </div>
      <div className=" absolute bottom-2 right-0 flex-col justify-between pr-5 sm:static sm:flex">
        <h1 className="text-right text-lg font-semibold lg:text-xl ">
          Rp 300.000
        </h1>
        <div className="flex gap-4">
          <button className="text-slate-300 lg:text-3xl">
            <FaRegHeart></FaRegHeart>
          </button>
          <button className=" text-slate-300  lg:text-3xl">
            <FaRegTrashAlt />
          </button>
          <div className="flex items-center rounded-xl border-2  border-slate-300 ">
            <button className="px-3 font-bold text-gray-700">-</button>

            {/* JUMLAH PRODUCT TERGANTUNG DARI DATABASE  */}
            <span className="px-4 text-gray-700">0</span>

            <button className="px-3 font-bold text-greenprime">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
