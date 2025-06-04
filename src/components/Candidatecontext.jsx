import React, { createContext, useState } from "react";

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openModal = (candidate, index) => {
        setSelectedCandidate(candidate);
        setSelectedIndex(index);
        const modal = new window.bootstrap.Modal(document.getElementById("detailsModal"));
        modal.show();
    };

    return (
        <CandidateContext.Provider
            value={{ selectedCandidate, selectedIndex, openModal }}>
            {children}</CandidateContext.Provider>
    );
};
