import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext';

const Pagination = ({pages, setCurrentPage, currentEmployees}) => {

   const { sortedEmployees } = useContext(EmployeeContext);

   const numOfPages = [];
   
   for (let i=1; i <= pages; i++) {
    numOfPages.push(i);
   };

   const [currentButton, setCurrentButton] = useState(1);

   useEffect(() => {
    setCurrentPage(currentButton);
   }, [currentButton, setCurrentPage]);
   

  return (
    <div className="clearfix">
    <div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{sortedEmployees.length}</b> entries</div>
    <ul className="pagination">
      <li className={`${currentButton === 1 ? "page-item disabled" : "page-item"} user-select-none`}><a href="#!" className='page-link'
      onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</a></li>
        {
            numOfPages.map((page, index) => {
                return (
                    <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}><a href="#!"
                    className='page-link' onClick={() => setCurrentButton(page)}>{page}</a></li>
                )
            })
        }

      <li className={`${currentButton === numOfPages.length ? "page-item disabled" : "page-item"} user-select-none`}><a href="#!"
      onClick={() => setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1)} className='page-link'>Next</a></li>
    </ul>
    </div>
  )                                                     
}

export default Pagination;
