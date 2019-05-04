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
var ref = database.ref("rockdb");

ref.on('value', gotData, errData);

function gotData(data) {
  var rockid = data.val();
  var keys = Object.keys(rockid);
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name = rockid[k].name;
    var color = rockid[k].color;
    console.log(name,color);
  }
}
function errData(err){
  console.log("Error!")
  console.log(err)
}