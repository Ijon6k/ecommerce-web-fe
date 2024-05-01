import { Link } from "react-router-dom";
import InputForm from "../Components/input/index.jsx";
import WebLogo from "../Components/WebLogo.jsx";

const LoginPage = () => {
  return (
    <div className="flex h-screen max-h-screen w-screen flex-col gap-20 bg-white p-14 lg:flex-row">
      {/* Bagian untuk form */}
      <div className=" flex w-[400] flex-1 flex-col  items-center justify-center">
        <h1 className="mb-10 text-4xl font-semibold">Welcome Back 👋🏻</h1>
        <WebLogo></WebLogo>
        <p className="my-10 font-semibold">Please enter your details</p>
        <form className=" sm:w-3/4 lg:w-4/5">
          {/* Menggunakan komponen InputForm untuk email */}
          <InputForm label="" type="email" name="email" placeholder="Email" />
          {/* Menggunakan komponen InputForm untuk password */}
          <InputForm
            label=""
            type="password"
            name="password"
            placeholder="Password"
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
