import React from "react";
import icon from '../images/icon2.jpg'

function Footer() {
  return (
    <footer>
      <img src={icon} className="icon-img"></img>
      <div className="author-container">
        <div className="author-rights">All rights reserved. This page was created by AlexAI's squad.</div>
      </div>
      <img src={icon} className="icon-img"></img>
    </footer>
  )
}

export default Footer;