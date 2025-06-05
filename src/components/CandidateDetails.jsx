import { CandidateContext } from "./Candidatecontext";
import { useContext, useEffect, useState, useRef } from "react";

const CandidateDetails = () => {

  const { selectedCandidate: candidate } = useContext(CandidateContext);

  const viewCounterRef = useRef(0);
  const timerRef = useRef(null);
  const [viewedCount, setViewedCount] = useState(0);

  useEffect(() => {
    if (candidate) {
      console.log("User selected:", candidate.name);

      viewCounterRef.current += 1;
      
      if (!timerRef.current) {
        timerRef.current = setTimeout(() => {
          setViewedCount(viewCounterRef.current);
          console.log(`You viewed ${viewCounterRef.current} candidate(s) in the last 10 seconds.`);
        }, 10000);
      }
    }  
  }, [candidate]);


  if (!candidate) {
    return <div className="alert alert-danger mt-4 container">Candidate not found</div>;
  }

  let parsed = null;
  try {
    parsed = JSON.parse(candidate.parsed_resume);
  } catch (error) {
    return <div className="alert alert-warning mt-4 container">Error parsing resume JSON</div>;
  }

  return (
    <div className="container mt-4" >
      <div className="row">
        <div className="col-lg-10 offset-lg-1">

          <div className="mb-4 border-bottom pb-2">
            <h2 className="fw-bold">Candidate Details</h2>
            <small className="text-muted">Viewed in last 20 sec: {viewedCount}</small>
          </div>

          <table className="table table-bordered table-hover">
            <tbody>
              <tr><th>ID</th><td>{candidate.id.toUpperCase()}</td></tr>
              <tr><th>Name</th><td>{candidate.name}</td></tr>
              <tr><th>Email</th><td><a href={`mailto:${candidate.email}`}>{candidate.email}</a></td></tr>
              <tr><th>Phone</th><td>{candidate.phone}</td></tr>
              <tr><th>Secondary Phone</th><td>{candidate.secondary_phone || "-"}</td></tr>
              <tr><th>City</th><td>{candidate.city}</td></tr>
              <tr><th>State</th><td>{candidate.state || "-"}</td></tr>
              <tr><th>Country</th><td>{candidate.country}</td></tr>
              <tr><th>Status</th><td>{candidate.status}</td></tr>
              <tr><th>Contact Person</th><td>{candidate.contactperson}</td></tr>
              <tr><th>Contact Designation</th><td>{candidate.contactdesignation}</td></tr>
              <tr><th>Created At</th><td>{candidate.createdat}</td></tr>
              <tr><th>Updated At</th><td>{candidate.updatedat}</td></tr>
              <tr><th>Application Ids</th><td>{candidate.applicationids}</td></tr>
            </tbody>
          </table>

          {parsed.ProfileSummary && (
            <>
              <h4 className="mt-5">Profile Summary</h4>
              <p className="border rounded p-3 bg-light">{parsed.ProfileSummary}</p>
            </>
          )}

          {parsed.Skills && (
            <>
              <h4 className="mt-4">Skills</h4>
              <ul className="list-group mb-3">
                {parsed.Skills.map((skill, index) => (
                  <li key={index} className="list-group-item">{skill}</li>
                ))}
              </ul>
            </>
          )}

          {parsed.EducationHistory && (
            <>
              <h4 className="mt-4">Education History</h4>
              <table className="table table-striped table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Institute</th>
                    <th>Degree</th>
                    <th>Field Of Study</th>
                    <th>Graduation Date</th>
                  </tr>
                </thead>
                <tbody>
                  {parsed.EducationHistory.map((edu, index) => (
                    <tr key={index}>
                      <td>{edu.Institute}</td>
                      <td>{edu.Degree}</td>
                      <td>{edu.FieldOfStudy}</td>
                      <td>{edu.GraduationDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {parsed.CareerHistory?.JobDetails && (
            <>
              <h4 className="mt-4">Work Experience</h4>
              {parsed.CareerHistory.JobDetails.map((job, index) => (
                <div key={index} className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {job.JobTitle} @{" "}
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(job.CompanyWebsite || job.JobCompany)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.JobCompany}
                      </a>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {job.StartDate} to {job.EndDate || "Present"} |{" "}
                      <a
                        href={`https://www.google.com/maps?q=${encodeURIComponent(`${job.JobLocationCity},${job.JobLocationCountry}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.JobLocationCity}, {job.JobLocationCountry}
                      </a>
                    </h6>
                    <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                      {job.JobResponsibilities}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
