import { MdOutlineContactPage, MdPerson } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IoIosHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaInfo, FaShoppingCart } from "react-icons/fa";
import { Button, Drawer } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
  const { text = "text-white", custom } = props;
  const [onLogin, setOnLogin] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      setOnLogin(true);
    }
  }, []);

  const toggleDrawer = (open) => () => {
    setMobileDrawerOpen(open);
  };

  const navLinks = [
    { to: "/", text: "Home", icon: <IoIosHome /> },
    { to: "/about", text: "About", icon: <FaInfo /> },
    { to: "/furniture", text: "Furniture", icon: <FaBoxesPacking /> },
    { to: "/blog", text: "Blog", icon: <MdOutlineContactPage /> },
    { to: "/contact", text: "Contact Us", icon: <IoCall /> },
  ];

  // * inisialisasi variabel list untuk di render di drawer comp
  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="flex h-fit flex-col items-center font-semibold "
    >
      <ul
        className={`${text} flex w-56  flex-col gap-5 bg-red-50 font-semibold`}
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to} className="flex gap-5 text-black">
              {link.icon}
              {link.text}
            </NavLink>
          </li>
        ))}

        <NavLink to={"/cart"}>
          <FaShoppingCart size={30} color="white" />
          Keranjang
        </NavLink>
      </ul>
    </div>
  );

  // *untuk menyimpan list yang akan ditampilkan component drawer saat responsive

  return (
    <div className={`flex h-fit w-full justify-end ${custom}`}>
      {/* * untuk desktop,saat responsive navbar desktopp akan dihidden */}
      <div className=" hidden md:flex">
        <ul
          className={`${text} flex w-fit items-center gap-5 justify-self-end font-semibold drop-shadow-xl`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>{link.text}</NavLink>
            </li>
          ))}
          <li>
            {onLogin ? (
              ""
            ) : (
              <Link
                to="/login"
                className="rounded-3xl bg-greenprime px-5 py-1 font-bold text-white"
              >
                Login
              </Link>
            )}
          </li>
          <li>
            {onLogin === false ? (
              ""
            ) : (
              <div className="rounded-3xl bg-greenprime p-3 font-bold text-white">
                <MdPerson />
              </div>
            )}
          </li>
        </ul>
      </div>
      {/* =======desktop end */}

      {/* untuk mobile nav drawer */}
      <div className="md:hidden ">
        {" "}
        {/* Display for mobile */}
        <Button onClick={toggleDrawer(true)} className="text-black">
          <GiHamburgerMenu size={30} color="black" />
        </Button>
        <Drawer
          anchor="right"
          open={mobileDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
