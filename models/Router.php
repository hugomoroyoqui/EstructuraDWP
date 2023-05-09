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
      
      default:
        $this->viewsManager->loadLogin();
        break;
    }
  }
}
?>
