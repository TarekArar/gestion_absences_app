import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCGMKN9hkiN9ofzWRo6SLY4B4nC94y4bEk",
  authDomain: "asiproject.firebaseapp.com",
  projectId: "asiproject",
  storageBucket: "asiproject.appspot.com",
  messagingSenderId: "496264462439",
  appId: "1:496264462439:web:e93094b4d0fdd9a2acd4c2",
  measurementId: "G-ZQ3QV8ZD3G",
};
// Initialize Firebase
const firebaseInstance = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const loginUser = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => this.props.navigation.navigate("Profile"))
    .catch((error) => console.log(error));

const getClasses = async () => {
  const classesRef = db.collection("Classes");
  const snapshot = await classesRef.get();
  const classes = [];
  snapshot.forEach((doc) => {
    classes.push(doc.data());
    //   console.log(doc.id, "=>", doc.data());
  });
  return classes;
};

export { loginUser, getClasses };
