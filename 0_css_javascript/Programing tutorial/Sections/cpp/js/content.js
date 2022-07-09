import { AJAXgetData } from "./ajax.js"
import { updateMenuParams } from "./menu.js"

/****************** 
   * EXPORTED FUNCTIONS 
   * ****************/
let fadeInButton = document.getElementById("fadeIn")
    .onclick = function () {
        startFadeAnimation("main");
    }

let fadeOutButton = document.getElementById("fadeOut")
    .onclick = function () {
        stopFadeAnimation("main");
    }

function ProcessMenuLink(url, container) {
    console.log(`button pressed
      url: ${url}
      container: ${container}`);

    startFadeAnimation(container);
    AJAXgetData(url, container, successCallback, failCallback);
    
}

/****************** 
   * LOCAL FUNCTIONS 
   * ****************/
function startFadeAnimation(container) {
    console.log(startFadeAnimation.name);

    let d = document.getElementById(container);
    if (d) {
        //d.classList.toggle('active');
        d.classList.add('faded');
    }
    else {
        console.log("Error: container not found");
    }
}

function stopFadeAnimation(container) {
    console.log(stopFadeAnimation.name);

    let d = document.getElementById(container);
    if (d) {
        //d.classList.toggle('active');
        d.classList.remove('faded');
    }
    else {
        console.log("Error: container not found");
    }
}

function successCallback(container, content) {
    //animation
    console.log(successCallback.name + ", container:" + container);

    sleepp(1000).then(() => {
        // Do something after the sleep!
        stopFadeAnimation(container);

        let d = document.getElementById(container);
        if (d) {
            d.innerHTML = content;
        }
    });
}

function failCallback(container, content) {
    sleepp(500).then(() => {
        // Do something after the sleep!
        stopFadeAnimation(container);

        let d = document.getElementById(container);
        if (d) {
            d.innerHTML = "<H1 style=\"color: red;\">FILE NOT FOUND</H1>";
        }
    });
}

// sleep time expects milliseconds
function sleepp (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

export { ProcessMenuLink };