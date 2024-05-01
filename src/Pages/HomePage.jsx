import LandingPage from "../Layout/LandingPage";
import ProductSection from "../Layout/ProductSection";

const HomePage = (prop) => {
  let {onLogin} = prop
  return (
    <div>
      <LandingPage onLogin={onLogin}></LandingPage>
      <ProductSection></ProductSection>
    </div>
  );
};

export default HomePage;
