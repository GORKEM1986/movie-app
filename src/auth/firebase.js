// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS4aJGpXOaZlO9z4JQyTIg1o_lT9s9lqg",
  authDomain: "movie-app-8c306.firebaseapp.com",
  projectId: "movie-app-8c306",
  storageBucket: "movie-app-8c306.appspot.com",
  messagingSenderId: "740149416871",
  appId: "1:740149416871:web:5248f7b1b6601024fc9c82",
  measurementId: "G-01DF7Z2PZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    console.log(userCredential);

    navigate("/");
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
};

export const signIn = async (email, password, navigate) => {
  try {
    signInWithEmailAndPassword(
      auth,
      email,
      password
    );
   

    navigate("/");
  } catch (err) {
    err.alert(err.message);
  }
};

export const userObserver = (setMyUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setMyUser(user);
      console.log(user);
      

      
    } else {
      // User is signed out
      setMyUser(false);
    }
  });
};

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//   } else {
//     // User is signed out
//   }
// });

// const provider = new GoogleAuthProvider();

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     console.log(error);
//   });

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     // An error happened.
//   });

// sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//   })
//   .catch((error) => {
//     const errorMessage = error.message;
//     // ..
//   });
