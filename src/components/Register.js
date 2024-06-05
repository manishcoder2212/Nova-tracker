import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../firebase/context';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const { setLocation } = useContext(FirebaseContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Set user location
        setLocation({ latitude: 37.7749, longitude: -122.4194 });
        console.log('User registered successfully:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label>
        Code:
        <input type="text" value={code} onChange={(event) => setCode(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;