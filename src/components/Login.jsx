import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const validateEmail = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const validatePassword = (password) => {
    const regex = /(?=.*[0-9])(?=.{8,})/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError('please enter a valid email address');
      return;
    }
    
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and contain at least one number.');
      return;
    }
      //  setError('');
       onLogin(email, password);
  }; 

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;















//   try {
  //     const response = await fetch('https://your-api-endpoint.com/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setError('');
  //       onLogin(data); // pass response data to parent
  //     } else {
  //       setError(data.message || 'Login failed. Please try again.');
  //     }
  //   } catch (err) {
  //     setError('Network error. Please try again later.');
  //     console.error('Login error:', err);
  //     setError('your password is wrong');
  //     onLogin(email, password);
  
  //   }
  // };