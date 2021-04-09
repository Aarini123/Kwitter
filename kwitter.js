function add_User(){
    user_name1=document.getElementById("username").value;
    localStorage.setItem("user",user_name1);
    window.location="kwitter_room.html"
}