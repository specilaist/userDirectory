import React from 'react';
import EmployeeCard from '../Components/employeeCard';
import rows from '../Components/rows';

export default function Employee() {

  const renderEmployees = () => {
    return rows.map((row) => {
      return <EmployeeCard 
      key={row.id} 
      firstname={row.firstName}
      lastname={row.lastName}
      age={row.age} 
      job={row.job}/> 
    })
  }

  return (
    <div>
      {renderEmployees()}
    </div>
  );
};
