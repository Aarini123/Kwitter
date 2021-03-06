//YOUR FIREBASE LINKS
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
    var userName=localStorage.getItem("user");
var room_name=localStorage.getItem("room name");
function chat(){
      var message=document.getElementById("chat_input").value;
firebase.database().ref(room_name).push({
      name:userName,
      msg:message,
      like:0
});
document.getElementById("chat_input").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['msg'];
like=message_data['like'];
name_tag="<h4>"+ name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row=name_tag+message_with_tag+like_button+span_with_tag;
 document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      likes=document.getElementById(message_id).value;
      update_like=Number(likes)+1;
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_like
      });
}
function LogOut(){
      localStorage.removeItem("user");
      localStorage.removeItem("room name");
      window.location.replace("index.html");
}
