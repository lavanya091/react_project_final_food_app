import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      {user ? <p>Welcome, {user.username}!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Home;
