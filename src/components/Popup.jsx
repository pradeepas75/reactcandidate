import React, { useContext } from 'react';
import { CandidateContext } from './Candidatecontext';
import CandidateDetails from './CandidateDetails';

export const Popup = () => {

    const {selectedCandidate}=useContext(CandidateContext);

    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="detailsModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Candidate Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {selectedCandidate ? (
                                <CandidateDetails/>
                            ) : (<p className="text-muted">No candidate selected.</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
