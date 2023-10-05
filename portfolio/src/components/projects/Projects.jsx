import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Project from '../project/Project';
import imgURL from '../../assets/images/projectTemplate.jpg';
import timeKiller from '../../assets/images/time-killer.png';

const Projects = () => {
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
      name: 'Rock-Paper-Scissors',
      source: 'https://github.com/Dan-McGrath/Rock-Paper-Scissors',
      demo: 'https://dan-mcgrath.github.io/Rock-Paper-Scissors/',
      img: imgURL,
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
        <Carousel {...settings}>{arrayItems}</Carousel>
      </div>
    </section>
  );
};

export default Projects;
