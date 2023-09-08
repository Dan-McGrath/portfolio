import PropTypes from 'prop-types';
import imgURL from '../../assets/images/projectTemplate.jpg';

const Project = ({ name, source, demo }) => {
  return (
    <div className="project">
      <h3>{name}</h3>
      <img src={imgURL} />
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

Project.propTypes = {
  name: PropTypes.string,
  source: PropTypes.string,
  demo: PropTypes.string,
};

export default Project;
