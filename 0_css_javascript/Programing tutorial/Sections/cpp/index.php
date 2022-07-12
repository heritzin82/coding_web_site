<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/styles.css">

</head>

<body>
  <div class="main">
    <h1>c++</h1>
    <button onclick="window.location.href='../../'">HOME</button>
    <br>
    <br>
    <button id="fadeIn">Fade in</button>
    <button id="fadeOut">Fade out</button>

    <div>
      <progress value="5" id="prog_bar" max="100"></progress>
    </div>
  </div>


  <div class="sidenav">
    <!--  
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#clients">Clients</a>
    <a href="#contact">Contact</a>
    

    <button class="dropdown-btn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>

    <a href="#contact">Search</a>
      -->
  </div>


  <div class="main">
    <p>Some random text..</p>
    <p>PHP version TEST: </p>
    <p><?php echo phpversion(); ?> </p>
  </div>

  <div id="main" class="main">
    <h2>TEST</h2>
  </div>


  <!-- Link to GSAP -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>

  <!-- Link to JQUERY -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


  <!-- Load titles using ajax -->
  <script type="module" src="./js/ajax.js"></script>
  <script type="module" src="./js/menu.js"></script>
  <script type="module" src="./js/content.js"></script>
  <script type="module">

    import { updateMenu } from "./js/menu.js";
    const FILE_NAME =  /*window.location.href +*/ "./structure.json";

    //console.log("starting menu from:" + window.location.href);
    const params = new Map([
      ["menuContainer", "sidenav"],
      ["menuFileName", FILE_NAME],
      /*["contentContainer", "main"]*/
    ]);

    params.set("contentContainer", "main");
    /*const params = {
      menuContainer: "sidenav",
      menuFileName: FILE_NAME,
      contentContainer: "main"
    };*/

    //console.log(params.get("menuContainer"));
    //updateMenu("sidenav", FILE_NAME, "main");
    updateMenu(params);
  </script>

  </div>
</body>

</html>