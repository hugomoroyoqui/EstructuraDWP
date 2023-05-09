<?php /**
* class
*/
class Head {
  // Globar parameters
  public $root = 'http://localhost/EstructuraDWP'; //Uncomment for local development
  public $title = "APP";
  // Constructor takes "title" as parameter
  function __construct()
  {
  }
  function setTitle($title) {
    $this->title = $title;
    $this->build();
  }
  function build() {
    if (session_status() == PHP_SESSION_NONE) session_start();
    $headCode = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <!-- Website configuration -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Last-Modified" content="0">
    <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
    <meta http-equiv="Pragma" content="no-cache">
    
    <!-- External libraries -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" crossorigin="anonymous"></script>

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
    <!-- Firebase libraries -->
    <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-auth.js"></script>


    <!-- Local libraries | Title -->
    <title>' . $this->title . '</title>
    <link href="' . $this->root . '/res/css/main.css" rel="stylesheet" type="text/css" media="all"/>
    <script src="' . $this->root . '/scripts/firebase_init.js"></script>
    <script src="' . $this->root . '/classes/FirebaseCollections.js"></script>
    <script src="' . $this->root . '/classes/APISchemas.js"></script>
    <script src="' . $this->root . '/res/assets/canvasjs.min.js"></script>
    <script src="' . $this->root . '/res/assets/jquery.canvasjs.min.js"></script>


    </head>
    ';
    echo $headCode;

  }
}
?>
