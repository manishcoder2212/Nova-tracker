import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const config = {
  apiKey:"AIzaSyANAnGjKIe2MEQnLl1ELEPXndJoedfTzXo",
  authDomain: "novatracking-ac276.firebaseapp.com",
  databaseURL: "https://novatracking-ac276-default-rtdb.firebaseio.com",
  projectId:"novatracking-ac276",
  storageBucket: "novatracking-ac276.appspot.com",
  messagingSenderId: "307460477155",
};

const app = initializeApp(config);

const database = getDatabase(app);

export default database;
/* 
apiKey: "AIzaSyANAnGjKIe2MEQnLl1ELEPXndJoedfTzXo",
  authDomain: "novatracking-ac276.firebaseapp.com",
  projectId: "novatracking-ac276",
  storageBucket: "novatracking-ac276.appspot.com",
  messagingSenderId: "307460477155",
  appId: "1:307460477155:web:556cc00292f85008b0b5d6",
  measurementId: "G-9MBEE6ER5M"
*/