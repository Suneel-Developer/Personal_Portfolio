import "./About.css";
const About = () => {
  return (
    <div className="aboutContainer section" id="about">
      <div data-aos="fade-right" data-aos-duration = "2000" className="titleAfter"></div>
      <h1 data-aos="fade-right" data-aos-duration = "2500" className="title">About Me</h1>
      <p data-aos="fade-right" data-aos-duration = "3000" className="titleDetails">
        Hello, <br />
        My name is Suneel Kumar, I'm a Pakistan Based Front end Developer,
        Working as a Freelance Front end Developer on Fiverr.
      </p>
      <div data-aos="fade-up" data-aos-duration = "3000" className="aboutBox">
        <div className="box">
          <h4>2021</h4>
          <p>Started my journey</p>
        </div>
        <div className="box">
          <h4>2022</h4>
          <p>Complete Learning Front-end</p>
        </div>
        <div className="box">
          <h4>2022</h4>
          <p>Worked as a freelancer</p>
        </div>
        <div className="box">
          <h4>2023</h4>
          <p>Started Learning Back-end</p>
        </div>
        <div className="box">
          <h4>2023</h4>
          <p>Complete 30+ projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
