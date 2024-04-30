import Navbar from "../Components/Navbar";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen bg-[url('assets/LandingPageBG.webp')] bg-cover">
      <Navbar></Navbar>
      <div className="mt-16 flex w-full justify-center ">
        <div className="w-fit  ">
          <h1 className="font-Pollar-One font-reguler font-['Poller_One'] text-[70px] leading-tight text-greenprime">
            MINIMALIST <br />
            FURNITURE
          </h1>
          <button className="mt-5 rounded-3xl bg-greenprime  px-10 py-3 font-bold  text-white">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
