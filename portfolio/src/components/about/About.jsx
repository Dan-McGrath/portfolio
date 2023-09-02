const About = () => {
  return (
    <section className="section about" id="about">
      <div className="about__text">
        <h1 className="title">About Me</h1>
        <p>
          Hello, I'm <span>Dan McGrath</span>! I'm a self-taught, Full-Stack
          Devoloper. My focus is on creating responsive web designs, using the
          MERN tech stack!
        </p>
      </div>

      <div className="techstack-container">
        <div className="knowledge-level">
          <h2>Master</h2>
          <div className="stackitems-container grid">
            <div className="grid__items">
              <i className="fa-brands fa-square-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="grid__items">
              <i className="fa-brands fa-html5"></i>
              <p>HTML5</p>
            </div>
            <div className="grid__items">
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className="knowledge-level">
          <h2>Junior</h2>
          <div className="stackitems-container grid">
            <div className="grid__items">
              <i className="fa-brands fa-python"></i>
              <p>Python</p>
            </div>
            <div className="grid__items">
              <i className="fa-brands fa-figma"></i>
              <p>Figma</p>
            </div>
            <div className="grid__items">
              <i className="fa-brands fa-react"></i>
              <p>React</p>
            </div>
            <div className="grid__items">
              <i className="fa-brands fa-sass"></i>
              <p>SASS</p>
            </div>
          </div>
        </div>
        <div className="knowledge-level">
          <h2>Apprentice</h2>
          <div className="stackitems-container grid">
            <div className="grid__items">
              <i className="fa-brands fa-node"></i>
              <p>Node.js</p>
            </div>
            <div className="grid__items">
              <i className="fa-brands fa-aws"></i>
              <p>Amazon Web Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
