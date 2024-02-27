
var randomnumber1 = Math.random()
randomnumber1 = randomnumber1 * 6;
randomnumber1 = Math.floor(randomnumber1)+1;
    
var randomdice = "dice" + randomnumber1 + ".png";
var randomimage = "./images/" + randomdice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimage2 = "./images/"+ "dice" + randomnumber2 + ".png"
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if (randomnumber1 > randomnumber2){document.querySelector("h1").innerHTML="player1 won"}
else if (randomnumber1 === randomnumber2){document.querySelector("h1").innerHTML="Draw..try again"}
else{document.querySelector("h1").innerHTML="player2 won"}
