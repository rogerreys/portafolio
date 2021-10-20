'use strict'
$(document).ready(function(){
    var html = `
    <ul class="nav nav-tabs">
        <li id="acronimo" class="nav-item">
            <a class="nav-link active" href="#">Rys</a>
        </li>
        
        <li class="nav-item dropdown ml-md-auto">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">
                <img class="menu-logo" alt="menu" src="assets/img/menu.png">
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a class="letterMenu dropdown-item" href="#aboutMe">Sobre me</a> 
                    <a class="letterMenu dropdown-item" href="#experience">Proyectos</a> 
                    <a class="letterMenu dropdown-item" href="#contact">Contactos</a>
            <div class="dropdown-divider">
            </div> 
                <a class="letterMenu dropdown-item" href="#">Editar</a>
            </div>
        </li>
    </ul>
    `
    $("#menu").append(html);
});