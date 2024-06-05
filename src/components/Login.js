import React, { useState } from 'react';
import { FirebaseContext } from '../firebase/context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setLocation } = useContext(FirebaseContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Sign in user with Firebase Authentication
    //...
    // Set user location
    setLocation({ latitude: 37.7749, longitude: -122.4194 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;