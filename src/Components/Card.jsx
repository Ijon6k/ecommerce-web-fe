import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { product } = props;

  return (
    <Link
      to={`/products/detail`}
      className="relative flex min-h-96 w-72 flex-col justify-between rounded-3xl border border-slate-300 bg-white p-5 drop-shadow-sm"
    >
      <img
        className="h-60 w-60 self-center  rounded-xl object-cover"
        src="src/assets/Product1.webp"
        alt={product.title}
      />
      <h1 className="text min-h-10 text-3xl font-bold">{product.title}</h1>
      <p className="text-md min-h-16 text-slate-400">{product.description}</p>
      <h1 className="mt-10 font-semibold">
        <span className="font-sm h-full items-start">Rp</span>{" "}
        <span className="text-3xl">{product.price}</span>
      </h1>
      <button className="absolute bottom-5 right-5 h-fit w-fit rounded-full bg-greenprime p-3">
        <FaCartPlus size={25} color="white" />
      </button>
      <button className="absolute right-5 top-5">
        <FaRegHeart size={30} />
      </button>
    </Link>
  );
};

export default Card;
