import CartProductList from "../Components/CartProductList";
import HeaderPage from "../Layout/HeaderPage";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const CartPage = () => {
  const [product, setProduct] = useState([]) // state list bill product
  const [price, setPrice] = useState(0) // state total price

  // fetch api bill
  useEffect(() => {
    const getCart = async (token, username) => {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Content-Type', 'application/json');
      const response = await fetch(`http://127.0.0.1:5000/e-commerce/v1/cart/bill/tick/${username}`, {
        method: 'GET',
        headers: headers
      });
      const json = await response.json();
      if (json['status_code'] === 200) {
        setProduct(json['result']['item']);
        setPrice(json['result']['total_price'])
      }
    };

    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      getCart(accessToken, decodedToken.username);
    }
  }, []);

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
                  Rp <span className="text-xl font-semibold">{price}</span>
                </h1>
              </div>
            </div>

            <button className="w-full rounded-3xl bg-greenprime py-2 text-xl font-semibold text-white">
              {`Beli (${product.length})`}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
