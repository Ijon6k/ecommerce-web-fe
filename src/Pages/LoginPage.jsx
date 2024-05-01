import { Link } from "react-router-dom";
import WebLogo from "../Components/WebLogo.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const apiLogin = async (email, password) => {
    const response = await fetch(`http://127.0.0.1:5000/e-commerce/v1/login/${email}/${password}`);
    const data = await response.json();
    if (data['status_code'] === 200) {
      return data['result']['token']
    } else {
      return false
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await apiLogin(email, password)
    if (result) {
      console.log(result)
      Cookies.set('access_token', result);
      navigate('/')
    }
  }
  return (
    <div className="flex h-screen max-h-screen w-screen flex-col gap-20 bg-white p-14 lg:flex-row">
      {/* Bagian untuk form */}
      <div className=" flex w-[400] flex-1 flex-col  items-center justify-center">
        <h1 className="mb-10 text-4xl font-semibold">Welcome Back 👋🏻</h1>
        <WebLogo></WebLogo>
        <p className="my-10 font-semibold">Please enter your details</p>
        <form className=" sm:w-3/4 lg:w-4/5" onSubmit={handleLogin}>
          {/* Menggunakan komponen InputForm untuk email */}
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="mb-2 w-full rounded-full border border-black p-3 pl-8  text-lg text-slate-700 outline-none"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Menggunakan komponen InputForm untuk password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-2 w-full rounded-full border border-black p-3 pl-8  text-lg text-slate-700 outline-none"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Tombol Login */}
          <div className="mb-10 mt-5 flex items-center justify-between">
            <span>
              <input type="checkbox" className="" />
              <label className="ml-2 text-sm lg:text-lg">Remember me</label>
            </span>

            <Link to="" className="ml-2 text-sm text-slate-500 lg:text-lg">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className=" w-full rounded-3xl bg-greenprime px-4 py-3 text-xl font-bold text-white"
          >
            Login
          </button>
        </form>
      </div>
      {/* Bagian untuk gambar */}
      <div className="hidden lg:block lg:w-[600px]">
        <img
          src="src/assets/LoginBG.webp"
          alt="login image"
          className="h-full w-full rounded-3xl object-cover object-center"
        />
      </div>
    </div>
  );
};

export default LoginPage;
