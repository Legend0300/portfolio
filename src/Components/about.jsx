import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faRobot, faBrain } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % 3);
    }, 6000); // Change the timeout to 6 seconds

    return () => clearTimeout(timer);
  }, [currentCard]);

  const cards = [
    {
      title: 'Professional Expertise',
      icon: faLaptopCode,
      content: (
        <>
          <p className="mb-3">
            As a Full Stack Developer, I specialize in the end-to-end development of web applications, from designing
            intuitive user interfaces to implementing scalable backend solutions.
          </p>
          <p>
            My proficiency extends to using
            <FontAwesomeIcon icon={faJs} className="ml-2 mr-1 text-yellow-400" />JavaScript,
            <FontAwesomeIcon icon={faPython} className="ml-1 mr-1 text-blue-500" />Python, and
            <FontAwesomeIcon icon={faReact} className="ml-1 mr-1 text-teal-400" />React, along with frameworks such as
            Express JS and Flask.
          </p>
          <p>
            I am adept at creating dynamic and responsive applications, incorporating technologies like Material UI and
            Tailwind CSS for visually appealing designs.
          </p>
        </>
      ),
    },
    {
      title: 'Passion for Machine Learning',
      icon: faBrain,
      content: (
        <>
          <p className="mb-3">
            Beyond web development, I have a strong passion for exploring the realms of Machine Learning and AI. I have
            hands-on experience in Deep Learning, Scikit-Learn, Tensorflow, and have integrated the Open AI API into
            projects.
          </p>
          <p>
            This intersection of software development and artificial intelligence allows me to contribute to
            cutting-edge solutions in a rapidly evolving technological landscape.
          </p>
        </>
      ),
    },
    {
        title: 'MERN Stack and Node.js',
        icon: faNodeJs,
        content: (
          <>
            <p className="mb-3">
              Proficient in the MERN (MongoDB, Express.js, React, Node.js) stack for building full-stack web applications.
            </p>
            <p>
              Additionally, experienced in server-side JavaScript programming with Node.js, enabling the development of scalable and efficient server applications.
            </p>
          </>
        ),
      },
    {
      title: 'Generative AI and Trending Technologies',
      icon: faRobot,
      content: (
        <>
          <p className="mb-3">
            I am enthusiastic about Generative AI and constantly explore emerging technologies. I stay updated with the
            latest trends and advancements in the tech industry, ensuring that I can contribute to cutting-edge
            solutions.
          </p>
        </>
      ),
    },
    ];
  
    return (
      <div className="about-container bg-gray-900 py-12 text-white h-full flex justify-center items-center">
        <Slide left>
          <Fade duration={1000}>
            <div className="card text-lg p-6 rounded bg-gray-800 max-w-2xl w-full">
              <h3 className="text-2xl font-bold mb-3 text-teal-400 flex items-center">
                <FontAwesomeIcon icon={cards[currentCard].icon} className="mr-2" />
                {cards[currentCard].title}
              </h3>
              {cards[currentCard].content}
            </div>
          </Fade>
        </Slide>
      </div>
    );
  };
  
  export default About;
