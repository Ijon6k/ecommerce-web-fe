import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const Navbar = (props) => {
  const { text = "text-white", custom } = props;
  const [onLogin, setOnLogin] = useState(false)

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      setOnLogin(true)
    }
  }, []);

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
          {onLogin ? '' : <Link
            to="/login"
            className="rounded-3xl bg-greenprime  px-5  py-1 font-bold text-white"
          >
            Login
          </Link>}
        </li>
        <li>
          {onLogin === false ? '' : <div className="rounded-3xl bg-greenprime    p-3 font-bold text-white">
            <MdPerson />
          </div>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
