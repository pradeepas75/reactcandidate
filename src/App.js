import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateDetails from "./components/CandidateDetails";
import CandidatePage from './components/Candidatepage';
import jsonData from './components/can.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CandidateProvider } from './components/Candidatecontext';


const App = () => {
  const myfile = jsonData.candidates.map(c => c.candidate); 

  return (
    <Router>
      <div className="container mt-4">
        
        <CandidateProvider>
      
      <Routes>
        <Route path="/" element={<CandidatePage candidates={myfile} />} />
        <Route element={<CandidateDetails candidates={myfile} />} />
      </Routes>
          
        </CandidateProvider>
     
      </div>
    </Router>
  );
};

export default App;








// React 18+ specific root render:
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);





// import React,{useState} from 'react';
// import Login from './components/Login';
// import Book from './components/Book';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   const handleLogin = (email, password) => {
//     if (email && password) {
//       console.log("Logged in as:", email);
//       setIsLoggedIn(true);
//     }
//   };

//   return (
//     <div>
//        {isLoggedIn ? <Book /> : <Login onLogin={handleLogin} />} 
//     </div>
//   );
// };

// export default App;



