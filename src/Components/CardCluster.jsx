import Card from "./Card";

// require API
import ContohDataProduk from "../ContohDataProduk.json";
const CardCluster = () => {
  // CONTOH API NYA bisa diganti sewaktu waktu atau tambah props supaya bisa di custom di page lain
  const products = ContohDataProduk;
  return (
    <div className="grid grid-cols-1 gap-y-20 px-5 py-8 md:grid-cols-2 xl:grid-cols-4 ">
      {products.map((product) => (
        <div key={product.id} className="flex justify-center">
          <Card product={product} />
        </div>
      ))}
    </div>
  );
};

export default CardCluster;
