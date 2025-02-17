import { useEffect } from "react";
import { Card, Text } from "rsuite";
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import "../card/card.css";

export const CardCustom = ({ valuesProduct, goToDetail }) => {
  useEffect(() => {
    console.log(valuesProduct);
  }, [valuesProduct]);

  return (
    <Card width={320}>
      <Card.Header as="h5">{valuesProduct.title}</Card.Header>
      <Card.Body>
        <div>
          <div>
            {valuesProduct.images && valuesProduct.images.length > 0 ? (
              <img className="images" src={valuesProduct.images[0]} alt="" />
            ) : (
              "Immagine non disponibile"
            )}
          </div>
        </div>
        <div>{valuesProduct.description}</div>
        <div>{valuesProduct.tags}</div>
      </Card.Body>
      <Card.Footer>
        <div className="footerContainer" onClick={goToDetail}>
          <Text muted>{valuesProduct.meta.createdAt}</Text>
            <div style={{cursor: 'pointer'}}><ArrowRightLineIcon/></div>
        </div>
      </Card.Footer>
    </Card>
  );
};
