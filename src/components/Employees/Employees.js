import { useState } from "react";

import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Employees = () => {
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState();

  const isActive = (employee) => {
    setSelectedEmployee(employee);
    setSelectedEmployeeId(employee.id);
  };

  return (
    <div className="div--wrapper">
      <LeftColumn isActive={isActive} selectedId={selectedEmployeeId} />
      <RightColumn details={selectedEmployee} />
    </div>
  );
};

export default Employees;
