var username=document.getElementById("username");
var password=document.getElementById("password");
var password=document.getElementById("password");
var pass=1234;
function display()
{


if(username=="")
{
alert("Please fill Username...!!!");
return false;
}
if(password.lenghth<8)
{
alert("Password should be at least 8 characters long...!!!");
return false;
}

if(username.length<6)
{
alert("Username should be at least 6 characters long...!!!");
return false;
}
if(password.value.match(pass))
{
alert("incorrect password");
return false;
}
if(phone.length>12)
{
alert("incorrect phone number");
return false;
}
alert("Hello...!!!!");
return true;
}