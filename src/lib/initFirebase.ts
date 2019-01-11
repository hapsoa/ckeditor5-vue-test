import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBg5_ZISebZkorGZA3NT2ZO7LuTHDNNUWQasdf',
  authDomain: 'gaesory-ec24c.firebaseapp.com',
  databaseURL: 'https://gaesory-ec24c.firebaseio.com',
  projectId: 'gaesory-ec24c',
  storageBucket: 'gaesory-ec24c.appspot.com',
  messagingSenderId: '752962651932',
};
firebase.initializeApp(config);

export default firebase;
