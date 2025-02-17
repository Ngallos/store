import "../input/input.css";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

export const InputCustom = ({
  title,
  type,
  placeholder,
  value,
  icon = false,
  classNameCustom,
  onChange,
  props,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div id="containerInput">
        <InputGroup {...props} inside>
          <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(val) => onChange({ target: { value: val } })}
            className={classNameCustom}
          />
          {icon === true ? (
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          ) : (
            ""
          )}
        </InputGroup>
      </div>
    </div>
  );
};
