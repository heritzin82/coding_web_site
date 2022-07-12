//< !-- javascript animations using GSAP-- >

import { iconsArray } from './icons_def.js';

const data = {
    anim0: {
        timeline: [],
        animEnded: [],
        mouseIn: []
    },
    anim1: {
        timeline: [],
        animEnded: [],
        mouseIn: []
    },
    /*animation:
        [
            { timeline: [], animEnded: [], mouseIn: [], }, //Loading animation
            { timeline: [], animEnded: [], mouseIn: [], },  //Mouse in/out animation
        ],*/
};

console.log("****TODO: use timelinex var instead of iconsArray");
//TimelineMax({ anim_params });



//------Create HTML Elements based on icons array
let cc = document.getElementById("gridContainer");
iconsArray.forEach(function (item, index) {
    let buttonContainer = document.createElement("div");
    buttonContainer.className = "buttonContainer debug";

    let L2 = document.createElement("div");
    L2.id = "icon" + index;

    L2.className = "debug icon";

    //Add link to div containing img and text
    /*L2.onclick = function () {
        window.location = item.link;
    }*/
    buttonContainer.appendChild(L2);

    let img = document.createElement("img");
    img.src = item.icon;
    img.alt = item.type;
    img.width = "25";
    img.height = "25";

    L2.append(img);

    let textContainer = document.createElement("div");
    textContainer.className = "text-center text-white";
    textContainer.id = "buttonLabel" + index;
    textContainer.innerHTML = item.text;

    buttonContainer.append(textContainer);

    cc.appendChild(buttonContainer);

    //INIT DATA ARRAYS
    /*data.anim0.animEnded= false;
    data.anim0.mouseIn = false;
    initialAnimationEnd[index] = false;
        data.mouseIn[index] = false;
        asdfsfd*/
});

//-------Update columns in grid
var r = document.querySelector(':root');
var rs = getComputedStyle(r);
r.style.setProperty('--grid_columns', iconsArray.length);
//console.log("Property grid_columns:" + rs.getPropertyValue("--grid_columns"));



//------Add initial animation to grid elements (and mouse over animations)
let container = document.querySelectorAll("div.buttonContainer");
console.log("Number of icons:" + container.length);

let mydelay = 0;
//let c = 0;
const anim_params = { repeat: 0, repeatDelay: 0 };
const animation_start = { left: 0, opacity: 1, y: 0 };
const animation = {
    left: 100,
    opacity: 0,
    y: -20,
    repeat: 1,
    yoyo: true,
    duration: 1
};

container.forEach(function (item, index) {
    /*gsap.from("#" + item.firstChild.id, { opacity: 0, duration: 2, delay: mydelay, 
        y: -200, ease: "bounce" });*/


    //INITIALIZATION
    data.anim0.animEnded[index] = false;

    data.anim0.timeline[index] = new TimelineMax({
        onStart: function () {
            console.log('starting anim 0, index:' + index);
        },
        onComplete: function () {
            console.log('completed anim 0, index:' + index);
            data.anim0.animEnded[index] = true;
        },
    });

    data.anim0.timeline[index].from("#" + item.firstChild.id,
        {
            opacity: 0,
            duration: 2,
            y: -200, //x: 0,
            delay: mydelay,
            ease: "bounce",
        })
        .from("#" + item.childNodes[1].id,
        {
            opacity: 0,
            duration: 5,
            delay: mydelay-2,
        });

    mydelay += 0.1;

    //e = document.getElementById(item.firstChild.id);
    //e.innerHTML = item.icon;

    //console.log(""+iconsArray[c].text);



    ///****MOUSE OVER ANIMATION

    //----------------------INITIALIZATION
    data.anim1.animEnded[index] = false;
    //data.anim1.timeline[index] = null;
    data.anim1.mouseIn[index] = false;

    //TODO: Icons appear at the beginning if anim 1 is added.
    //CHECK!!!!
    data.anim1.timeline[index] = new TimelineMax({
        onStart: //animationMouseOverStart(index),
            function () {
                console.log('starting animation play:' + index);
                data.anim1.animEnded[index] = false;//Allow complete animation before reverse
            },
        onComplete: //animationMouseOverComplete(index)
            function () {
                console.log('anim 1 finished:' + index);
                data.anim0.animEnded[index] = true;
                if (data.anim1.mouseIn[index]) {
                    //data.anim1.timeline[index].restart();
                    //data.anim1.timeline[index].play();
                    console.log("animate, mouse is still IN");
                    if (data.anim1.timeline[index]) {
                        data.anim1.timeline[index].restart();
                    }
                }
            },
        paused: true,
    });

    //data.anim1.timeline[index].pause();
    data.anim1.timeline[index].fromTo("#" + item.firstChild.id,
        animation_start, animation);

    item.addEventListener("mouseover", function () {
        if (data.anim0.animEnded[index]) {
            console.log(`REQUEST to start ANIM 1, Icon ${index}`)
            if (data.anim1.timeline[index]) {
                data.anim1.timeline[index].restart();
                data.anim1.mouseIn[index] = true;
                data.anim0.animEnded[index] = false;
            }
        }
        else {
            console.log(`Icon ${index}, animation NOT ENDED YET`);
        }

        //console.log("mouse over:" + item.firstChild.id);
        //console.log("mouse over:" + this.id);
    });

    item.addEventListener("mouseout", function () {
        data.anim1.mouseIn[index] = false;
        /*if (data.anim0.animEnded[index]) {
            //iconsArray[index].timeline.reverse();
            //TODO: Return animation to initial state

            data.anim1.mouseIn[index] = false;
        }
        else {
            console.log(`Icon ${index}, animation NOT ENDED YET`)
        }*/
    });

    item.addEventListener("click", function () {
        //let c = (this.id).replace("icon", "");
        //console.log("c:" + c);
        //console.log("redirecting to:" + iconsArray[c].link);
        window.location.href = iconsArray[index].link;
        //console.log("mouse click: " + item.firstChild.id);
    });
    //c++;
});

//------Add mouse over and mouse out animations to grid elements

console.log("====================================");

