import { useNavigate } from "react-router-dom";
import { ListProducts } from "../../components/list/list";
import { useContext, useEffect, useState } from "react";
import { CardCustom } from "../../components/card/card";
import { dummyService } from "../../context-service/dummyJson-api";
import "../home/home.css";
import { GlobalContext } from "../../context-service/global-contex";

export const Home = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [itemsByCategory, setItemsByCategory] = useState([]);
  const [renderIcon, setRenderIcon] = useState(true);
  const { selectedProductDetail, setSelectedProductDetail } =
    useContext(GlobalContext);

  useEffect(() => {
    const getListCategory = async () => {
      try {
        const category = await dummyService.getAllCategory();
        setCategoryList(category);
      } catch (error) {
        console.log("Errore nel caricamento delle categorie");
      }
    };
    getListCategory();
  }, []);

  useEffect(() => {}, [categoryList]); // Si attiva solo dopo che categoryList è stato aggiornato

  const getListProductsByCategory = async (categorySelected) => {
    try {
      console.log(`Richiesta per categoria: ${categorySelected}`);
      const response = await dummyService.getProductsByCategory(
        categorySelected
      );
      setItemsByCategory(response);
    } catch (error) {
      console.log("Errore nel recupero dei prodotti", error);
    }
  };

  useEffect(() => {}, [itemsByCategory]); // Si attiva solo dopo che categoryList è stato aggiornato

  const renderListByCategory = async (category) => {
    // Chiamata all'API per ottenere i prodotti per categoria
    await getListProductsByCategory(category);
    setRenderIcon(true);
    console.log("Prodotti per categoria:", itemsByCategory);
  };

  const goToDetail = (productID) => {
    navigate(`/home/products/${productID}`);
  };

  //
  useEffect(() => {}, [selectedProductDetail]);

  useEffect(() => {
    console.log("Items aggiornati:", itemsByCategory);
  }, [itemsByCategory]);

  return (
    <div className="Home">
      <div className="lists">
        <div>
          <ListProducts
            listOfProducts={categoryList}
            onClick={renderListByCategory}
          />
        </div>
        <div className="containerItems">
          {itemsByCategory.map((product, index) => {
            return (
              <CardCustom
                key={index}
                valuesProduct={product}
                goToDetail={() => goToDetail(product.id)}
                renderIcon={renderIcon}
              ></CardCustom>
            );
          })}
        </div>
      </div>
    </div>
  );
};
