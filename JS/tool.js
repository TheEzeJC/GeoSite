var firebaseConfig = {
    apiKey: "AIzaSyBehvndrllXvVKQQpFp3hkMfK_T68IFdYw",
    authDomain: "georockdb.firebaseapp.com",
    databaseURL: "https://georockdb.firebaseio.com",
    projectId: "georockdb",
    storageBucket: "georockdb.appspot.com",
    messagingSenderId: "811717337078",
    appId: "1:811717337078:web:443474dd1553895d"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref();

ref.on('value', gotData, errData);

function gotData(data) {
  console.log(data.val());
  var georockdb = data.val();
}
function errData(err){
  console.log("Error!")
  console.log(err)
}