import { createContext, useState, useEffect } from 'react';
import database from './firebase';

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    database.ref('users').on('value', (snapshot) => {
      const users = snapshot.val();
      setUser(users);
    });
  }, []);

  return (
    <FirebaseContext.Provider value={{ user, location, setLocation }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };