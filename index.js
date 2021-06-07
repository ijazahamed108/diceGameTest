var randomNumber1=Math.floor(Math.random()*6)+1; //generating a random number between 1-6
var randomDiceImage="dice"+randomNumber1+".png"; //Assinging random number to image set
var randomImageSource="images/"+randomDiceImage; // sorce for src attribute
var image1=document.querySelectorAll("img")[0];  //assigning var to first image element
image1.setAttribute("src",randomImageSource);    //changing sorce of first image element

// repeating above steps for image 2

var randomNumber2=Math.floor(Math.random()*6)+1; 
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//winner logic

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 won 😀";
}
else if(randomNumber1===randomNumber2){

    document.querySelector("h1").innerHTML="Its a Draw 😑";
    var audio=new Audio("crash.mp3");
    audio.play();
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 won 😀";
}
function ref(){
    location.reload();
}
