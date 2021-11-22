const RightColumn = ({ details }) => {
  const noActiveEmployee = (
    <p className="right--column__p">
      Please select the employee to show details
    </p>
  );

  const ActiveEmployeeDetails =
    details &&
    Object.keys(details).map((key, index) => (
      <div key={index}>
        <p className="right--column__p">
          <span>{key.toUpperCase()}:</span> {details[key]}
        </p>
      </div>
    ));

  return (
    <div className="right--column__div">
      {details ? ActiveEmployeeDetails : noActiveEmployee}
    </div>
  );
};

export default RightColumn;
