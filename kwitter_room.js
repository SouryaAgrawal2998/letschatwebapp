const firebaseConfig = {
      apiKey: "AIzaSyApPMX9tSPF3XE9JQok3alh-oMW70sAQoE",
      authDomain: "letschatwebapp-c6ad0.firebaseapp.com",
      databaseURL: "https://letschatwebapp-c6ad0-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-c6ad0",
      storageBucket: "letschatwebapp-c6ad0.appspot.com",
      messagingSenderId: "824143015509",
      appId: "1:824143015509:web:92cfaa50731ea559f46edc"
    };
    
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row= "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+= row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}