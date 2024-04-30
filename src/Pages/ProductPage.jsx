// ProductPage.jsx
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import ContohDataProduk from "../ContohDataProduk.json";

const ProductPage = () => {
  const products = ContohDataProduk;

  return (
    <section className="h-auto min-h-screen  w-full bg-[#F3FFF3] ">
      <Navbar custom="text-black" />
      <SearchBar custom={"ml-10"} />

      <div className="grid grid-cols-1 gap-y-16 px-8 py-8 md:grid-cols-2 xl:grid-cols-4 ">
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
