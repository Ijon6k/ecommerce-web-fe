import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import WebLogo from "../Components/WebLogo";

const LandingPage = (prop) => {
  let {onLogin} = prop
  return (
    <div className="h-screen w-screen bg-[url('assets/LandingPageBG.webp')] bg-cover">
      <WebLogo custom={"absolute top-10 left-10 text-xl"}></WebLogo>
      <Navbar custom="text-black p-14" onLogin={onLogin}></Navbar>
      <div className="mt-16 flex w-full justify-center ">
        <div className="w-fit  ">
          <h1 className=" font-reguler mb-5 font-['Poller_One'] text-[70px] leading-tight text-greenprime">
            MINIMALIST <br />
            FURNITURE
          </h1>
          <Link
            to="/products"
            className="mt-5 rounded-3xl bg-greenprime  px-10 py-3 font-bold  text-white"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
