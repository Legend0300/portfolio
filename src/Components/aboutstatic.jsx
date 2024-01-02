import React from 'react';

const AboutStatic = () => {
  const cards = [
    {
      title: 'Professional Expertise',
      icon: 'fas fa-laptop-code',
      content: (
        <>
          <p className="mb-3">
            As a Full Stack Developer, I specialize in the end-to-end development of web applications, from designing
            intuitive user interfaces to implementing scalable backend solutions.
          </p>
          <p>
            My proficiency extends to using
            <span className="ml-2 mr-1 text-yellow-400">JavaScript</span>,
            <span className="ml-1 mr-1 text-blue-500">Python</span>, and
            <span className="ml-1 mr-1 text-teal-400">React</span>, along with frameworks such as
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
      title: 'MERN Stack and Node.js',
      icon: 'fab fa-node-js',
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
      title: 'Passion for Machine Learning',
      icon: 'fas fa-brain',
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
      title: 'Generative AI and Trending Technologies',
      icon: 'fas fa-robot',
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
      <div className="flex flex-col items-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-teal-400">About Me</h1>
        {cards.map((card, index) => (
          <div key={index} className="card text-lg p-6 rounded bg-gray-800 mb-4">
            <h3 className="text-2xl font-bold mb-3 text-teal-400 flex items-center">
              <i className={card.icon + ' mr-2'}></i>
              {card.title}
            </h3>
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStatic;

