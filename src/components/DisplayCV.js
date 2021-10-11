import React from "react";
import faker from "faker";
import GeneralInformation from "./GeneralInformation";
import "./DisplayCV.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const DisplayCV = ({ onDisplay }) => {
  return (
    <div className="display">
      <div className="top-section">
        <img className="profile" src={faker.image.avatar()} alt="profile" />
        <h1 className="p1">
          {onDisplay.firstname} <span>{onDisplay.lastname} </span>
        </h1>
        <p className="p2">Full Stack Javascript Developer</p>
      </div>
      <div className="clearfix"></div>
      <div className="col-div-4">
        <div className="content-box" style={{ paddingLeft: "40px" }}>
          <p className="head">Contact</p>
          <p className="p3">
            <FontAwesomeIcon color="black" icon={faPhoneAlt}></FontAwesomeIcon>
            &nbsp;&nbsp;&nbsp;{onDisplay.number}
          </p>
          <p className="p3">
            <FontAwesomeIcon color="black" icon={faEnvelope}></FontAwesomeIcon>
            &nbsp;&nbsp;&nbsp;{onDisplay.email}
          </p>
          <p className="p3">
            <FontAwesomeIcon color="black" icon={faHome}></FontAwesomeIcon>
            &nbsp;&nbsp;&nbsp;{onDisplay.address}
          </p>{" "}
          <br />
          <p className="head">My Skills</p>
          <ul className="skills">
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>React JS</span>
            </li>
            <li>
              <span>Github</span>
            </li>
          </ul>
          <br />
          <p className="head head2">Hobby / Interest</p>
          <p className="p3">Reading Books & Novels</p>
          <p className="p3">Singing at karaoke's</p>
          <p className="p3">Coding to gain mastery</p>
          <p className="p3">Watching Anime & Netflix</p>
          <br />
          <p className="head head2">Languages</p>
          <p className="p3">English</p>
          <p className="p3">Tagalog</p>
          <p className="p3">Bisaya</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="col-div-8">
        <div className="content-box">
          <p className="head">Profile</p>
          <p className="p3" style={{ fontSize: "14px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            corporis odit ab similique illum sapiente deleniti! Accusamus odit
            aspernatur sequi dignissimos eligendi doloribus?
            <br />
            Iste quam modi cum impedit, eaque voluptatem!
          </p>
          <br />
          <p className="head">Experience</p>
          <p>UI DESIGNER IN LOREM IPSUM (2018 - NOW)</p>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste
            facilis excepturi voluptatibus minus accusamus illo delectus labore
            quidem assumenda.
          </p>
          <p>UI DESIGNER (2013 - 2015)</p>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste
            facilis excepturi voluptatibus minus accusamus illo delectus labore
            quidem assumenda.
          </p>
          <p>GRAPIC DESIGNER(2010))</p>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste
            facilis excepturi voluptatibus minus accusamus illo delectus labore
            quidem assumenda.
          </p>
          <br />
          <p className="head">Education</p>
          <p className="p-4">HIGH SCHOOL OF CBSE (2009 - 2010)</p>
          <p className="p-4">BACHELOR OF COMPUTER APPLICATION (2013 - 2015)</p>
          <p className="p-4">MASTER OF COMPUTER APPLICATION (2015 - 2018)</p>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default DisplayCV;
