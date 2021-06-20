import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBR4RnILNg8jphJqzLRfzHDp7YaMz3ug7A",
  authDomain: "expensify-bf088.firebaseapp.com",
  databaseURL: "https://expensify-bf088-default-rtdb.firebaseio.com",
  projectId: "expensify-bf088",
  storageBucket: "expensify-bf088.appspot.com",
  messagingSenderId: "891014133005",
  appId: "1:891014133005:web:94d4fa459c20d47699ec44",
  measurementId: "G-CEYFH0H5NE"
};

firebase.initializeApp(config);

const database = firebase.database()

database.ref().set({
  name: 'Patrick Hwang',
  age: 22,
  stressLevel: 6,
  job: {
    title: 'software engineer',
    company: 'ICS'
  },
  location: {
    city: 'Saint Louis',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved')
}).catch((error) => {
  console.log(error);
})

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
})

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('removed')
//   })
//   .catch((e) => {
//     console.log(e)
//   })
