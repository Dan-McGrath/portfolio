import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Project from '../project/Project';
import imgURL from '../../assets/images/projectTemplate.jpg';
import timeKiller from '../../assets/images/time-killer.png';
import arcanGaming from '../../assets/images/arcan-gaming.png';

const Projects = () => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    borderRadius: '20px',
    border: '1px solid black',
    background: '#4b536c',
  };

  const indicatorStyles = {
    background: 'hsl(120, 90%, 80%)',
    opacity: '50%',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const settings = {
    infiniteLoop: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    showThumbs: false,
  };
  const repoArray = [
    {
      name: 'Time Killer',
      source: 'https://github.com/Dan-McGrath/Time-Killer',
      demo: 'https://time-killer.netlify.app/',
      img: timeKiller,
    },
    {
      name: 'Arcan Gaming',
      source: 'https://github.com/Dan-McGrath/Shopping-Cart',
      demo: 'https://arcangaming.netlify.app/',
      img: arcanGaming,
    },
    {
      name: 'Memory Game',
      source: 'https://github.com/Dan-McGrath/memory-game',
      demo: 'https://dan-mcgrath.github.io/memory-game/',
      img: imgURL,
    },
    {
      name: 'To-do',
      source: 'https://github.com/Dan-McGrath/To-do',
      demo: 'https://dan-mcgrath.github.io/To-do/',
      img: imgURL,
    },
    {
      name: 'Weather App',
      source: 'https://github.com/Dan-McGrath/Weather-App',
      demo: 'https://dan-mcgrath.github.io/Weather-App/',
      img: imgURL,
    },
  ];

  const arrayItems = repoArray.map((ele) => (
    <Project
      key={ele.name}
      index={ele}
      name={ele.name}
      source={ele.source}
      demo={ele.demo}
      img={ele.img}
    />
  ));

  return (
    <section className="section projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="wrapper">
        <Carousel
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  style={{
                    ...indicatorStyles,
                    background: '#000',
                    opacity: '100%',
                  }}
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
          {...settings}
        >
          {arrayItems}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
