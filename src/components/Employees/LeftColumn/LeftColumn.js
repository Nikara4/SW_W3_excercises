import data from "./../employeeInfo";

const LeftColumn = ({ isActive, selectedId }) => {
  const styles = {
    selectedItem: {
      color: "#ffda79",
      fontWeight: "bold"
    }
  };

  return (
    <section className="left--column__section">
      {data.map((employee) => (
        <li
          className="left--column__li"
          onClick={() => isActive && isActive(employee)}
          key={`empl-${employee.id}`}
          style={employee.id === selectedId ? styles.selectedItem : null}
        >
          {employee.name} {employee.surname}
        </li>
      ))}
    </section>
  );
};

export default LeftColumn;
