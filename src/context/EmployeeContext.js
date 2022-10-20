import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { employeesList } from "./employeesList";

export const EmployeeContext = createContext();

const EmployeeContextProvider = ({children}) => {

    const localDataEmployees = JSON.parse(localStorage.getItem("employees"));

    const [employees, setEmployees] = useState(() => {
        return (
            !localDataEmployees ? employeesList : localDataEmployees
        );
    });
    
    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);
    
    const [addAlert, setAddAlert] = useState(false);
    const [updateAlert, setUpdateAlert] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState(false);
    
    const sortedEmployees = employees.sort((a,b) => a.name < b.name ? -1 : 1);

    const addNewEmployee = (employee) => {
        setEmployees([...employees, { id: uuidv4(), name: employee.name, email: employee.email, address: employee.address, phone:employee.phone }]);
        setAddAlert(true);
        setTimeout(() => {
            setAddAlert(false);
        }, 3000);
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
        setDeleteAlert(true);
        setTimeout(() => {
            setDeleteAlert(false);
        }, 3000);
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee));
        setUpdateAlert(true);
        setTimeout(() => {
            setUpdateAlert(false);
        }, 3000);
    }

    return <EmployeeContext.Provider value={{sortedEmployees, addNewEmployee, deleteEmployee, updateEmployee, addAlert, updateAlert, deleteAlert}}>{children}</EmployeeContext.Provider>
    
}

export default EmployeeContextProvider;
