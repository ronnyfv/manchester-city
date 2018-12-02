import firebase from 'firebase';
// import 'firebase/app';
// import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBl214z5ZX_kEs0yG8TUATUAgdhyQteOeA',
  authDomain: 'manchester-city-1d43c.firebaseapp.com',
  databaseURL: 'https://manchester-city-1d43c.firebaseio.com',
  projectId: 'manchester-city-1d43c',
  storageBucket: 'manchester-city-1d43c.appspot.com',
  messagingSenderId: '857013310148',
};

firebase.initializeApp(config);

const firebaseDb = firebase.database();

const firebaseMatches = firebaseDb.ref('matches');
const firebasePromotions = firebaseDb.ref('promotions');

export { firebase, firebaseMatches, firebasePromotions };
