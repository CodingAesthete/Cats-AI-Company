import React from "react";
import cats from '../images/cats.png'

function Header() {
  return (
    <header>
      <nav>
        <div className="title-details">
          <img src={cats} className="logo-img"></img>
          <h1>AlexAI's Cats</h1>
          <img src={cats} className="logo-img"></img>
        </div>
      </nav>
    </header>
  )
}

export default Header;