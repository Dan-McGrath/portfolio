const Project = ({ name, source, demo }) => {
  return (
    <div className="project">
      <h3>{name}</h3>
      <img src="../src/assets/images/projectTemplate.jpg" />
      <div className="hover-text">
        <p>Description</p>
      </div>

      <a
        title="Source Code"
        href={source}
        target="_blank"
        className="icon"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        title="Live Demo"
        href={demo}
        target="_blank"
        className="icon"
        rel="noreferrer"
      >
        <i className="fa-solid fa-desktop"></i>
      </a>
    </div>
  );
};

export default Project;
