import "../button/button.css";
import { Button } from "rsuite";
export const ButtonCustom = ({
  title = "title",
  customClass,
  onClick,
  type,
}) => {
  return (
    <Button
      appearance="default"
      onClick={onClick}
      className={customClass}
      type={type}
    >
      {title}
    </Button>
  );
};
