import React, { useEffect, useContext} from "react";
import CandidateTable from "./CandidateTable";
import { Popup } from "./Popup";
import { CandidateContext } from "./Candidatecontext";

const CandidatePage = ({ candidates }) => {
    const {selectedCandidate} = useContext(CandidateContext); 

    useEffect(() => {
        if (selectedCandidate) {
            console.log("user clicked", selectedCandidate);
        }
    }, [selectedCandidate]);
    

    return (
        <div>
            <CandidateTable candidates={candidates}  />
            <Popup/>
        </div>
    );
};

export default CandidatePage;      