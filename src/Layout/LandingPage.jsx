import Navbar from "../Components/Navbar";
import WebLogo from "../Components/WebLogo";

const LandingPage = () => {
  return (
    <div className=" h-[50dvh] w-screen bg-[url('assets/LandingPageBG.webp')] bg-cover md:h-screen">
      <WebLogo
        custom={"absolute top-5 text-sm left-5 sm:top-10 sm:left-10 sm:text-xl"}
      ></WebLogo>
      <Navbar custom="text-black p-5 sm:p-14"></Navbar>
      <div className="mt-16 flex w-full justify-center ">
        <div className="w-fit  ">
          <h1 className=" font-reguler mb-5 font-['Poller_One'] text-4xl leading-tight text-greenprime sm:text-[70px]">
            MINIMALIST <br />
            FURNITURE
          </h1>
          <a
            href="#our-product"
            className="mt-5 rounded-3xl bg-greenprime  px-10 py-3 font-bold  text-white"
          >
            Show More
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
