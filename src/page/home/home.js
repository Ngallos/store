import { useNavigate } from "react-router-dom";
import { ListProducts } from "../../components/list/list";
import { useEffect, useState } from "react";
import { CardCustom } from "../../components/card/card";
import { dummyService } from "../../context-service/dummyJson-api";
import "../home/home.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/appSlice";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [itemsByCategory, setItemsByCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const cartItems = useSelector((state) => state.app.cartItems);

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

  useEffect(() => {
    if (categoryList.length > 0 && !activeCategory) {
      renderListByCategory(categoryList[0]);
      setActiveCategory(categoryList[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

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

  const renderListByCategory = async (category) => {
    // Chiamata all'API per ottenere i prodotti per categoria
    await getListProductsByCategory(category);
    setActiveCategory(category);
  };

  const goToDetail = (productID) => {
    navigate(`/home/products/${productID}`);
  };

  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="pageShell">
      <section className="heroBox">
        <div>
          <p className="eyebrow">React • Redux • API</p>
          <h1>Store didattico minimale, pulito e leggibile.</h1>
          <p className="heroText">
            Un progetto portfolio con categorie, dettaglio prodotto, carrello e stato globale gestito con Redux Toolkit.
          </p>
        </div>
        <div className="heroStats">
          <div>
            <strong>{categoryList.length}</strong>
            <span>categorie</span>
          </div>
          <div>
            <strong>{itemsByCategory.length}</strong>
            <span>prodotti</span>
          </div>
          <div>
            <strong>{cartItems.length}</strong>
            <span>nel carrello</span>
          </div>
        </div>
      </section>

      <div className="homeGrid">
        <aside>
          <ListProducts
            listOfProducts={categoryList}
            onClick={renderListByCategory}
            activeItem={activeCategory}
          />
        </aside>

        <main className="containerItems">
          {itemsByCategory.map((product, index) => {
            return (
              <CardCustom
                key={index}
                valuesProduct={product}
                goToDetail={() => goToDetail(product.id)}
                onAddToCart={() => addItemToCart(product)}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};
