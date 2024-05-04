import { useState } from "react";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { product } = props;
  // membuat fungsi untuk menambahkan ke keranjang dan wishlist

  const [isInWishlist, setOnWishlist] = useState(false);

  const wishlistToggle = () => {
    setOnWishlist(!isInWishlist);
    if (!isInWishlist) {
      alert("Ditambahkan ke keranjangmu!");
    } else {
      alert("dihapus ke wishlistmu!");
    }
  };

  // function menambahkan ke cart
  const addToCart = () => {
    alert("Added to cart");
  };

  return (
    <div className="border-slate relative flex  w-72 flex-col justify-between rounded-3xl ">
      <Link
        to={`/products/detail/${product.id}`}
        className="relative flex h-full w-72 flex-col justify-between rounded-3xl border border-slate-300 bg-white p-5 drop-shadow-sm"
      >
        <img
          className="h-60 w-60 self-center  rounded-xl object-cover"
          src={product.image_url}
          alt={product.title}
        />
        <h1 className="text mt-5 min-h-10 text-3xl font-bold">
          {product.title}
        </h1>
        <p className="text-md min-h-16 text-slate-400">{product.description}</p>
        <h1 className="mt-3 flex items-start gap-1 font-semibold">
          <span className="font-sm h-full items-start justify-start self-start">
            Rp <br />
          </span>{" "}
          <span className="text-3xl">
            {product.price.toLocaleString("id-ID")}
          </span>
        </h1>
      </Link>
      <button
        onClick={addToCart}
        className="absolute bottom-5 right-5 h-fit w-fit rounded-full bg-greenprime p-3"
      >
        <FaCartPlus size={25} color="white" />
      </button>
      <button
        onClick={wishlistToggle}
        className="absolute right-5 top-5 h-fit w-fit rounded-bl-3xl bg-white p-3"
      >
        {isInWishlist ? (
          <FaHeart size={30} color="red" />
        ) : (
          <FaRegHeart size={30} />
        )}
      </button>
    </div>
  );
};

export default Card;
