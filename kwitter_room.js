
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCj-3OF5IImuqpK8_iSRmSsNHlVO5_OpqM",
      authDomain: "kwitter-3c647.firebaseapp.com",
      databaseURL: "https://kwitter-3c647-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c647",
      storageBucket: "kwitter-3c647.appspot.com",
      messagingSenderId: "989249820144",
      appId: "1:989249820144:web:624d69a6e451be9751f935",
      measurementId: "G-TNNTE84R5B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
