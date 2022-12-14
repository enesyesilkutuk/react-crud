import Employee from "./Employee";
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Button, Modal, Alert  } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { sortedEmployees, addAlert, setAddAlert, updateAlert, setUpdateAlert, deleteAlert, setDeleteAlert } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [sortedEmployees]);

  const indexOfLastEmployee = employeesPerPage * currentPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);
  
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
          </div>
          <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal">
              <i className="material-icons">&#xE147;</i>
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      {addAlert && <Alert className="text-primary" variant="success" onClose={() => setAddAlert(false)} dismissible>Employee List Was Added A New Employee Successfully</Alert>}
      {updateAlert && <Alert className="text-dark" variant="info" onClose={() => setUpdateAlert(false)} dismissible>Employee List Was Updated Successfully</Alert>}
      {deleteAlert && <Alert className="text-dark" variant="danger" onClose={() => setDeleteAlert(false)} dismissible>Employee Was Deleted From Employee List Successfully</Alert>}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { currentEmployees.map((employee) => (
            <tr key={employee.id}>
               <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination setCurrentPage={setCurrentPage} pages={totalPagesNum} currentEmployees={currentEmployees} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
