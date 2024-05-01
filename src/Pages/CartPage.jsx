import CartProductList from "../Components/CartProductList";
import HeaderPage from "../Layout/HeaderPage";

const CartPage = () => {
  return (
    <div className="h-full min-h-screen bg-[#EBEBEB]  pb-28">
      <HeaderPage></HeaderPage>
      <h1 className="my-10 ml-10 text-4xl font-bold">Keranjang</h1>
      <section className="m-10 flex  gap-8">
        {/* main content */}

        <div className="w-screen">
          <CartProductList></CartProductList>
        </div>
        {/* main content end */}

        {/* SUMMARY  PRICE SECTION */}
        <div>
          {/* SUMMARY  */}
          <div className="flex h-full min-h-80 w-80 flex-col justify-between rounded-3xl  bg-white p-10">
            <div>
              <h1 className="mb-5 text-2xl font-bold">Ringkasan belanja</h1>
              <div className="flex items-center justify-between border-b border-slate-300">
                <h1 className="text-xl font-semibold">Total </h1>
                <h1>
                  Rp <span className="text-xl font-semibold">999.999</span>
                </h1>
              </div>
            </div>

            <button className="w-full rounded-3xl bg-greenprime py-2 text-xl font-semibold text-white">
              Beli (1)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
