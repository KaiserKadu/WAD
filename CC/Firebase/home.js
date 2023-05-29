window.onload = loadUsers
var firebaseConfig = {
   apiKey: "AIzaSyAUYEQqpsrg3qMJnwFPKqMgdfvR6S_8arc",
  authDomain: "fir-1-25f62.firebaseapp.com",
  projectId: "fir-1-25f62",
  storageBucket: "fir-1-25f62.appspot.com",
  messagingSenderId: "1041218976133",
  appId: "1:1041218976133:web:088cd09988919fa49cacec"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
let userData = [];
async function loadUsers (){
await firebase.database().ref('users').once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      const email = childData.email;
      const name = childData.full_name;
      const phoneno = childData.phoneno;
      const data = {
        name:name,email:email,phoneno:phoneno
      }
      userData.push(data)
    });
  });
  let html ="<tr><th>First Name</th><th>Last Name</th><th>Points</th></tr>"
  userData.forEach((user, index) => {
    var count = index+1;
    html+="<tr><td>"+count+"</td><td>"+user.name+"</td><td>"+user.email+"</td><td>"+user.phoneno+"</td></tr>";
  });
  console.log(html);
  let element = document.querySelector('.user_table');
  element.innerHTML = html
}

function logOut(){
  window.location.href = 'index.html'
}