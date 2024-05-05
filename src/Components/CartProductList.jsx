import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const CartProductList = () => {
  const [product, setProduct] = useState([]) // state list product
  const [selectAll, setSelectAll] = useState(false) // state select all
  const [markSelectAll, setMarkSelectAll] = useState(false) // state mark select all

  // state user oauth
  const [user, setUser] = useState({})
  const [token, setToken] = useState('')

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      setToken(accessToken)
      setUser(decodedToken)
    }
  }, []);

  const apiMarkAllCart = async (token, username) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`)
    headers.append('Content-Type', 'application/json')
    const data = {
      username: username,
    }
    const response = await fetch('http://127.0.0.1:5000/e-commerce/v1/cart/tick', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(
        data
      )
    })
    const resp = await response.json()
    console.log(resp)
    if (resp.status_code === 201) {
      return true
    } else {
      return false
    }
  }

  const handleSelectAll = async () => {
    setSelectAll(!selectAll); // Toggles selectAll state
    product.forEach((prod) => {
      prod.mark = selectAll;
    });
    setProduct([...product]);
    const result = await apiMarkAllCart(token, user.username, selectAll);
    if (result) {
      setMarkSelectAll(!markSelectAll);
    }
  };

  // fetch user token from cookie
  useEffect(() => {
    const getCart = async (token, username) => {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Content-Type', 'application/json');
      const response = await fetch(`http://127.0.0.1:5000/e-commerce/v1/cart/${username}`, {
        method: 'GET',
        headers: headers
      });
      const json = await response.json();
      if (json['status_code'] === 200) {
        setProduct(json['result']);
        console.log(json['result'])
      }
    };

    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      getCart(accessToken, decodedToken.username);
    }
  }, []);

  return (
    <div className=" flex w-auto flex-col justify-between gap-5    ">
      {/* <!-- product item --> */}
      <div className="flex h-fit w-full items-center justify-between rounded-tl-3xl rounded-tr-3xl bg-white p-10 ">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-7 h-6 w-6 rounded-sm border-2 border-blue-500 checked:border-transparent" onChange={handleSelectAll}
            checked={selectAll}
          />

          <label className="text-xl font-semibold">Pilih semua </label>
        </div>
        <button className="text-xl font-bold text-greenprime">Hapus</button>
      </div>

      {/*  LOOPING PRODUCT DISINI */}
      {/* <!-- product item end --> */}
      {product.map((product) => (
        <CartProduct  key={product.id} product={product} markSelectAll={markSelectAll} setMarkSelectAll={setMarkSelectAll} />
      ))}
      {/* <!-- product item --> */}
    </div>
  );
};

export default CartProductList;
