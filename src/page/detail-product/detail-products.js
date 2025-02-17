import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context-service/global-contex";
import { CarouselComponent } from "../../components/carousel/carousel";
import { dummyService } from "../../context-service/dummyJson-api";
import { useParams } from "react-router-dom";
export const DetailProduct = () => {
  const { selectedProductDetail, setSelectedProductDetail } =
    useContext(GlobalContext);
  const { id } = useParams();
  
  useEffect(() => {
    const goToDetail = async (productID) => {
      try {
        const response = await dummyService.getDetailProduct(id);
        setSelectedProductDetail(response);
      } catch (error) {
        console.log("Errore nel recupero del dettaglio", error);
      }
    };

    goToDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(selectedProductDetail);
  });
  return (
    <div>
      <CarouselComponent itemsCarousel={selectedProductDetail?.images} />
    </div>
  );
};
