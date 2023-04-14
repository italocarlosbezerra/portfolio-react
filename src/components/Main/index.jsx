import React from "react";
import "./styles.css";
import greetingSVG from "../../assets/greeting.svg";
import italoPhoto from "../../assets/italo_image.png";
import javascript from "../../assets/javascript.svg";
import html5 from "../../assets/html5.svg";
import css3 from "../../assets/css3.svg";
import mysql from "../../assets/mysql.svg";
import git from "../../assets/git.svg";
import nodejs from "../../assets/nodejs.svg";
import typescript from "../../assets/typescript.svg";
import reactIcon from "../../assets/react.svg";
import reactNative from "../../assets/react_native.svg";
import aws from "../../assets/amazon_aws.svg";
import bannerAcademy from "../../assets/banner_academy.png";
import bannerProgrammingCode from "../../assets/banner_pragramming_code.jpg";
import bannerLol from "../../assets/banner_lol.png";

function Main() {
   return (
      <main>
         <section className="intro">
            <div className="intro_text">
               <p>
                  Hi There,
                  <br />
                  I'm Italo Carlos
               </p>
            </div>
            <div className="intro_image">
               <img
                  src={greetingSVG}
                  alt="Greeting"
               />
            </div>
         </section>
         <section
            id="about"
            className="about"
         >
            <div className="about_title">
               <p>ABOUT ME</p>
            </div>
            <div className="about_content">
               <div className="about_image">
                  <img
                     src={italoPhoto}
                     alt="Italo's Photo"
                  />
               </div>
               <div className="about_text">
                  <p>I'm Italo</p>
                  <p>
                     I am a beginner programmer who is learning HTML, CSS and JavaScript to become proficient in these
                     technologies and then start solving real world problems with them.
                  </p>
                  <p>Technologies that I have experience:</p>
                  <p>
                     <span>
                        <img
                           src={javascript}
                           alt="JavaScript Icon"
                        />
                     </span>
                     <span>
                        <img
                           src={html5}
                           alt="HTML5 Icon"
                        />
                     </span>
                     <span>
                        <img
                           src={css3}
                           alt="CSS3 Icon"
                        />
                     </span>
                     <span>
                        <img
                           src={mysql}
                           alt="MySQL Icon"
                        />
                     </span>
                     <span>
                        <img
                           src={git}
                           alt="GIT Icon"
                        />
                     </span>
                     <span>
                        <img
                           src={nodejs}
                           alt="NodeJS Icon"
                        />
                     </span>
                  </p>
                  <p>Technologies that I have intend to study:</p>
                  <p>
                     <span>
                        <img
                           src={typescript}
                           alt="TypeScript Icon"
                        />
                     </span>
                     <span>
                        <img
                           src={reactIcon}
                           alt="React Icon"
                        />
                     </span>
                     <span>
                        <img
                           src={reactNative}
                           alt="React Native Icon"
                        />
                     </span>
                     <span>
                        <img
                           src={aws}
                           alt="AWS Icon"
                        />
                     </span>
                  </p>
               </div>
            </div>
         </section>
         <section
            id="projects"
            className="projects"
         >
            <div className="projects_title">
               <p>PROJECTS</p>
            </div>
            <div className="projects_box">
               <div className="boxes">
                  <a
                     href="https://github.com/italocarlosbezerra/comeia-atividade-02"
                     target="_blank"
                  >
                     <img
                        src={bannerAcademy}
                        alt="Projeto Github"
                     />
                  </a>
               </div>
               <div className="boxes">
                  <a
                     href="https://github.com/italocarlosbezerra/softreaming-api"
                     target="_blank"
                  >
                     <img
                        src={bannerProgrammingCode}
                        alt="Projeto Github"
                     />
                  </a>
               </div>
               <div className="boxes">
                  <a
                     href="https://github.com/italocarlosbezerra/leagueoflegends-champion-info"
                     target="_blank"
                  >
                     <img
                        src={bannerLol}
                        alt="Projeto Github"
                     />
                  </a>
               </div>
            </div>
         </section>
      </main>
   );
}

export default Main;
