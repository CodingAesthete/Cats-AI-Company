import React from "react";
import filcho from '../images/kitten1.jpg'
import stanio from '../images/kitten2.jpg'
import monio from '../images/kitten3.jpg'
import email from '../images/email.webp'
import linkedin from '../images/linkedin.webp'

function MainContent() {
  return (
    <div className="body-el">

      <div className="cat-container">
        <div className="cat-info">
          <div className="content">
            <img src={filcho} className="cat-img"></img>
            <div className="cat-name">Heinz Oberhof</div>
            <div className="job">CEO</div>
            <div className="location">Varna, Bulgaria</div>
            <div className="contacts-container">
              <div className="email-container">
                <img src={email} className="social-icon"></img>
                <div> Email</div>
              </div>
              <div className="linkedin-container">
                <img src={linkedin} className="social-icon"></img>
                <div> LinkedIn</div>
              </div>
            </div>
            <div className="description">
            As founder and CEO of global software design and development firm, Heinz has steered the company’s vision from inception to over 1,000 full-time employees.
            </div>
          </div>
        </div>
      </div>

      <div className="cat-container">
        <div className="cat-info">
          <div className="content">
            <img src={stanio} className="cat-img"></img>
            <div className="cat-name">Severin Freitag</div>
            <div className="job">President</div>
            <div className="location">Plovdiv, Bulgaria</div>
            <div className="contacts-container">
              <div className="email-container">
                <img src={email} className="social-icon"></img>
                <div> Email</div>
              </div>
              <div className="linkedin-container">
                <img src={linkedin} className="social-icon"></img>
                <div> LinkedIn</div>
              </div>
            </div>
            <div className="description">
            Severin demystifies the technologies that help businesses go faster, wielding an emphasis on memorable, measurable and extensible experiences. 
            </div>
          </div>
        </div>
      </div>

      <div className="cat-container">
        <div className="cat-info">
          <div className="content">
            <img src={monio} className="cat-img"></img>
            <div className="cat-name">Ludwig Käse</div>
            <div className="job">Chief Strategy Officer</div>
            <div className="location">Dobrich, Bulgaria</div>
            <div className="contacts-container">
              <div className="email-container">
                <img src={email} className="social-icon"></img>
                <div> Email</div>
              </div>
              <div className="linkedin-container">
                <img src={linkedin} className="social-icon"></img>
                <div> LinkedIn</div>
              </div>
            </div>
            <div className="description">
            As VP of Enterprise Solutions, Ludwig brings a wealth of experience defining and executing strategy both at scale and at the start-up level. A hard-working employee.
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainContent;