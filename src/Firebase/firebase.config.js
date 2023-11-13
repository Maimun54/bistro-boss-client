// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDORzH2fb-h9KV-yxIPlElxPEb2ngA9EPs",
//   authDomain: "bistro-boss-db456.firebaseapp.com",
//   projectId: "bistro-boss-db456",
//   storageBucket: "bistro-boss-db456.appspot.com",
//   messagingSenderId: "322642194882",
//   appId: "1:322642194882:web:470f79bc1e9422d099265b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app