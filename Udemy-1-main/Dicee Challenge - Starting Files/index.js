let randomNumber1 = Math.floor((Math.random()*6)+1);
let randomNumber2 = Math.floor((Math.random()*6)+1);


if (randomNumber1===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
if (randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
if (randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
if (randomNumber1===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
if (randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
if (randomNumber1===6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}


//now the same with dicee 2, too bad there isnt some kind of div for js script too//
if (randomNumber2===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
if (randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
if (randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
if (randomNumber2===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
if (randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
if (randomNumber2===6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}


// now we are going to write the final meesage in h1//
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player One Wins!!";
}
if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player Two Wins!!";
}
if (randomNumber2===randomNumber1){
    document.querySelector("h1").innerHTML="Its a draw!! Try again...";
}