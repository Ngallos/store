import { useContext } from "react";
import { GlobalContext } from "../../context-service/global-contex";
import { CarouselComponent } from "../../components/carousel/carousel";
export const Cart = () => {
  const { selectedProductDetail } = useContext(GlobalContext);

  return (
    <div>
      <CarouselComponent itemsCarousel={selectedProductDetail.images} />
    </div>
  );
};
