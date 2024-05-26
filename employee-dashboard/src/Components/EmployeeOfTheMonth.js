// The EmployeeOfTheMonth Component is created separately so that it can be changed easily

import React from "react";

const EmployeeOfTheMonth = ({ employee }) => {
  return (
    <div className="employee-of-the-month">
      <img src={employee.image} alt={employee.name} />
      <h4>Employee of the Month</h4>
      <p>{employee.name}</p>
      <p>{employee.designation}</p>
    </div>
  );
};

export default EmployeeOfTheMonth;
