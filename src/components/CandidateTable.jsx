import { useContext, useEffect, useState } from "react";
import { CandidateContext } from "./Candidatecontext";
import { useRef } from "react";

const CandidateTable = ({ candidates }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const { selectedIndex, openModal } = useContext(CandidateContext);

  const rowRefs = useRef([]);
  const buttonRefs = useRef([]);

  const total = candidates.length;
  const totalPages = Math.ceil(total / itemsPerPage);

  const currentData = candidates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  useEffect(() => {
      if (rowRefs.current[0]) {
      rowRefs.current[0].focus();
    }

    if (buttonRefs.current[0]) {
      buttonRefs.current[0].focus();
    }

         return () => {
      console.log("useEffect cleanup on page change");
    };
  }, [currentPage]);


  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Candidate Details</h2>
      <p className="text-end fw-bold text-muted">
        <em>{selectedIndex} of {total}</em>
      </p>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Country</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((candidate, index) => {
              const globalIndex = currentPage * itemsPerPage + index + 1;
              return (
                <tr key={candidate.id}  ref={() => (rowRefs.current[index] )}>
                  <td>{candidate.id.toUpperCase()}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.phone}</td>
                  <td>{candidate.city}</td>
                  <td>{candidate.country}</td>
                  <td>
                    <button  ref={() => (buttonRefs.current[index]) }  className="btn btn-primary btn-sm" onClick={() => openModal(candidate, globalIndex)}
                    > View </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={handlePrev} disabled={currentPage === 0}>
          ← Previous
        </button>
        <span className="align-self-center">Page {currentPage + 1} of {totalPages}</span>
        <button className="btn btn-secondary" onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next →
        </button>
      </div>
    </div>
  );
};
export default CandidateTable;













// rowRefs.current = [];
    // buttonRefs.current = [];




 // useEffect(() => {
  //   if (idref.current && btnref.current) {
  //     idref.current.focus(); 
  //   }
  //   return () => {
  //     console.log("using useeffect"); 
  //   };
  // }, );
