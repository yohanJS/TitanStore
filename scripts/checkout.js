"use strict"

let $ = function(id) {
    return document.getElementById(id);
}

let displayCart = function() {
    //get the table
    let table = "<tr><th>Item</th><th>Price</th><th>Quantity</th></tr>";
    let total = 0;

    let items = sessionStorage.getItem("products");
    let itemsParse = JSON.parse(items);

    //if the array is empty display this
    if(items == null) {
        $("title").innerHTML = "Cart's empty";
    }
    //if the array is not empty iterate over it
    //get the total price
    if(itemsParse != null) {
        for(let i = 0; i < itemsParse.length; i++) {
            let price = parseFloat(itemsParse[i].price);
            total += price;
        }
    }
    //display each item's name
    if(itemsParse != null) {
        for(let i = 0; i < itemsParse.length; i++) {
            table = table + "<tr><td>" + itemsParse[i].name + "</td><td>" + itemsParse[i].price + "</td><td>1</td></tr>";
        }
    }
    
    $("total-price").innerHTML = $("total-price").innerText + " $" + total.toFixed(2);

    $("table-cart").innerHTML = table;

}
 //validate the data 
 let validateData = function() {
    let err = false;

    let email = $("email").value;
    let phone = $("phone").value;
    let cardNumber = $("card-number").value;

    //create your regular expression
    let reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let rePhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //we only support two credit cards now
    let americanE = /^(?:3[47][0-9]{13})$/;
    let discover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;


    //check email
    if(reEmail.test(email) == false) {
        $("email-msg").innerHTML = "must be a valid email";
        err = true;
    } else {
        $("email-msg").innerHTML = " ";
    }

    //validate phone
    if(rePhone.test(phone) == false) {
        $("phone-msg").innerHTML = "must be a valid format (10 digits 123-456-7890)";
        err = true;
    } else {
        $("phone-msg").innerHTML = " ";
    }

    //validate credit card
    if(americanE.test(cardNumber) == true) {
        $("card-msg").innerHTML = "American Express Credit Card";
    } else if(discover.test(cardNumber) == true) {
        $("card-msg").innerHTML = "Discover Credit Card";
    } else {
        $("card-msg").innerHTML = "We do not support this credit card";
        err = true;
    }
     
    //if no errors during validation
    //send the form
    if(!err) {
       alert("Payment has been sent...\nThank you! " + $("full-name").value);
       $("full-name").value = " ";
       $("email").value = " ";
       $("phone").value = " ";
       $("card-number").value = " ";
       $("card-msg").innerHTML = " ";
       $("full-name").focus();
    }
}

window.onload = function() {
    //when the page load display what's inside the cart
    displayCart();
    //when the user clicks the pay button
    $("pay").onclick = function() {
        validateData();
    }
}
