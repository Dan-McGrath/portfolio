import resume from '../../assets/images/resume.pdf';

const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="hero__text">
        <h1 className="name">Dan McGrath</h1>
        <p>
          <span>#</span>Full-Stack Developer
        </p>
      </div>
      <div className="cta">
        <a href={resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
      <div className="social">
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/dan-mcgrath/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://github.com/Dan-McGrath"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
