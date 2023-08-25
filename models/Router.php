<?php

class Router {

  private $viewsManager;

  function __construct(){
    $this->viewsManager = new ViewsManager();
  }

  function loadView($viewType){
    switch ($viewType) {

      case "home":
        $this->viewsManager->loadHome();
        break;

      case "login":
        $this->viewsManager->loadLogin();
        break;

      case "practica1":
        $this->viewsManager->loadPractica1();
        break;

      case "practica2":
        $this->viewsManager->loadPractica2();
        break;

      case "practica3":
        $this->viewsManager->loadPractica3();
        break;

      case "practica4":
        $this->viewsManager->loadPractica4();
        break;

      case "practica5":
        $this->viewsManager->loadPractica5();
        break;

      case "productos":
        $this->viewsManager->loadProductos();
        break;

      case "transacciones":
        $this->viewsManager->loadTransacciones();
        break;

      case "carrito":
        $this->viewsManager->loadCarrito();
        break;

      case "signup":
        $this->viewsManager->loadSignUp();
        break;
      
      default:
        $this->viewsManager->loadLogin();
        break;
    }
  }
}
?>
