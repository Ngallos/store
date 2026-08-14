import { List } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import "../list/list.css";
import { capitalizeWords } from "../../utils/text";

export const ListProducts = ({
  listOfProducts = [],
  renderIcon,
  onClick,
  closeList,
  activeItem,
}) => {
  return (
    <div className="categoryPanel">
      <div className="categoryPanelHeader" onClick={closeList}>
        <span>Categorie</span>
        {renderIcon && listOfProducts.length > 0 ? <CloseIcon /> : null}
      </div>
      <List className="categoryList">
        {renderIcon === false ? (listOfProducts = []) : ""}
        <div className="containerList">
          {listOfProducts.map((item, index) => (
            <List.Item key={index}>
              <button
                type="button"
                className={`categoryItem ${activeItem === item ? "active" : ""}`}
                onClick={() => onClick(item)}
              >
                {capitalizeWords(typeof item === "string" ? item : item.title)}
              </button>
            </List.Item>
          ))}
        </div>
      </List>
    </div>
  );
};
