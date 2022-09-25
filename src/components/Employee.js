import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const Employee = ({employees, handleShow}) => {

    const { deleteEmployee } = useContext(EmployeeContext);
    
    return (
        <>
        {employees.map((employee) => {
            return (
                <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.phone}</td>
                <td>
                    <button className="btn text-warning"><i className='material-icons'>&#xE254;</i></button>
                    <button className="btn text-danger" onClick={() => deleteEmployee(employee.id)}><i className='material-icons'>&#xE872;</i></button>
                </td>
               </tr>
            )
        })}
 
   </>
  )
}

export default Employee;