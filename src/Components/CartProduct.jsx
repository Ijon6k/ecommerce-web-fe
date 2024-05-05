import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const CartProduct = (prop) => {
  const { product, markSelectAll, setMarkSelectAll } = prop;
  const [tick, setTick] = useState(product.mark);

  const [amount, setAmount] = useState(product.amount) // state amount wishlist

  // api update amount cart
  const apiUpdateAmount = async (token, username, product_id, amount) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`)
    headers.append('Content-Type', 'application/json')
    const data = {
      username: username,
      product_id: product_id,
      amount: amount
    }
    const response = await fetch('http://127.0.0.1:5000/e-commerce/v1/cart/bill/amount', {
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

  // handler button add amount cart
  const addProduct = async () => {
    if (amount < product.stock) {
      const result = await apiUpdateAmount(token, user.username, product.product_id, amount + 1)
      if (result) {
        setAmount(amount + 1)
      }
    }
  }

  // handler button min amount cart
  const minProduct = async () => {
    if (amount > 0) {
      const result = await apiUpdateAmount(token, user.username, product.product_id, amount - 1)
      if (result) {
        setAmount(amount - 1)
      }
    }
  }

  // state user
  const [user, setUser] = useState({})
  const [token, setToken] = useState('')

  // get token
  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      setToken(accessToken)
      setUser(decodedToken)
    }
  }, []);

  // api update tick cart
  const apiUpdateTick = async (token, username, product_id) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`)
    headers.append('Content-Type', 'application/json')
    const data = {
      username: username,
      product_id: product_id
    }
    const response = await fetch('http://127.0.0.1:5000/e-commerce/v1/cart/bill/tick', {
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

  // Function to handle checkbox click
  const handleTick = async () => {
    const newMark = !tick;
    const result = await apiUpdateTick(token, user.username, product.product_id);
    if (result) {
      setTick(newMark);
      setMarkSelectAll(!markSelectAll); // Update markSelectAll
    }
  };

  return (
    <div className="min-w-screen flex h-fit w-full justify-between rounded-bl-3xl rounded-br-3xl bg-white p-10">
      <div className="flex">
        <input type="checkbox" className="mr-10 h-6 w-6 rounded-md" checked={tick || markSelectAll} onChange={handleTick} />
        {/* <!-- image --> */}
        <img src={product.image_url} className="mr-7 h-44 w-44 rounded-2xl bg-gray-300" alt={product.title} />
        {/* <!-- image --> */}
        <div className="min-h-36 w-fit">
          <h1 className="mb-3 text-2xl font-bold">{product.title}</h1>
          <p className="w-full max-w-[500px] text-slate-400">{product.description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-right text-xl font-semibold">{product.price}</h1>
        <div className="flex gap-4">
          <button className="text-xl text-slate-300">
            <FaRegHeart size={30}></FaRegHeart>
          </button>
          <button className="text-xl text-slate-300">
            <FaRegTrashAlt size={30} />
          </button>
          <div className="flex items-center rounded-xl border-2 border-slate-300">
            <button className="px-3 font-bold text-gray-700" onClick={minProduct}>-</button>

            {/* JUMLAH PRODUCT TERGANTUNG DARI DATABASE  */}
            <span className="px-4 text-gray-700">{amount}</span>


            <button className="px-3 font-bold text-greenprime" onClick={addProduct}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
