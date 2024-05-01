// ProductPage.jsx
import Card from "../Components/Card";
import ContohDataProduk from "../ContohDataProduk.json";
import HeaderPage from "../Layout/HeaderPage";

const ProductPage = () => {
  const products = ContohDataProduk;

  return (
    <section className="h-auto min-h-screen  w-full bg-[#EBEBEB] ">
      <HeaderPage></HeaderPage>
      <div className="grid grid-cols-1 gap-y-20 px-5 py-8 md:grid-cols-2 xl:grid-cols-4 ">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <Card product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
