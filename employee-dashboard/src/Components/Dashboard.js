//This Component is used to prepare Dashboard in React with headings, time and table
//It is being made dynamic to show current date and time
//The employees data is sorted according to the no. of hours worked to dynamically change the employee of the month
//The employee data is being displayed by reusing the EmployeeData Component
import React from "react";
import { employees } from "../Components/EmployeeData.js";
import EmployeeRow from "../Components/EmployeeRow.js";
import EmployeeOfTheMonth from "../Components/EmployeeOfTheMonth";

const Dashboard = () => {
  const sortedEmployees = [...employees].sort(
    (a, b) => b.hoursWorked - a.hoursWorked
  );
  const employeeOfTheMonth = sortedEmployees[0];
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <div className="headingsAndTime">
        <div>
          <img
            src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-3.png"
            style={{ verticalAlign: "middle", marginRight: "5px" }}
          />
          <p className="heading" style={{ verticalAlign: "middle" }}>
            Employees Activity Dashboard
          </p>
        </div>
        <div className="dateAndTime">
          <div className="date">
            <p>{months[today.getMonth()]}&nbsp;</p>
            <p>{today.getDate()},&nbsp;</p>
            <p>{today.getFullYear()}</p>
          </div>
          <div className="time">
            <p>&nbsp;&nbsp;{today.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
      <div className="dashboard">
        <div className="empTable">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Rank</th>
                <th>Name</th>
                <th>Designation</th>
                <th>No. of hours worked</th>
                <th>Changes</th>
              </tr>
            </thead>
            <tbody>
              {sortedEmployees.map((employee, index) => (
                <EmployeeRow
                  key={employee.id}
                  rank={index + 1}
                  employee={employee}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="empOfTheMonth">
          <EmployeeOfTheMonth employee={employeeOfTheMonth} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
