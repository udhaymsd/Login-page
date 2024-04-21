// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from backend
    axios.get('http://localhost:3001/user', { withCredentials: true })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  return (
    <div style={{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          <Link to='/login' className="btn btn-light my-5">Logout</Link>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Home;
