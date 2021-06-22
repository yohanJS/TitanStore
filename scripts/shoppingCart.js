"use strict"

let $ = function(id) {
    return document.getElementById(id);
}

//Product Class
//we use this class to create our products
class Product {
    constructor(price, name, id) {
        this.price = price;
        this.name = name;
        this.id = id;
    }
}

//this array stores the itmes we add
let itemsPurchased = [];

//this array will store the product object
const products = [];

//create your products using the class Product
let product_1 = new Product("99.99", "Courses", "product-1");
let product_2 = new Product("9.99", "Coding", "product-2");
let product_3 = new Product("19.99", "Master Mind", "product-3");
let product_4 = new Product("109.99", "Electronics", "product-4");
let product_5 = new Product("24.99", "Books", "product-5");


//this function takes an id and iterate over the products array
//if the id matches any id property then add the product to the \
//itemPurchased and to the session storage
let add = function(id) {
    if(sessionStorage.getItem("products") != null) {
        let itemsParse = JSON.parse(sessionStorage.getItem("products"));
        for(let i = 0; i < products.length; i++) {
            if(products[i].id == id) {
                itemsParse.push(products[i]);
                break;
            }
        }
    sessionStorage.setItem("products", JSON.stringify(itemsParse));
    } else if(sessionStorage.getItem("products") == null) {
        for(let
         i = 0; i < products.length; i++) {
            if(products[i].id == id) {
                itemsPurchased.push(products[i]);
                break;
            }
        }
        sessionStorage.setItem("products", JSON.stringify(itemsPurchased));
    }
}
//this function removes a product from the itemsPurchased 
//and from the session storage
//using the splice function of array
let remove = function(id) {
    //removes from sessionStorage
    let
 items = sessionStorage.getItem("products");
    let
 itemsParse = JSON.parse(items);
    for(let
     i = 0; i < itemsParse.length; i++) {
        if(itemsParse[i].id == id) {
            itemsParse.splice(i, 1);
            sessionStorage.setItem("products", JSON.stringify(itemsParse));
            //break prevents from deleting the same object
            //twice
            break;
        }
    }
}

//this function updates the shopping cart
//every time a products is either add it
//or remove it
let updateCart = function() {
    if(sessionStorage.getItem("products") != null) {
        let itemsParse = JSON.parse(sessionStorage.getItem("products"));
        $("cart").innerText = `${itemsParse.length} Item`;
    } else {
        $("cart").innerText = "Car's empty" ;
    }
}

window.onload = function() {

    //when the page loads add the products to the products array
    products.push(product_1);
    products.push(product_2);
    products.push(product_3);
    products.push(product_4);
    products.push(product_5);

    //when the page loads this function checks if there
    //are items stored in the cart
    updateCart();
    
    //add("product-1");
    $("product-1").onclick = function() {
        add("product-1");
        updateCart();
    }
    //remove("product-1")
    $("product-one").onclick = function() {
        remove("product-1");
        updateCart();
    }

    //add("product-2");
    $("product-2").onclick = function() {
        add("product-2");
        updateCart();
    }
    //remove("product-2")
    $("product-two").onclick = function() {
        remove("product-2");
        updateCart();
    }

    //add("product-3");
    $("product-3").onclick = function() {
        add("product-3");
        updateCart();
    }
    //remove("product-3")
    $("product-three").onclick = function() {
        remove("product-3");
        updateCart();
    }

    //add("product-4");
    $("product-4").onclick = function() {
        add("product-4");
        updateCart();
    }
    //remove("product-4")
    $("product-four").onclick = function() {
        remove("product-4");
        updateCart();
    }

    //add("product-5");
    $("product-5").onclick = function() {
        add("product-5");
        updateCart();
    }
    //remove("product-3")
    $("product-five").onclick = function() {
        remove("product-5");
        updateCart();
    }

}