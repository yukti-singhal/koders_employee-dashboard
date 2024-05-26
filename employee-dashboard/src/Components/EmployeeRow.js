//This component mainly styles and displays the table
import React from "react";
const EmployeeRow = ({ rank, employee }) => {
  const { name, designation, hoursWorked, change, image, badge } = employee;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <img src={badge} style={{ width: "25px", borderRadius: "40%" }} />
      </td>
      <td style={{ textAlign: "center" }}>{rank}</td>
      <td>
        <img
          src={image}
          style={{
            width: "20px",
            borderRadius: "50%",
            verticalAlign: "middle",
            border: "0.5px solid #ccc",
            height: "20px",
          }}
        />
        &nbsp;
        <span style={{ verticalAlign: "middle" }}>{name}</span>
      </td>
      <td>{designation}</td>
      <td>7({hoursWorked})</td>
      <td>
        <span style={{ color: change > 0 ? "green" : "red" }}>
          {change > 0 ? `▲` : `▼`}
        </span>{" "}
        {Math.abs(change)} hrs
      </td>
    </tr>
  );
};

export default EmployeeRow;
