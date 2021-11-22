import COLORS from "./colors";

const Textarea = ({
  bgColor,
  color,
  borderSize,
  borderRadius,
  borderColor
}) => {
  const styles = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    border: `${borderSize} solid ${COLORS[borderColor]}`,
    borderRadius: borderRadius
  };

  return (
    <textarea
      className="form__textarea"
      type="text"
      placeholder="textarea"
      style={styles}
    />
  );
};

export default Textarea;
