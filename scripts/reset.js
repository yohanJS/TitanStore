"use strict"

function $(id) {
    return document.getElementById(id);
}

//sets a new password
function reset() {

    //get the data to reset the password
    let userName = $("username").value;
    let password = $("password").value;

    //cacth the error if the user click the reset button
    //without entering any data
    if(userName == "" || password == "") {
        alert("Both fields are required");
    } else {
        //retrieve the object using the userName as key
        let userData = localStorage.getItem(userName);
        //parse the userData 
        let userObject = JSON.parse(userData);

        if(userData != null) {
            //set the new password
            userObject.password = password;
            
            //store the updated object
            localStorage.setItem(userName, JSON.stringify(userObject));
            alert("password has been updated");
            $("username").value = "";
            $("password").value = "";
            $("username").focus();
        } else {
            alert("I cannot find your account \nTry again")
            $("username").value = "";
            $("password").value = "";
            $("username").focus();
        }
    }

}


window.onload = function() {
    $("reset").onclick = reset;
}