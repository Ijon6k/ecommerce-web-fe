import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { text = "text-white", custom } = props;
  return (
    <div className={`flex h-fit w-full  justify-end ${custom}`}>
      <ul
        className={`${text}   flex w-fit items-center gap-5 justify-self-end font-semibold drop-shadow-xl`}
      >
        <Link to={"/"}>Home</Link>
        <li>About</li>
        <li>Furniture</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>
          <Link
            to="/login"
            className="rounded-3xl bg-greenprime  px-5  py-1 font-bold text-white"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
