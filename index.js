// here we added class drum in for loop becuse in case if we create more buttons it will not create problem for us
// for loop for every buttons
// creating a variable for checking the drum no

// ---------------DETECTING BUTTON PRESS--------------//
let drumNo = document.querySelectorAll(".drum").length;

// here we added length function to check for the lenght of drum

for (let i = 0; i<drumNo; i++) {

                                                                                        // adding event listner to the button element
                                                                                        // event listner gives sound when we click on something
                                                                                        // has two parameters type-what it should listen to , listner-js function 

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// it store the innerhtml content of clicked drum element and store it in the variable buttoninnerhtml
    var buttonInnerHTML = this.innerHTML;
// calling the make sound function 
// we passed an argument buttonIneerHTML bcz it play according to the inner html content
    makeSound(buttonInnerHTML);
// calling the animation function 
    animation(buttonInnerHTML);
});


// we added sssevent listner to first element so when we click on first button we get the alert

} 


// ----------DETECTING KEY PRESS---------//
// adding eventlistner for the key press so when we press the key it would sound
document.addEventListener("keypress",function(event){
// calling make sound function 
 makeSound(event.key);
//  calling animation function 
 animation(event.key);
});



// declaration of the function make sound
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;  
            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;    
       
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
    // default statement is if we press other button
    
        default:
            console.log(buttonInnerHTML);
       }
}


// adding animations to website
// creating a function for the animation to happen when button or key is pressed

// declaration of the function animation 
function animation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    // 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 1.00);
}