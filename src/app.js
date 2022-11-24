import "./style.scss";
import confetti from "canvas-confetti";
import ColorThief from "colorthief";

// to deploy type https://GeorgeSwift16.github.io/packages-codealong in the packages.json file
// using color thief, 
// import color thief then read nstruction, we need to create a constant for it.
const colorThief = new ColorThief();

const userImageInput = document.querySelector("#image-input");

const confettibutton = document.querySelector(".confetti-button");
const dogImage = document.querySelector("#dog-image");
// install the confetti cannon in second terminal. then crtl c and npm start first terminal.
// we first set the event handler and variable
// we then set a function to call the confetti to fire
// we can then seta variable to change the confetti.
// we then call the confetti function defined by the maker with the variables of properites we want.
const fireConfetti = () => {
    const confettiOptions = {
        particleCount: 300,
        colors : ["#1e1e1e", "#FF7900", "#FFFFFF"],
        spread : 300,
    };

    confetti(confettiOptions);
};




// CT we cant to get the color from the image DOM element
    // check if the image has loaded - network tab
    // if it has, get the color
    // otherwise ttell it to get the color once its loaded the image
    // js loads faster so we have to delay it 
// console.log what the colours are in the color

// we create a function to run color thief and get us the color of the (dog image)
const onImageLoad = () => {
    const color = colorThief.getColor(dogImage);
    // color now represents the dominant color of the image show in the console.
    //  to set the body bg color to this color
    const body = document.querySelector("body");

    // we can change any style in css within js by calling the constant for it then .style.background color.
    body.style.backgroundColor = "rgb(col1,col2,col3)";
    // this is now inline styled not external.
    //  to replace this with the color array in the colour vairable
    body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`; 
    // this will now dynamically pull through.
};

// now to change the background image 
const handleUserImageInput = (event) => {
    dogImage.src = event.target.value;
};

confettibutton.addEventListener("click", fireConfetti);

// now we say
// if the image has been successfully downloaded, run the function right away

// otherwise, wait for the "load" event, then run the function





if(dogImage.complete){
    onImageLoad();
} else {
    dogImage.addEventListener("load", onImageLoad);
};
userImageInput.addEventListener("input", handleUserImageInput);