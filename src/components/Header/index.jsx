import React from "react";
import "./styles.css";

function Header() {
   return (
      <header>
         <div className="logo">
            <p>ITALOCARLOSBEZERRA</p>
         </div>
         <nav>
            <a href="#">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
         </nav>
      </header>
   );
}

export default Header;
