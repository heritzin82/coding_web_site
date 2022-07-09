import { AJAXgetData } from "./ajax.js"
import { ProcessMenuLink } from "./content.js"

export let updateMenuParams = "";

//const FILE_NAME = "./structure.json";

/****************** 
   * EXPORTED FUNCTIONS 
   * ****************/
function updateMenu(param) {
  //Params
  let menuContainer = param.get("menuContainer");
  let menuFileName = param.get("menuFileName");
  let contentContainer = param.get("contentContainer");

  updateMenuParams = param;

  //function updateMenu(label, file, main) {
  console.log(`updating content 
    menuContainer: ${menuContainer}
    menuFileName: ${menuFileName}
    contentContainer: ${contentContainer}`);
  let d = document.querySelector("div." + menuContainer);

  if (d) {
    AJAXgetData(menuFileName, menuContainer, updateMenuOK, updateMenuFAIL);
  }
  else {
    console.log(`ERROR: label "${param.label}" not found`);
  }
}

function addDropDownButtonFunctionality(dropdownElements) {

  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  //var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  //console.log("----drop-down button length:" + dropdownElements.length);

  for (i = 0; i < dropdownElements.length; i++) {
    dropdownElements[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}


/****************** 
 * LOCAL FUNCTIONS 
 * ****************/


function addDropDownButton(container, element) {
  /* <button class="dropdown-btn">Dropdown
         <i class="fa fa-caret-down"></i>
     </button>    */
  let b = document.createElement("button");
  b.className = "dropdown-btn";
  b.innerHTML = element.name;

  let i = document.createElement("i");
  i.className = "fa fa-caret-down";
  b.append(i);

  container.append(b);
}


function addLink(container, element) {
  /* 
     <a href="#">Link 2</a>
  */
  let a = document.createElement("a");

  a.innerHTML = element.name;
  a.href = element.url;
  //a.href = "javascript:void(0);"; //Removes click link
  
  addLinkListener(a);
  /*a.onclick = function (event) {
    event.preventDefault();
    let contentContainer = updateMenuParams.get("contentContainer");

    //ProcessMenuLink(element.url, contentContainer);
    ProcessMenuLink(this.href, contentContainer);
  };*/
  container.append(a);
}


function updateMenuOK(label, json) {
  let d = document.querySelector("div." + label);
  console.log("UPDATE OK");

  //console.log(json);

  let myArray = JSON.parse(json);
  console.log("-----------");
  //console.log("json:" + json);
  // console.log("length titles:" + myArray.titles.length);

  console.log("-----------");

  myArray.titles.forEach((element, index) => {
    //console.log("title " + index + ":" + element.name);
    if (element.submenu) {
      addDropDownButton(d, element);

      /*  
        <div class="dropdown-container">
           <a href="#">Link 1</a>
           <a href="#">Link 2</a>
        </div>              */

      let div = document.createElement("div");
      div.className = "dropdown-container";
      //div.style.display = "none";

      element.submenu.forEach((elementt, indexx) => {
        //console.log("    index: " + indexx + ", submenu:", elementt.url);
        let ah = document.createElement("a");

        addLinkListener(ah);

        ah.innerHTML = elementt.name;
        ah.href = elementt.url;
        div.append(ah);
      });
      d.append(div);
      //console.log(div);
    }
    else {
      addLink(d, element);
    }
  });

  /*var dropdown = document.getElementsByClassName("dropdown-btn");
  console.log("**********drop-down button length:" + dropdown.length);*/

  var dropdown = document.getElementsByClassName("dropdown-btn");
  addDropDownButtonFunctionality(dropdown);
}

function addLinkListener(a) {
  a.onclick = function (event) {
    event.preventDefault();
    let contentContainer = updateMenuParams.get("contentContainer");

    //ProcessMenuLink(element.url, contentContainer);
    ProcessMenuLink(this.href, contentContainer);
  }
}

function updateMenuFAIL(label) {
  let d = document.querySelector("div." + label);
  console.log("UPDATE FAIL");

  let e = document.createElement("a");
  //e.href = "";
  e.innerHTML = "**File Not Found**";
  d.append(e);
}


export { addDropDownButtonFunctionality, updateMenu };