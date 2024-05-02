import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../Components/Card";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const ProductSection = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getProduct = async (username) => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const response = await fetch(`https://ecommerce-api-production-facf.up.railway.app/e-commerce/v1/product/${username}`, {
          method: 'GET',
          headers: headers
      });
      const json = await response.json();
      if (json.status_code === 200) {
        setList(json.result)
      }
    };
    getProduct('nexblu')
  }, []);

  return (
    <section className=" h-fit w-screen  bg-[#EBEBEB] ">
      <h1 className="py-10 text-center text-4xl font-bold">Our Product</h1>

      <div className=" flex w-full items-center justify-between ">
        <button className="ml-10 h-fit w-fit rounded-full bg-greenprime p-3 font-bold text-white ">
          <IoIosArrowBack size={30} />
        </button>
        <div className="   w-fit max-w-[1200px] gap-20 overflow-hidden   p-10 ">
          <div className="gap flex w-fit gap-20">
            {list.map((product) => (
              <div key={product.id} className="flex justify-center">
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
        <button className="mr-12 h-fit w-fit rounded-full bg-greenprime p-3 text-white ">
          <IoIosArrowForward size={30} />
        </button>
      </div>
      <div className="flex justify-center">
        <Link
          to="/products"
          className="mt-5 rounded-3xl bg-greenprime px-8 py-4 text-xl font-semibold text-white "
        >
          SHOW MORE
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
