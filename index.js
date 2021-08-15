// Login & Register slider part

let Login = document.getElementById("Login")
let Register = document.getElementById("Register")
let btn = document.getElementById("btn")

 register = () => {
    Login.style.left = "-450px";
    Register.style.left = "50px";
    btn.style.left = "110px";
}

 login = () => {
    Login.style.left = "50px";
    Register.style.left = "450px";
    btn.style.left = "0px";
 }

 //Form validation for Login

document.getElementById("login-btn").addEventListener("click", function(){
    let username = (document.getElementById("user").value);
    let password = (document.getElementById("pass").value);

    if (username == "") {
        alert("Please fill username")
    } else if (password == ""){
        alert("Please fill password")
    }
    else{
        alert("Now you can enter")
    }
});

//Form validation for Register

document.getElementById("reg-btn").addEventListener("click", function(){
    let Newusername = (document.getElementById("newuser").value);
    let Newemail = (document.getElementById("newemail").value);
    let Newpassword = (document.getElementById("newpass").value);

    if (Newusername == "") {
        alert("Username is required")
    } else if (Newemail == ""){
        alert("Email-id is required")
    }else if (Newpassword == ""){
        alert("Password is required")
    } else{
        alert("Now you're member")
    }
});