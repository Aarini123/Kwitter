var firebaseConfig = {
      apiKey: "AIzaSyCHqjLxZ5pRmzp9h_7U0UASgIfbvLUtEes",
      authDomain: "kwitter-9204f.firebaseapp.com",
      databaseURL: "https://kwitter-9204f-default-rtdb.firebaseio.com",
      projectId: "kwitter-9204f",
      storageBucket: "kwitter-9204f.appspot.com",
      messagingSenderId: "396936983945",
      appId: "1:396936983945:web:769fa7959c23708711dd58",
      measurementId: "G-YBLQY9ZXFF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user");
document.getElementById("username_").innerHTML="Welcome "+ user_name + " !!"

function Add_room(){
      room=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
            purpose: "adding room"
      });
localStorage.setItem("room name",room);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name"+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+ Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
      //Start code

      // End code
      });});}
getData();

function redirect(name){
localStorage.setItem("room name",name);
window.location="kwitter_page.html";
}

function LogOUT(){
      localStorage.removeItem("user");
      localStorage.removeItem("room name");
      window.location.replace("index.html");
}
