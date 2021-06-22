"use strict"

function $(id) {
    return document.getElementById(id);
}

function join() {
        let senData = true;

        //get the data from the form
        //let myForm = $("subscribe_form");
        let email = $("email").value;
        let emailCheck = $("email_check").value;
        let fName = $("fName").value;
        
        //validate the first email
        if(email == "") {
            $("email").nextElementSibling.firstChild.nodeValue = "cannot be empty";
            senData = false;
        } else if(email != "") {
            $("email").nextElementSibling.firstChild.nodeValue = "";
        } 
        //validate the second entry for the eamil
        if(emailCheck == "") {
            $("email_check").nextElementSibling.firstChild.nodeValue  = "cannot be empty";
            senData = false;
        } else if(email != emailCheck) {
            $("email_check").nextElementSibling.firstChild.nodeValue  = "email does not match";
            senData = false;
        } else {
            $("email_message").innerText = "";
        }
        //validate the name entry
        if(fName == "") {
            $("fName").nextElementSibling.firstChild.nodeValue  = "This entry is required";
            senData = false;
        } else {
            $("fName").nextElementSibling.firstChild.nodeValue  = "";
        }

        if(senData == true) {
            //send data to the server
            alert("Thanks for joining our list")
            $("subscribe_form").submit();
        }
};


window.onload = function() {
    $("subscribe").onclick = join;
    $("email").focus();
}
    
