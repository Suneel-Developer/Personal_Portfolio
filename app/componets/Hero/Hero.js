import "./Hero.css"

const Hero = () => {
  return (
    <div className="heroContainer flex section">
      <h1 data-aos="fade-right" data-aos-duration = "2000" className="heroHeading">Welcome to</h1>
      <h1 data-aos="fade-right" data-aos-duration = "2000" className="heroHeading">My Personal Portfolio</h1>
      <p data-aos="fade-right" data-aos-duration = "2000" className="heroDetails">
        Focused and quick learning web app development tools with more than 1
        years of experience in programming and development a various projects
      </p>
      <a data-aos="fade-right" data-aos-duration = "2000" href="https://cv-responsive-suneel.netlify.app/" target="_blank" className="btn flex">View Resume </a> 
    </div>
  );
};

export default Hero;
