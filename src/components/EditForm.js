import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EmployeeContext } from '../context/EmployeeContext';

const EditForm = ({employee}) => {

    const { updateEmployee } = useContext(EmployeeContext);

    const id = employee.id;
   
    const [employeeValues, setEmployeeValues] = useState({ id : id, name : employee.name, email : employee.email, address : employee.address, phone : employee.phone });
    
    const handleEmployeeValues = (e) => {
        setEmployeeValues({...employeeValues, [e.target.name] : e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id,employeeValues);
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control name="name" value={employeeValues.name} onChange={handleEmployeeValues} className='mb-3' type='text' placeholder='Name *' required /> 
        </Form.Group>
        <Form.Group>
            <Form.Control name="email" value={employeeValues.email} onChange={handleEmployeeValues} className='mb-3' type='email' placeholder='Email *' required />
        </Form.Group>
        <Form.Group>
            <Form.Control name="address" value={employeeValues.address} onChange={handleEmployeeValues} className='mb-3' as="textarea" placeholder="Address" />
        </Form.Group>
        <Form.Group>
            <Form.Control name="phone" value={employeeValues.phone} onChange={handleEmployeeValues} className='mb-3' type="text" placeholder="Phone" />
        </Form.Group>
        <Button className="w-100" variant="success" type="submit">Update Employee</Button>
    </Form>
  )
}

export default EditForm;