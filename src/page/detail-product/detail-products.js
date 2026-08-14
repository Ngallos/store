import { useEffect } from "react";
import { CarouselComponent } from "../../components/carousel/carousel";
import { dummyService } from "../../context-service/dummyJson-api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setSelectedProduct } from "../../redux/appSlice";
import { ButtonCustom } from "../../components/button/button";
import { capitalizeWords } from "../../utils/text";
export const DetailProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedProduct = useSelector((state) => state.app.selectedProduct);
  const cartItems = useSelector((state) => state.app.cartItems);
  const { id } = useParams();
  
  useEffect(() => {
    const goToDetail = async (productID) => {
      try {
        const response = await dummyService.getDetailProduct(id);
        dispatch(setSelectedProduct(response));
      } catch (error) {
        console.log("Errore nel recupero del dettaglio", error);
      }
    };

    goToDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
    }
  };

  return (
    <div className="detailPage">
      <div className="detailCard">
        <button className="backLink" onClick={() => navigate(-1)} type="button">
          ← Torna indietro
        </button>
        <div className="detailLayout">
          <div className="detailVisual">
            <CarouselComponent itemsCarousel={selectedProduct?.images} />
          </div>
          <div className="detailContent">
            <p className="eyebrow">Scheda prodotto</p>
            <h1>{capitalizeWords(selectedProduct?.title)}</h1>
            <p className="detailText">{selectedProduct?.description}</p>
            <div className="detailMeta">
              <span>Categoria: {capitalizeWords(selectedProduct?.category)}</span>
              <span>Prezzo: ${selectedProduct?.price}</span>
              <span>Nel carrello: {cartItems.some((item) => item.id === selectedProduct?.id) ? "Sì" : "No"}</span>
            </div>
            <div className="detailActions">
              <ButtonCustom title="Aggiungi al carrello" onClick={handleAddToCart} customClass="primaryButton" />
              <ButtonCustom title="Vai al carrello" onClick={() => navigate("/cart")} customClass="secondaryButton" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
