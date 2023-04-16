import React, { useState } from "react";
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

import ProjectCards from "../ProjectCards";
import projects from "./Projects.json";

function Main() {
   const [nameValue, setNameValue] = useState("");
   const [emailValue, setEmailValue] = useState("");
   const [phoneValue, setPhoneValue] = useState("");
   const [messageValue, setMessageValue] = useState("");

   function validateForm() {
      if (nameValue && emailValue && phoneValue && messageValue) {
         sendToWhatsapp(nameValue, emailValue, phoneValue, messageValue);
      }
   }

   function sendToWhatsapp(name, email, phone, message) {
      const text = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;
      const textCodified = encodeURIComponent(text);
      const whatsappNumber = "5581996158913";
      const url = `https://wa.me/${whatsappNumber}?text=${textCodified}`;

      window.open(url, "_blank");
   }

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
               {projects.map((project, index) => (
                  <ProjectCards
                     key={index}
                     link={project.link}
                     image={project.image + (index + 1)}
                  ></ProjectCards>
               ))}
            </div>
         </section>

         <section
            id="contact"
            className="contact"
         >
            <div className="contact_title">
               <p>CONTACT</p>
            </div>
            <div className="contact_content">
               <div className="linkedin-wrapper">
                  <a
                     href="https://www.linkedin.com/in/italocarlosbezerra/"
                     target="_blank"
                  >
                     LinkedIn
                  </a>
               </div>
               <div className="linkedin-wrapper">
                  <a
                     href="https://github.com/italocarlosbezerra"
                     target="_blank"
                  >
                     Github
                  </a>
               </div>
            </div>
            <form onSubmit={validateForm}>
               <label>Nome</label>
               <input
                  type="text"
                  id="f-name"
                  placeholder="Informe o seu nome"
                  minLength="3"
                  maxLength="12"
                  required
                  value={nameValue}
                  onChange={event => setNameValue(event.target.value)}
               />

               <label>Email</label>
               <input
                  type="email"
                  id="f-email"
                  placeholder="exemplo@exemplo.com.br"
                  required
                  value={emailValue}
                  onChange={event => setEmailValue(event.target.value)}
               />

               <label>Telefone</label>
               <input
                  type="tel"
                  id="f-phone"
                  placeholder="(81) 9 9999-9999"
                  minLength="11"
                  maxLength="11"
                  required
                  value={phoneValue}
                  onChange={event => setPhoneValue(event.target.value)}
               />

               <label>Mensagem</label>
               <textarea
                  id="f-message"
                  cols="30"
                  rows="10"
                  placeholder="Digite sua mensagem"
                  required
                  value={messageValue}
                  onChange={event => setMessageValue(event.target.value)}
               ></textarea>

               <input
                  type="submit"
                  id="f-button"
                  value="Enviar"
               />
            </form>
         </section>
      </main>
   );
}

export default Main;
