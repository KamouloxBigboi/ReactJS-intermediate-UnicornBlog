import React from "react";


// Créer une fonction qui renvoie la NavBar sur la page principale de l'app : logo + lien Upload + lien Gallery

const Navbar = () => { 
    return (
        <div>
            <nav class="navbar">
                <a class="navbar-logo" href="#">
                    <img src="/home/matrice-ecole/Documents/ReactJS-intermediate-UnicornBlog/UnicornBlog/src/logo.jpeg" width="30" height="30" class="d-inline-block align-top" alt="Logo Matrice"></img>
                </a>
                    My Unicorn Blog 
                <a class="navbar-upload-link" href={Upload}> Upload </a>
                <a class="navbar-gallery-link" href={Gallery}> Gallery </a>

            </nav>
        </div>
    )
}

export default Navbar;