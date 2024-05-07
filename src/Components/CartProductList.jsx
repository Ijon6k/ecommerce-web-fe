import CartProduct from "./CartProduct";

const CartProductList = () => {
  return (
    <div className=" flex w-auto flex-col justify-between gap-5 md:mx-10 lg:mx-0 ">
      {/* <!-- product item --> */}
      <div className="flex h-fit w-full items-center justify-between rounded-tl-xl rounded-tr-xl bg-white px-4 py-4  lg:rounded-tl-3xl lg:rounded-tr-3xl lg:p-10 ">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-7 rounded-sm border-2 border-blue-500 checked:border-transparent lg:h-6 lg:w-6"
          />

          <label className="font-semibold lg:text-xl">Pilih semua </label>
        </div>
        <button className="font-bold text-greenprime lg:text-xl">Hapus</button>
      </div>

      {/*  LOOPING PRODUCT DISINI */}
      {/* <!-- product item end --> */}
      <CartProduct></CartProduct>
      {/* <!-- product item --> */}
    </div>
  );
};

export default CartProductList;
