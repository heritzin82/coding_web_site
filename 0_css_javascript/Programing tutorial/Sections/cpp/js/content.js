import { AJAXgetData } from "./ajax.js"
import { updateMenuParams } from "./menu.js"

/****************** 
   * EXPORTED FUNCTIONS 
   * ****************/

function ProcessMenuLink(url, container) {
    console.log(`button pressed
      url: ${url}
      container: ${container}`);

    $("#"+container).fadeOut("slow");
    AJAXgetData(url, container, successCallback, failCallback);

}

/****************** 
   * LOCAL FUNCTIONS 
   * ****************/
$("#fadeIn").click(function () {
    $("#main").fadeIn(1000);
    //console.log("fadeIn");
});

$("#fadeOut").click(function () {
    $("#main").fadeOut(1000);
    //console.log("fadeOut");
});

function successCallback(container, content) {
    //animation
    console.log(successCallback.name + ", container:" + container);

    sleepp(1000).then(() => {
        // Do something after the sleep!
        //stopFadeAnimation(container);

        let d = document.getElementById(container);
        if (d) {
            d.innerHTML = content;
        }
        $("#"+container).fadeIn("slow");
    });
}

function failCallback(container, content) {
    sleepp(500).then(() => {
        // Do something after the sleep!
        //stopFadeAnimation(container);

        let d = document.getElementById(container);
        if (d) {
            d.innerHTML = "<H1 style=\"color: red;\">FILE NOT FOUND</H1>";
        }
        $("#"+container).fadeIn("slow");
    });
}

// sleep time expects milliseconds
function sleepp(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export { ProcessMenuLink };