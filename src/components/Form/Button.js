import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import COLORS from "./colors";

const Button = ({
  icon,
  children,
  bgColor = "creamyPeach",
  color = "biscay"
}) => {
  const buttonIcon = <FontAwesomeIcon icon={icon} />;

  const styles = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    border: `3px solid ${COLORS["luckyPoint"]}`
  };

  const logClick = (e) => {
    e.preventDefault();
    console.log("Button was clicked!");
  };

  return (
    <button onClick={logClick} className="form__button" style={styles}>
      {buttonIcon}
      {children}
    </button>
  );
};

export default Button;
