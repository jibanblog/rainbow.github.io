function validationFunction(){


var regular_expression = /^[A-Za-z]+$/;

var user = document.getElementById("user_name").value;
var passwords = document.getElementById("pass_word").value;
var confirmpassword = document.getElementById("conf_password").value;
var mobilenumber = document.getElementById("mobile").value;
var emailid = document.getElementById("email_id").value;






if( user == ""){
document.getElementById("message").innerHTML = "**username can't be empty";
return false;
}



if((user.length < 3) || (user.length > 20)){
document.getElementById("message").innerHTML = "**username must be 3-20 characters";
return false;
}



if(user.match(regular_expression)){
true;
}else{
document.getElementById("message").innerHTML = "**only alphabets are allowed";
return false;
}



if( passwords == ""){
document.getElementById("passes").innerHTML = "**Please fill the password";
return false;
}




if((passwords.length < 6) || (passwords.length > 14)){
document.getElementById("passes").innerHTML = "**Password length must be 6-14 characters";
return false;
}




if( confirmpassword == ""){
document.getElementById("words").innerHTML = "**Please fill the confirm password";
return false;
}


if(passwords != confirmpassword){
document.getElementById("words").innerHTML = "**Password doesn't match";
return false;
}


if( mobilenumber == ""){
document.getElementById("phonenumber").innerHTML = "**Please Enter Mobile Number";
return false;
}

if(isNaN(mobilenumber)){
document.getElementById("phonenumber").innerHTML = "**only 10 digits mobile number is allowed";
return false;
}


if(mobilenumber.length != 10){
document.getElementById("phonenumber").innerHTML = "**mobile number must be 10 digits"
}




if( emailid == ""){
document.getElementById("mailaccount").innerHTML = "**Please Enter Email";
return false;
}

if(emailid.indexOf('@') <= 0){
document.getElementById("mailaccount").innerHTML = "**invalid position of '@'";
return false;
}


var maleElement = document.getElementById("radiomale");
var femaleElement = document.getElementById("radiofemale");

if(maleElement.checked==true){
return true;
}else{
document.getElementById("check").innerHTML = "**please select your gender";
return false;
}


if(femaleElement.checked==true){
return true;
}else{
document.getElementById("check").innerHTML = "**please select your gender";
return false;
}



   }













  
   