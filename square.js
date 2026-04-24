let squareArea = document.querySelector("#squarearea"); 
//let squareArea = document.getElementById("squareArea"); 
let squareCount = parseInt((Math.random()* 21)+ 30); //30-50 

//Variable for managing z-index (bringing squares to front)
let zIndexCounter = 1; 

//Updated onload that uses addSquare()
window.onload = function(){
    for(let i = 0; i < squareCount; i++){ 
        addSquare(); //calling our function instead of writing code here
    }
}

//Function that adds a square (connected to button in HTML)
function addSquare(){
    let square = document.createElement("div"); 
    square.className = "square"; 
    square.style.left = parseInt(Math.random() * 650) + "px"; 
    square.style.top = parseInt(Math.random() * 250) + "px"; 
    square.style.backgroundColor = getRandomColor(); 

    //Randomize square size (45–55 pixels)
    let size = parseInt(Math.random() * 11) + 45; 
    square.style.width = size + "px"; 
    square.style.height = size + "px"; 

    //onclick behavior
    square.onclick = function(){
        //If square is already on top, delete it
        if(square.style.zIndex == zIndexCounter){
            square.remove();
        } 
        else{
            //Otherwise bring it to the front
            zIndexCounter++;
            square.style.zIndex = zIndexCounter;
        }
    }
    squareArea.append(square); 
}

//Function for random colors
function getRandomColor(){ 

    let letters = "0123456789ABCDEF"; 
    let color = "#"; 
    for(let i = 0; i < 6; i++){ 
        color += letters.charAt(parseInt(Math.random()*letters.length)); 
    } 
    return color; 
} 

//Function that changes all square colors
function changeColors(){ 
    let squares = document.querySelectorAll(".square"); 
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
}