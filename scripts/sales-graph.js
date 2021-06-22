"use strict"


let myChart = function(arr) {
    // Create the container for the GRAPH
    let graph = document.createElement("div");
    //set the graph 
    graph.classList.add("chart");
    // Set to position relative
    graph.style.position = "relative";
    
    //Set the height for the whole GRAPH
    let height = 0;

    //iterate over the array and for each sales value set the height
    //as the largest number
    for(let i = 0; i < arr.length; i++) {
        height = Math.max(height, arr[i].sales);
    }
    //now update the height for the GRAPH
    //now after the iteration GRAPH will have
    //the largest value of the object inside array
    graph.style.height = (height + 30) + "px";

    //bar starts at position 0
    let barPosition = 0;
    
    // We have a preset bar width for the purposes of this
    // example.  A full-blown chart module would make this
    // customizable.
    let barWidth = 50;

    //Create the bars inside GRAPH
    //iterate over the array and create each bar
    for(let i = 0; i < arr.length; i++) {

        //get each object of the array
        let data = arr[i];

        //create individual bar
        let bar = document.createElement("div");
        //setting a class in bars
        bar.classList.add("bars");
        //styling each bar
        bar.style.position = "absolute";
        bar.style.marginLeft = "0px";
        bar.style.left = barPosition + "px";
        bar.style.width = barWidth + "px";  
        bar.style.backgroundColor = data.color;
        bar.style.height = data.sales + "px";
        bar.style.borderStyle = "solid";
        bar.style.borderColor = data.color;
        bar.style.bottom = "0px";
        bar.style.color = "#eee";
        bar.innerText = `${data.sales}K`;
        
        graph.appendChild(bar);
        barPosition += 55;

    }

    /*******ADDING THE MONTH TO EACH BAR*******/
    //append month label
    //bar starts at position 0
    let textPosition = 0;
    
    // We have a preset bar width for the purposes of this
    // example.  A full-blown chart module would make this
    // customizable.
    let textWidth = 50;

    //Create the text for each bar
    //iterate over the array and add month's name to 
    //each bar
    for(let i = 0; i < arr.length; i++) {

        //get each object of the array
        let data = arr[i];

        //create individual text
        let text = document.createElement("div");
        text.classList.add("text-month");
        text.style.position = "absolute";
        text.style.marginLeft = "10px";
        text.style.left = textPosition + "px";
        text.style.width = textWidth + "px";
        text.style.bottom = "-20px";
        text.innerHTML = `${data.month}`;
        
        graph.appendChild(text);
        
        textPosition += 55;
    }
    return graph
};

window.onload = function() {

    let salesData = [

        {month:"Jan", sales:40, color:"#663399"}, 
        {month:"Feb", sales:20, color:"#A52A2A"}, 
        {month:"Mar", sales:100, color:"#0000FF"},
        {month:"Apr", sales:65, color:"#4B0082"}, 
        {month:"May", sales:75, color:"#D2691E"}, 
        {month:"Jun", sales:120, color:"#006400"}
        /*
        {month:"Jul", sales:121, color:"#8B0000"}, 
        {month:"Aug", sales:175, color:"#FF8C00"}, 
        {month:"Sept", sales:220, color:"#8FBC8F"}, 
        {month:"Oct", sales:275, color:"#E9967A"}, 
        {month:"Nov", sales:300, color:"#FF1493"},
        {month:"Dec", sales:15, color:"#1E90FF"}
        */
    
    ];
    //myChart function returns a newly created GRAPH
    let graph = myChart(salesData);
    //append that GRAPH to the body
    document.body.appendChild(graph);

    function reset() {
        //get all the text
        let myText = document.getElementsByClassName("text-month");
        //erase all text
        for(let i = 0; i < myText.length; i++) {
            let each = myText[i];
            each.style.display = "none";
        }

        //get all bars
        let myBars = document.getElementsByClassName("bars");
        //set all bars back to 0
        for(let i = 0; i < myBars.length; i++) {
            let bar = myBars[i];
            bar.innerHTML = "";
            bar.style.height = "0px";
            bar.style.transitionDuration = "3s";
        }

        //feedback
        let msg = document.createElement("h3");
        msg.innerHTML = "Please reload page to see the Chart again....";
        msg.style.marginLeft = "10px";
        document.body.appendChild(msg);
        
    }
    document.getElementById("reset").onclick = reset;
}
