<?php

class ViewsManager
{

  private $head;
  private $fileName;

  function __construct()
  {
    $this->head = new Head();
  }

  function setFileName($fileName) {

    $this->fileName = $fileName;
    if($fileName == "login.php") {
      $this->generateOutsideBody();
    } else if($fileName == "home.php"){
      $this->generateInsideBody();
    }

  }

  function generateOutsideBody(){
    echo '<body style="background: linear-gradient(#212121, #212121);
    width: 100vw;
    height: 100vh;">';
    echo '<div class="container">';
    echo '<div class="row">';
    echo '<div id="main_container" class="col s12">';
    include './views/' . $this->fileName;
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '</body>';
    echo '</html>';
  }

  function generateInsideBody() {
    echo '<body style="background-color: #000000;">';
    echo '<header>';
    include './views/navbar.php';
    echo '</header>';
    echo '<main style="background-color: #000000; ">';
    echo '<div class="container">';
    echo '<div id="main_container" class="col s12">';
    include './views/' . $this->fileName;
    echo '</div>';
    echo '</div>';
    echo '</main>';
    include './views/footer.php';
    echo '</body>';
    echo '</html>';
  }

  function loadLogin(){
    $this->head->setTitle("Login");
    $this->setFileName("login.php");
  }

  function loadHome(){
    $this->head->setTitle("Home");
    $this->setFileName("home.php");
  }

}
?>
