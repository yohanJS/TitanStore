"use strict"


function $(id) {
    return document.getElementById(id);
}

//HTML
let html = "";

function validateData() {
    let senData = true;

    //get the data from the form
    let password = $("password").value;
    let email = $("email").value;
    let phone = $("phone").value;
    let street = $("street").value;
    let city = $("city").value;
    let state = $("state").value;
    let zip = $("zip_code").value;
    let contactMe = "Text";
    
    if($("email_check").checked) {contactMe = "Email";}
    if($("no_contact").checked) {contactMe = "None";}
    //returns true if checked
    let accept = $("accept").checked;

    //check password
    if(password == "") {
        password = "cannot be empty"
        senData = false;
    }

    //check email
    if(email == "") {
        email = "cannot be empty";
        senData = false;
    }
    //check phone
    if(phone == "") {
        phone = "cannot be empty";
        senData = false;
    }
    //check street
    if(street == "") {
        street = "cannot be empty";
        senData = false;
    }
    //check city
    if(city == "") {
        city = "cannot be empty";
        senData = false;
    }
    //check state
    if(state == "") {
        state = "must select one";
        senData = false;
    }
    //check zip code
    if(zip == "") {
        zip = "cannot be empty";
        senData = false;
    }
    if(accept != true) {
        senData = false;
    }

    let my_table = "";
    if(senData == false){
        //my_table = "<tr><td>Password:</td><td> " + password + "</td></tr><br>"
        my_table = my_table + "<tr><td>Email:</td><td> " + email + "</td></tr><br>";
        my_table = my_table + "<tr><td>Phone:</td><td> " + phone + "</td></tr><br>";
        my_table = my_table + "<tr><td>Street:</td><td> " + street + "</td></tr><br>";
        my_table = my_table + "<tr><td>City:</td><td> " + city + "</td></tr><br>";
        my_table = my_table + "<tr><td>State:</td><td> " + state + "</td></tr><br>";
        my_table = my_table + "<tr><td>Zip code:</td><td> " + zip + "</td></tr><br>";
        my_table = my_table + "<tr><td>Contact:</td><td> " + contactMe + "</td></tr><br>";
        my_table = my_table + "<tr><td>Terms of Service:</td><td> " + "must accept terms" + "</td></tr>";
        $("bad_entries").innerHTML = my_table;
    } else {
        //store the data as an object in local
        let userObject = {
            password: password,
            email: email,
            phone: phone,
            street: street,
            city: city,
            state: state,
            zip: zip
        }
   
        //use the email as the key an the useObject as the value
        localStorage.setItem(email, JSON.stringify(userObject));
        //then submit the form
        $("register_form").submit();
        alert('Account created it');
    }

     
};

//this function clears the form
function clearForm() {
        $("register_form").reset();
        $("email").nextElementSibling.firstChild.nodeValue = "*";
        $("phone").nextElementSibling.firstChild.nodeValue = "*";
        $("street").nextElementSibling.firstChild.nodeValue = "*";
        $("city").nextElementSibling.firstChild.nodeValue = "*";
};

window.onload = function(){
    $("register").onclick = validateData;
    $("clear").onclick = clearForm;
    $("email").focus();
}