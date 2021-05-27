import firebase from 'firebase'
 require('@firebase/firestore')
 
   // Your web app's Firebase configuration
   var firebaseConfig = {
     apiKey: "AIzaSyD7l2fMnKNv7D8zDWaBDU0EOQmwFST3_CE",
     authDomain: "willyapp-1123a.firebaseapp.com",
     projectId: "willyapp-1123a",
     storageBucket: "willyapp-1123a.appspot.com",
     messagingSenderId: "737860902356",
     appId: "1:737860902356:web:b40a672b5567e2cc550a41"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();