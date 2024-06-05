import React, { useState } from 'react';
import { FirebaseContext } from '../firebase/context';
import firebase from '../firebase/firebase';
import 'firebase/database';

const LocationTracker = ({ userId }) => {
  const { location } = useContext(FirebaseContext);
  console.log('Location:', location);

  const handleClick = () => {
    // Get user location
    navigator.geolocation.getCurrentPosition((position) => {
      // Save user location to Firebase Realtime Database
      firebase.database().ref('users/' + userId).set({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  return (
    <button onClick={handleClick}>Update Location</button>
  );
};

export default LocationTracker;