import { Card, Text } from "rsuite";
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import PlusIcon from '@rsuite/icons/Plus';
import "../card/card.css";
import { capitalizeWords } from "../../utils/text";

export const CardCustom = ({ valuesProduct, goToDetail, onAddToCart }) => {
  return (
    <Card className="productCard">
      <Card.Header as="h5">{capitalizeWords(valuesProduct.title)}</Card.Header>
      <Card.Body>
        <div className="cardMedia">
          {valuesProduct.images && valuesProduct.images.length > 0 ? (
            <img className="images" src={valuesProduct.images[0]} alt="" />
          ) : (
            <div className="imagePlaceholder">Immagine non disponibile</div>
          )}
        </div>
        <div className="cardDescription">{valuesProduct.description}</div>
        <div className="cardTags">
          {valuesProduct.tags?.map((tag) => capitalizeWords(tag)).join(", ")}
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="footerContainer">
          <Text muted>{valuesProduct.meta?.createdAt}</Text>
          <div className="cardActions">
            {onAddToCart ? (
              <button className="smallActionButton" onClick={onAddToCart} type="button">
                <PlusIcon />
                Carrello
              </button>
            ) : null}
            <button className="smallActionButton ghost" onClick={goToDetail} type="button">
              Dettaglio
              <ArrowRightLineIcon />
            </button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};
