const firebaseConfig = {
    apiKey: "AIzaSyDbPKjLNWMvnsYxo7uK8MSw9tDl5j6a3_Q",
    authDomain: "disney-plus-clone-40550.firebaseapp.com",
    projectId: "disney-plus-clone-40550",
    storageBucket: "disney-plus-clone-40550.appspot.com",
    messagingSenderId: "364485567897",
    appId: "1:364485567897:web:11a89e7585bfcc5dc8df08",
    measurementId: "G-ZTVFVZHZ2M"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;