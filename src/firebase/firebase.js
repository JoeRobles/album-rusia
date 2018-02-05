import * as firebase from 'firebase';
import { config } from './config';

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// firebase.database().ref().set({
//   name: 'Joe Robles',
//   age: 37,
//   isSingle: true,
//   stressLevel: 6,
//   location: {
//     city: 'Lima',
//     country: 'Perú',
//   },
//   job: {
//     title: 'Senior Software Engineer',
//     company: 'Avantica'
//   }
// }).then(() => {
//   console.log('Data saved');
// }).catch((e) => {
//   console.log('This has failed', e);
// });

// firebase.database().ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });

// const onValueChange = firebase.database().ref('expenses').on('value', (snapshot) => {
//   // const { name, job } = snapshot.val();
//   // console.log(`${name} is a ${job.title} at ${job.company}`);
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// firebase.database().ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// setTimeout(() => {
//   firebase.database().ref().update({
//     name: 'Joe Hans',
//     job: {
//       title: 'Developer',
//       company: 'Google'
//     }
//   });
// }, 5000);

// firebase.database().ref().set({
//   name: 'Joe Hans',
//   job: {
//     title: 'Developer',
//     company: 'Google'
//   },
//   notes: [
//     'hi',
//     'Im',
//     'an',
//     'array'
//   ]
// });

// firebase.database().ref().once('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// firebase.database().ref('expenses').push({
//   description: 'January Rent',
//   note: 'This was the final payment for that address',
//   amount: 54500,
//   createdAt: 1514954400000,
// });
//
// firebase.database().ref('expenses').push({
//   description: 'water bill',
//   amount: 100,
//   createdAt: 1515085100000,
// });
//
// firebase.database().ref('expenses').push({
//   description: 'gas bill',
//   amount: 300,
//   createdAt: 1515140400000,
// });

// firebase.database().ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });