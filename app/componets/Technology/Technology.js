import "./technology.css";
import { FaReact } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import {BsMenuButtonWideFill} from "react-icons/bs"
 

const Technology = () => {
  return (
    <div className="technology section" id="technology">
      <div data-aos="fade-right" data-aos-duration = "2000" className="titleAfter"></div>
      <h1 data-aos="fade-right" data-aos-duration = "2000" className="title">Technology</h1>
      <p data-aos="fade-right" data-aos-duration = "2500" className="titleDetails">
        Worked with a lot of different types of Technologies in projects. From
        Front-End to Back-End
      </p>
      <div data-aos="fade-up" data-aos-duration = "3000" className="technologyContainer">
        <div className="techBox">
          <FaReact  />
          <h4>Front-End</h4>
          <p>
            Experience with <br />
            React.js, Next.js, HTML5, CSS3
          </p>
        </div>
        <div className="techBox">
          <BiLogoFirebase />
          <h4>Back-End</h4>
          <p>
            Experience with <br />
            Firebase
          </p>
        </div>
        <div className="techBox">
          <BsMenuButtonWideFill />
          <h4>Deployment</h4>
          <p>
            Experience with <br />
            Heroku, Netlify, Vercel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
