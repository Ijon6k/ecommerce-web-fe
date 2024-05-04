// ProductPage.jsx
import Card from "../Components/Card";
import HeaderPage from "../Layout/HeaderPage";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getProduct = async (username) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const response = await fetch(
        `https://ecommerce-api-production-facf.up.railway.app/e-commerce/v1/product/${username}`,
        {
          method: "GET",
          headers: headers,
        },
      );
      const json = await response.json();
      if (json.status_code === 200) {
        setList(json.result);
      }
    };
    getProduct("nexblu");
  }, []);

  return (
    <section className="h-auto min-h-screen  w-full bg-[#EBEBEB] ">
      <HeaderPage></HeaderPage>
      <div className="grid grid-cols-1 gap-y-20 px-5 py-8 md:grid-cols-2 xl:grid-cols-4 ">
        {/* Looping dari API nya  */}
        {list.map((product) => (
          <div key={product.id} className="flex justify-center">
            <Card product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
