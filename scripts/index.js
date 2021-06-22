"use strict"

function $(id) {
    return document.getElementById(id);
}

//this array stores all the banners
function shuffle() {
    let banners = [
        ["images/buyCoding.svg"], ["images/courses.svg"], ["images/electronics.svg"], ["images/mastermind.svg"], ["images/books.svg"]];
    
    //every time the page loads it will use a random number to return a random index of the array
    let rand = Math.floor(Math.random() * 4);
    
    document.getElementById('ad-container').innerHTML = '<a href="./products.html"><img src=" ' + banners[rand] + '" height="320" width="350" alt="300x250 Banner Ad" /></a>';
}

window.onload = function() {
    shuffle();
    setInterval(shuffle, 2000);
}