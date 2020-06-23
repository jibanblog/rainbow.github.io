var myWindow;

function myLogin(){
window.open("./login.html","","width=700px,height=1000px");

}





function loginFunction(){

var userName = document.getElementById("loginname").value;
var passWord = document.getElementById("loginpassword").value;

if((userName != "Jiban Debashis") && (passWord != "bapu1234")){
alert("The username or password is inncorrect");
}

if(userName != "Jiban Debashis"){
document.getElementById("message").innerHTML="**Incorrect username";
return false;
}

if(passWord != "bapu1234"){
document.getElementById("messagess").innerHTML="**Incorrect password";
return false;
}

  }