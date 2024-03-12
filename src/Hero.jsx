import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Hero() {
  return (
    <>
      <div className="main">
        <img className="dp" src="./img3.jpg" alt="" />
        <h2>Phurailatpam Girish</h2>
        <h3>Bangalore, India</h3>
        <p className="bio">
          "Student with a passion for Front-End Development"
        </p>

        <Socials
          icon={<FontAwesomeIcon icon={faLinkedin} className="custom-icon" />}
          link="https://www.linkedin.com/in/phurailatpam-girish/"
          social="LinkdIn"
        />

        <Socials
          icon={<FontAwesomeIcon icon={faGithub} className="custom-icon" />}
          link="https://github.com/"
          social="GitHub"
        />

        <Socials
          icon={<FontAwesomeIcon icon={faFacebook} className="custom-icon" />}
          link="https://www.facebook.com/girish.sharma.90038882"
          social="Facebook"
        />
        <Socials
          icon={<FontAwesomeIcon icon={faInstagram} className="custom-icon" />}
          link="https://www.instagram.com/girishph___/"
          social="Instagram"
        />
        <Socials
          icon={<FontAwesomeIcon icon={faEnvelope} className="custom-icon" />}
          link="mailto: girishph8@gmail.com "
          social="Gmail"
        />
      </div>
    </>
  );
}
