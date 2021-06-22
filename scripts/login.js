"use strict"

function $(id) {
    return document.getElementById(id);
};

//Admin credentials
let adminUser = "user@user.com";
let adminPassw = "password";

function login() {
    
    //prompt the user for credentials
    let userName = $("username").value;
    let password = $("password").value;

    if(userName === adminUser && password === adminPassw) {
        $("login_form").action = "./sales.html";
    } else {
        //cacth the error if the user click the login button
        //without entering any data
        if(userName == "" || password == "") {
            alert("Both fields are required");
            $("username").innerHTML= userName;
            $("password").value = "";
            $("username").focus();
        } else {
            //get the object stored in local
            let userData = localStorage.getItem(userName);
        
            if(userData == null) {
                alert("account does not exists..");
                $("username").value = "";
                $("password").value = "";
                $("username").focus();
            } else {
                //parse the JSON object
                let userObject = JSON.parse(userData);

            if(userName == userObject.email && password == userObject.password) {
                $("login_form").action = "./sales.html";
            } else {
                alert("Email or password incorrect. \nTry again..")
                $("username").value = "";
                $("password").value = "";
                $("username").focus();
            }
        }
        
    }
}
    
}

window.onload = function() {
    $("login").onclick = login;
}