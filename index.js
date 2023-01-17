let points = 0

//these are to allow addPoints and addPoints2 to be able to change the text fields within the element ID 
let addPoints = document.getElementById("addPoints")
let addPoints2 = document.getElementById("addPoints2")

function reset(){
   addPoints.textContent = 0
   addPoints2.textContent = 0
   points = 0 // use "points" because all the other buttons uses "points" for adding
   
}



function home1(){
    points += 1
   addPoints.textContent = points
}


function home2(){
    points += 2
   addPoints.textContent = points // reveal points which = 2 within this function to the element ID  of "addPoints"
}

function home3(){
    points += 3
   addPoints.textContent = points
}

function g1(){
    points += 1
   addPoints2.textContent = points
}

function g2(){
    points += 2
   addPoints2.textContent = points
}

function g3(){
    points += 3
   addPoints2.textContent = points
}