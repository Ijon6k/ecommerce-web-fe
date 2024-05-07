import CartProductList from "../Components/CartProductList";
import HeaderPage from "../Layout/HeaderPage";

const CartPage = () => {
  return (
    <div className="h-full min-h-screen bg-[#EBEBEB]  pb-28">
      <HeaderPage></HeaderPage>
      <h1 className="px-2 py-5 font-bold md:my-10 md:ml-10 lg:p-0 lg:text-4xl">
        Keranjang
      </h1>
      <section className="flex flex-col gap-8 pb-64 lg:m-10 lg:flex-row">
        {/* main content */}

        <div className="w-screen">
          <CartProductList></CartProductList>
        </div>
        {/* main content end */}

        {/* SUMMARY  PRICE SECTION */}
        <div className="md:h fixed bottom-0 h-fit min-h-24 w-full flex-col justify-between border border-slate-300 bg-white p-5  lg:static lg:flex lg:w-[500px] lg:rounded-3xl lg:p-10">
          {/* SUMMARY  */}
          <h1 className="mb-5 text-end font-bold lg:text-start lg:text-2xl">
            Ringkasan belanja
          </h1>
          <div className="">
            <div className="flex h-fit w-full flex-row items-center justify-end  gap-2 md:gap-10 lg:flex-col ">
              <div className="flex items-center gap-5 border-b border-slate-300 lg:mb-5 lg:block lg:w-full lg:justify-between">
                <h1 className="text-xl font-semibold">Total: </h1>
                <h1 className="flex gap-1">
                  Rp <span className="text-xl font-semibold"> 999.999</span>
                </h1>
              </div>
              <button className=" w-fit rounded-3xl bg-greenprime px-5 py-2 font-semibold text-white md:px-10 lg:w-full  lg:text-xl">
                Beli (1)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
