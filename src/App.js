import React from 'react';
import { FirebaseProvider } from './firebase/context';
import Register from './components/Register';
import Login from './components/Login';
import LocationTracker from './components/LocationTracker';

const App = () => {
  return (
    <FirebaseProvider>
      <Register />
      <Login />
      <LocationTracker />
    </FirebaseProvider>
  );
};

export default App;