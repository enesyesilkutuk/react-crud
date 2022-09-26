import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button onClick={handleShow} className="btn text-warning">
          <i className="material-icons">&#xE254;</i>
        </button>
        <button
          className="btn text-danger"
          onClick={() => deleteEmployee(employee.id)}
        >
          <i className="material-icons">&#xE872;</i>
        </button>
      </td>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm employee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
