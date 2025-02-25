import DetailSection from "../Layout/DetailProductLayout/DetailSection";
import Serupa from "../Layout/DetailProductLayout/Serupa";
import HeaderPage from "../Layout/HeaderPage";

const ProductDetail = () => {
  return (
    <div className="h-full min-h-screen bg-[#EBEBEB]">
      <HeaderPage></HeaderPage>
      <DetailSection></DetailSection>
      <Serupa></Serupa>
    </div>
  );
};

export default ProductDetail;
