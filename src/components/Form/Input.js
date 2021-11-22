import COLORS from "./colors";

const Input = ({ bgColor, color, borderSize, borderRadius, borderColor }) => {
  const styles = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    borderRadius: borderRadius,
    border: `${borderSize} solid ${COLORS[borderColor]}`
  };

  return (
    <input
      className="form__input"
      type="text"
      placeholder="input"
      style={styles}
    />
  );
};

export default Input;
