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
    } else if($fileName == "home.php" 
    || $fileName == "practica1.php"
    || $fileName == "practica2.php"
    || $fileName == "practica3.php"
    || $fileName == "practica4.php"
    || $fileName == "practica5.php"
    || $fileName == "transacciones.php"
    || $fileName == "productos.php"
    || $fileName == "carrito.php"){
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
    echo '<body style="background-color: #fff8e1;">';
    echo '<header>';
    include './views/navbar.php';
    echo '</header>';
    echo '<main style="background-color: #fff8e1; ">';
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

  function loadPractica1(){
    $this->head->setTitle("Practica 1");
    $this->setFileName("practica1.php");
  }


  function loadPractica2(){
    $this->head->setTitle("Practica 2");
    $this->setFileName("practica2.php");
  }
 
  function loadPractica3(){
    $this->head->setTitle("Practica 3");
    $this->setFileName("practica3.php");
  }
  
  function loadPractica4(){
    $this->head->setTitle("Practica 4");
    $this->setFileName("practica4.php");
  }
 
  function loadPractica5(){
    $this->head->setTitle("Practica 5");
    $this->setFileName("practica5.php");
  }

  function loadProductos(){
    $this->head->setTitle("Productos");
    $this->setFileName("productos.php");
  }

  function loadTransacciones(){
    $this->head->setTitle("Transacciones");
    $this->setFileName("transacciones.php");
  }

  function loadCarrito(){
    $this->head->setTitle("Carrito");
    $this->setFileName("carrito.php");
  }

}
?>
