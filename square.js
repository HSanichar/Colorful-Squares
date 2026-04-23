let squareArea = document.querySelector("#squareArea");
//let squareArea = document.getElementById("squareArea");
let squareCount = parseInt((Math.random()* 21)+ 30); //30-50
//Make some variable for a really big zIndex
for(let i = 0; i < squareCount; i++){
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random() * 650) + "px";
    square.style.top = parseInt(Math.random() * 250) + "px";
    square.style.backgroundColor = getRandomColor();
    //I can put a oneclick and a function(this)
    //put it on screen
    squareArea.append(square);
}

function getRandomColor(){
    //Make a color string?
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color+=letters.charAt(parseInt(Math.random()*letters.length));
    }
    //return that string
    return color;
}
//Make a function to add 1 square
//Make sure that I set that as the oneclick for thebutton

//Make a function that changes all the colors of all the sqaures 
//make sure the button calls it
function changeColors(){
    //Make an array 
    let squares = document.querySelectorAll(".square");
    //For of loop or just do a regular for loop with index
    //Change the color 
}