
/****************** 
 * EXPORTED FUNCTIONS 
 * ****************/


function AJAXgetData(fileName, containerLabel, successCallback, failCallback) {
    let ret_val = "";
    console.log("Make AJAX request for file: " + fileName);
    let ajax = new XMLHttpRequest();

    if (fileName) {

        ajax.onreadystatechange = function () {
            //console.log("state:" + this.readyState + ", status:" + this.status);
            if (this.readyState == 2 && this.status == 200) {
                // Download is being started
            }
            else if (this.readyState == 3) {
                // Download is under progress
            }
            else if (this.readyState == 4) {
                // Downloaing has finished

                if (200 == this.status) {
                    //File received succesfully
                    //console.log("File downloaded");
                    //console.log(this.responseText);
                    successCallback(containerLabel, this.responseText);
                    //return this.responseText;
                }
                else if (404 == this.status) {
                    //File NOT FOUND
                    //return  "file not found";
                    console.log(`File "${fileName}" not found`);
                    failCallback(containerLabel);
                }
            }
        }
    }
    else {
        console.log("ERROR: empty file name");
    };

    ajax.onload = function () {
        //console.log("Received: \n\n" + this.responseText);
    }

    ajax.addEventListener("progress", function (e) {
        let progress = (e.loaded / e.total) * 100;
        /*console.log("progress... " + progress + "\n" +
            "loaded:" + e.loaded + "\n" +
            "total:" + e.total);*/

        /*let p = document.getElementById("prog_bar")
            p.value = progress;*/
    });


    //

    //POST
    /*ajax.open("POST", name);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send("param1=1&param2=2");*/

    //GET
    let params = "" /*"?param1=hola"*/;
    ajax.open("GET", fileName + params);
    ajax.send();
}


export { AJAXgetData };
