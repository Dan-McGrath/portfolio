import Project from '../project/Project';
import imgURL from '../../assets/images/projectTemplate.jpg';
import timeKiller from '../../assets/images/time-killer.png';
import arcanGaming from '../../assets/images/arcan-gaming.png';

const Projects = () => {
  const repoArray = [
    {
      name: 'Time Killer',
      source: 'https://github.com/Dan-McGrath/Time-Killer',
      demo: 'https://time-killer.netlify.app/',
      img: timeKiller,
      description:
        'This is an app built fully in react. The purpose of this was to gain experience and test my knowledge using react. It has 4 differnet playable games to choose from.',
    },
    {
      name: 'Arcan Gaming',
      source: 'https://github.com/Dan-McGrath/Shopping-Cart',
      demo: 'https://arcangaming.netlify.app/',
      img: arcanGaming,
      description:
        'This is an app built fully in react. The purpose of this was to gain experience and test my knowledge with using a 3rd party API. I decided to build an e-commerce store to buy games.',
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
  ];

  const arrayItems = repoArray.map((ele) => (
    <Project
      key={ele.name}
      index={ele}
      name={ele.name}
      source={ele.source}
      demo={ele.demo}
      img={ele.img}
      description={ele.description}
    />
  ));

  return (
    <section className="section projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="wrapper">{arrayItems}</div>
    </section>
  );
};

export default Projects;
