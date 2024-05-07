// ProductPage.jsx
import { FaArrowUp } from "react-icons/fa";
import Card from "../Components/Card";
import HeaderPage from "../Layout/HeaderPage";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [list, setList] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

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

    // * untuk deteksi window scroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Handler untuk melakukan auto scroll ke paling atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="h-auto min-h-screen  w-full bg-[#EBEBEB] ">
      <HeaderPage></HeaderPage>
      <div className="grid grid-cols-1 gap-y-20 px-5 py-8  md:grid-cols-2 xl:grid-cols-4 ">
        {/* Looping dari API nya  */}
        {list.map((product) => (
          <div key={product.id} className="flex justify-center">
            <Card product={product} />
          </div>
        ))}
      </div>

      {/* Tombol Scroll To Top */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10  right-10 h-fit w-fit  rounded-full  bg-greenprime p-5 text-white shadow-md transition duration-300 ease-in-out hover:bg-gray-600 xl:hidden"
        >
          <FaArrowUp color="white" size={30} />
        </button>
      )}
    </section>
  );
};

export default ProductPage;
