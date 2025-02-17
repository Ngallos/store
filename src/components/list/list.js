import { List } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import "../list/list.css";

export const ListProducts = ({
  listOfProducts = [],
  renderIcon,
  onClick,
  closeList,
}) => {
  return (
    <>
      <div onClick={closeList}>
        {renderIcon && listOfProducts.length > 0 ? <CloseIcon /> : false}
      </div>
      <List>
        {renderIcon === false ? (listOfProducts = []) : ""}
        <div className="containerList">
          {listOfProducts.map((item, index) => (
            <List.Item key={index}>
              <strong className="products" onClick={() => onClick(item)}>
                {typeof item === "string" ? item : item.title}
              </strong>
            </List.Item>
          ))}
        </div>
      </List>
    </>
  );
};
