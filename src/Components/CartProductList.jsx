import CartProduct from "./CartProduct";

const CartProductList = () => {
  return (
    <div className=" flex w-auto flex-col justify-between gap-5    ">
      {/* <!-- product item --> */}
      <div className="flex h-fit w-full items-center justify-between rounded-tl-3xl rounded-tr-3xl bg-white p-10 ">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-7 h-6 w-6 rounded-sm border-2 border-blue-500 checked:border-transparent"
          />

          <label className="text-xl font-semibold">Pilih semua </label>
        </div>
        <button className="text-xl font-bold text-greenprime">Hapus</button>
      </div>

      {/*  LOOPING PRODUCT DISINI */}
      {/* <!-- product item end --> */}
      <CartProduct></CartProduct>
      {/* <!-- product item --> */}
    </div>
  );
};

export default CartProductList;
