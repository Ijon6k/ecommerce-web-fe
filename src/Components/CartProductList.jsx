import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const CartProductList = () => {
  const [products, setProducts] = useState([]); // State untuk menyimpan produk

  // State untuk data pengguna dan token
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  // Fungsi untuk memuat keranjang belanja pengguna
  useEffect(() => {
    const getCart = async (token, username) => {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Content-Type', 'application/json');
      const response = await fetch(`http://localhost:5000/e-commerce/v1/cart/${username}`, {
        method: 'GET',
        headers: headers
      });
      const json = await response.json();
      if (json['status_code'] === 200) {
        setProducts(json['result']);
      }
    };

    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      setToken(accessToken);
      setUser(decodedToken);
      getCart(accessToken, decodedToken.username);
    }
  }, []);

  return (
    <div className="flex flex-col justify-between gap-5">
      {/* Bagian untuk memilih semua */}
      <div className="flex items-center justify-between rounded-tl-3xl rounded-tr-3xl bg-white p-10">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-7 h-6 w-6 rounded-sm border-2 border-blue-500 checked:border-transparent"
            checked={true}
          />
          <label className="text-xl font-semibold">Pilih semua</label>
        </div>
        <button className="text-xl font-bold text-greenprime">Hapus</button>
      </div>
      
      {/* Menampilkan daftar produk */}
      {products.map(product => (
        <CartProduct
          key={product.id}
          product={product}
          token={token}
          user={user}
        />
      ))}
    </div>
  );
};

export default CartProductList;
