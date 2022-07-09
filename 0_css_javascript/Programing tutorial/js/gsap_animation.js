//< !-- javascript animations using GSAP-- >

import { iconsArray } from './icons_def.js';


let timelinex = [];
console.log("****TODO: use timelinex var instead of iconsArray");
//TimelineMax({ anim_params });



//------Create HTML Elements based on icons array
let cc = document.getElementById("gridContainer");
let counter = 0;
iconsArray.forEach(function (item) {
    let buttonContainer = document.createElement("div");
    buttonContainer.className = "buttonContainer debug";

    let L2 = document.createElement("div");
    L2.id = "icon" + counter;

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
    textContainer.innerHTML = item.text;

    buttonContainer.append(textContainer);

    cc.appendChild(buttonContainer);

    counter++;
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
let c = 0;
const anim_params = { repeat: 0, repeatDelay: 0 };
const animation = { left: 100, opacity: 0, y: -20 };
const timeout = 2;

container.forEach(function (item) {
    gsap.from("#" + item.firstChild.id, { opacity: 0, duration: 2, delay: mydelay, y: -200, ease: "bounce" });
    mydelay += 0.1;

    //e = document.getElementById(item.firstChild.id);
    //e.innerHTML = item.icon;

    //console.log(""+iconsArray[c].text);
    
    iconsArray[c].timeline = gsap.to("#"+item.firstChild.id, timeout, animation);
    iconsArray[c].timeline.pause();

    /*iconsArray[c].timeline = new TimelineMax({ anim_params });
    iconsArray[c].timeline.to("#"+item.firstChild.id, timeout, animation);
    iconsArray[c].timeline.pause();*/

    let element = item.firstChild;

    element.addEventListener("mouseover", function () {
        //console.log(iconsArray[0].timeline);
        let c = (this.id).replace("icon", "");
        //console.log("c:" + c);
        iconsArray[c].timeline.play();
        
        //console.log("mouse over:" + item.firstChild.id);
        //console.log("mouse over:" + this.id);
    });

    element.addEventListener("mouseout", function () {
        let c = (this.id).replace("icon", "");
        //console.log("c:" + c);
        /*setTimeout(() => {
            t.reverse();
        }, 700);*/
        iconsArray[c].timeline.reverse();

    });

    element.addEventListener("click", function () {
        let c = (this.id).replace("icon", "");
        //console.log("c:" + c);
        //console.log("redirecting to:" + iconsArray[c].link);
        window.location.href = iconsArray[c].link;
        //console.log("mouse click: " + item.firstChild.id);
    });
    c++;
});

//------Add mouse over and mouse out animations to grid elements



console.log("====================================");





gsap.from('.text-h1', { opacity: 0, duration: 5, ease: "bounce" });

//Icons animations
//gsap.from('#icon1', { opacity: 0, duration: 2, delay: 0, y: -200, ease: "bounce" });
//gsap.from('#icon2', { opacity: 0, duration: 2, delay: 0.1, y: -200, ease: "bounce" });
//gsap.from('#icon3', { opacity: 0, duration: 2, delay: 0.2, y: -200, ease: "bounce" });

//----------------AUTOMATICALLY ADD ANIMATIONS BASED ON DOM icons
/*let animations = [];

let container = document.querySelectorAll("div.buttonContainer");
console.log("num childs:" + container.length);

let icon_count = 0;
//let mydelay = 0;
container.forEach(function (item) {
    //Initial animation
    item.firstChild.id = "icon" + icon_count;
    //console.log("item id:" + item.id);
    icon_count++;

    gsap.from("#" + item.firstChild.id, { opacity: 0, duration: 2, delay: mydelay, y: -200, ease: "bounce" });
    mydelay += 0.1;

    /*item.element = document.getElementById(item.icon.substring(1, item.icon.length));
    //item.element.innerHTML = item.icon;

    item.timeline = new TimelineMax({ anim_params });
    item.timeline.to(item.icon, timeout, animation);
    item.timeline.pause();

    item.element.addEventListener("mouseover", function () {
        item.timeline.play();
        //console.log("mouse over" + item.icon);
    });

    item.element.addEventListener("mouseout", function () {
        item.timeline.reverse();
        //console.log("mouse out" + item.icon);
    });

    item.element.parentNode.addEventListener("click", function () {
        window.location.href = item.path;
        //console.log("mouse out" + item.icon);
    });
});*/























//Common animation parameters
/*const timeout = 1;
const anim_params = { repeat: 0, repeatDelay: 0 };
const animation = { left: 100, opacity: 0, y: -20 };
let icons = [
    {
        icon: "#icon1",
        element: Object(),
        timeline: undefined,
        path: "cpp/index.html",
    },
    {
        icon: "#icon2",
        element: Object(),
        timeline: undefined,
        path: "cpp/index.html",
    },
    {
        icon: "#icon3",
        element: Object(),
        timeline: undefined,
        path: "cpp/index.html",
    },
    {
        icon: "#icon4",
        element: Object(),
        timeline: undefined,
        path: "cpp/index.html",
    },
];


let mydelay = 0;
icons.forEach(function (item) {
    //Initial animation

    gsap.from(item.icon, { opacity: 0, duration: 2, delay: mydelay, y: -200, ease: "bounce" });
    mydelay += 0.1;

    item.element = document.getElementById(item.icon.substring(1, item.icon.length));
    //item.element.innerHTML = item.icon;

    item.timeline = new TimelineMax({ anim_params });
    item.timeline.to(item.icon, timeout, animation);
    item.timeline.pause();

    item.element.addEventListener("mouseover", function () {
        item.timeline.play();
        //console.log("mouse over" + item.icon);
    });

    item.element.addEventListener("mouseout", function () {
        item.timeline.reverse();
        //console.log("mouse out" + item.icon);
    });

    item.element.parentNode.addEventListener("click", function () {
        window.location.href = item.path;
        //console.log("mouse out" + item.icon);
    });
});*/



/*//ICON 1
icon1 = document.getElementById("icon1");
var t1 = new TimelineMax({ anim_params });
t1.to("#icon1", timeout, { left: 100, opacity: 0 });
t1.pause();

icon1.addEventListener("mouseover", function () {
    t1.play();
});

icon1.addEventListener("mouseout", function () {
    t1.reverse();
});

//ICON 2
icon2 = document.getElementById("icon2");
var t2 = new TimelineMax({ anim_params });
t2.to("#icon2", timeout, { left: 100, opacity: 0 });
t2.pause();

icon2.addEventListener("mouseover", function () {
    t2.play();
});

icon2.addEventListener("mouseout", function () {
    t2.reverse();
});

//ICON 3
icon3 = document.getElementById("icon3");
var t3 = new TimelineMax({ anim_params });
t3.to("#icon3", timeout, { left: 100, opacity: 0 });
t3.pause();

icon3.addEventListener("mouseover", function () {
    t3.play();
});

icon3.addEventListener("mouseout", function () {
    t3.reverse();
});*/

