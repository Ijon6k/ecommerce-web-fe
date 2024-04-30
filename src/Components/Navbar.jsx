import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { custom = "text-white" } = props;
  return (
    <div className="flex h-fit w-full justify-end p-2 ">
      <ul
        className={`${custom}  mx-10 my-5 flex w-fit items-center gap-5 justify-self-end font-semibold drop-shadow-xl`}
      >
        <Link to={"/"}>Home</Link>
        <li>About</li>
        <li>Furniture</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>
          <button className="rounded-3xl bg-greenprime  px-5  py-1 font-bold text-white">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
