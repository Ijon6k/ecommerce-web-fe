import { useState } from "react";
import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";

const CartProduct = ({ product, token, user }) => {
  const [amount, setAmount] = useState(product.amount);

  // Fungsi untuk mengupdate jumlah produk di keranjang
  const handleUpdateAmount = async (newAmount) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/json');
    const data = {
      username: user.username,
      product_id: product.product_id,
      amount: newAmount
    };
    const response = await fetch('http://localhost:5000/e-commerce/v1/cart/bill/amount', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data)
    });
    const resp = await response.json();
    if (resp.status_code === 201) {
      setAmount(newAmount);
    }
  };

  return (
    <div className="min-w-screen flex justify-between rounded-bl-3xl rounded-br-3xl bg-white p-10">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-10 h-6 w-6 rounded-md"
          checked={true}
        />
        <img src={product.image_url} className="mr-7 h-44 w-44 rounded-2xl bg-gray-300" alt={product.title} />
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
            <button className="px-3 font-bold text-gray-700" onClick={() => handleUpdateAmount(amount - 1)}>-</button>
            <span className="px-4 text-gray-700">{amount}</span>
            <button className="px-3 font-bold text-greenprime" onClick={() => handleUpdateAmount(amount + 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
