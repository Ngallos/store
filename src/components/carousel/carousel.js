import { Carousel } from "rsuite";
import '../carousel/carousel.css'
export const CarouselComponent = ({ itemsCarousel }) => {


  return (
    <Carousel className="custom-slider">
      {itemsCarousel?.map((item, index) => {
        return <img key={index} src={item} alt={item} />;
      })}
    </Carousel>
  );
};
