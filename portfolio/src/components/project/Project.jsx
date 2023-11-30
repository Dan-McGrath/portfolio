import PropTypes from 'prop-types';

const Project = ({ name, source, demo, img, description }) => {
  return (
    <div className="project">
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <div className="hover-text">
        <p>{description}</p>
      </div>
      <div className="links">
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
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string,
  source: PropTypes.string,
  demo: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
};

export default Project;
