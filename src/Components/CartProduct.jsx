import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";

const CartProduct = () => {
  return (
    <div className="min-w-screen flex h-fit w-full justify-between rounded-bl-3xl rounded-br-3xl bg-white p-10">
      <div className="flex">
        <input type="checkbox" className="mr-10 h-6 w-6 rounded-md" />
        {/* <!-- image --> */}
        <img
          src="./src/assets/Product1.webp"
          className="mr-7 h-44 w-44 rounded-2xl bg-gray-300"
        ></img>
        {/* <!-- image --> */}
        <div className="min-h-36 w-fit  ">
          <h1 className="mb-3 text-2xl font-bold ">Title Product</h1>
          <p className=" w-full max-w-[500px] text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-right text-xl font-semibold">Rp 300.000</h1>
        <div className="flex gap-4">
          <button className="text-xl text-slate-300">
            <FaRegHeart size={30}></FaRegHeart>
          </button>
          <button className="text-xl text-slate-300">
            <FaRegTrashAlt size={30} />
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
