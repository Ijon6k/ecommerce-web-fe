import { useState } from "react";
import Product1 from "../../assets/Product1.webp";
import { FaRegHeart } from "react-icons/fa";
import MoreInfoProduct from "./MoreInfoProduct";

const DetailSection = ({ custom }) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <section
      className={`m-10 h-fit min-h-screen  rounded-3xl border border-slate-300 bg-white p-16 ${custom}`}
    >
      <div className="flex h-auto w-full items-center justify-between gap-20 border-b border-slate-300 p-10">
        {/* image */}
        <div className="boor min-h-96 min-w-96 rounded-xl border p-5">
          <img
            src={Product1}
            className=" h-96 w-96 rounded-xl  object-cover object-center"
            alt=""
          />
        </div>

        {/* detail info */}
        <div className="w-96 ">
          {/* price and title */}
          <div className="border-b border-slate-300">
            <h1 className="text-4xl font-bold">Product Title</h1>
            <p className="text-sm text-slate-500">
              Lorem ipsum dolor sit amet.
            </p>
            <h1 className="mb-5 mt-10 font-semibold">
              <span className="font-sm h-full items-start">Rp</span>{" "}
              <span className="text-3xl">999.999</span>
            </h1>
          </div>
          {/* variant */}
          <div className="h-fit border-b border-slate-300 py-3">
            <h2 className="font-semibold">Warna(2)</h2>
            <p className="text-sm text-greenprime">Hijau Muda</p>
            <div className="mt-5 flex w-96 gap-2 ">
              <button
                className={`h-8 w-8 ${isActive ? "border border-black" : ""}`}
                onClick={handleButtonClick}
              >
                <img
                  className="h-8 w-8 rounded-lg border border-black object-cover object-center"
                  src={Product1}
                  alt=""
                />
              </button>
              <button
                className={`h-8 w-8 bg-red-50 ${isActive ? "border border-blue-500" : ""}`}
                onClick={handleButtonClick}
              >
                <img
                  className="h-8 w-8 rounded-lg border border-black object-cover object-center"
                  src={Product1}
                  alt=""
                />
              </button>
            </div>
          </div>
          {/* jumlah */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-xl">Jumlah : </p>
            <div className="flex items-center rounded-3xl border border-slate-700  py-1">
              <button className="px-4 font-normal  text-greenprime">-</button>
              <span className="px-4 text-gray-700">0</span>
              <button className="black px-4 text-2xl font-normal">+</button>
            </div>
          </div>

          <div className="mt-10 flex w-full items-center justify-between ">
            <button className=" rounded-full bg-greenprime p-4 font-semibold text-white">
              Tambah ke Keranjang
            </button>
            <button className="h-fit rounded-full border border-black p-4 ">
              <FaRegHeart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* More Info */}
      <div>
        <MoreInfoProduct></MoreInfoProduct>
      </div>
    </section>
  );
};

export default DetailSection;
