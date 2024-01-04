import React from 'react';

const Skills = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-gray-900 text-white rounded shadow-lg font-montserrat">
      <h2 className="text-4xl font-bold mb-6 text-center text-teal-400">Skills</h2>

      <div className="skill-category mb-8 bg-gray-800 p-6 rounded">
        <h3 className="text-2xl font-semibold mb-4 text-teal-300">Languages</h3>
        <p className="text-gray-400 text-lg">
          I am proficient in several programming languages, including:
          <strong className="text-teal-400"> JavaScript, Python, and Java.</strong>
        </p>
      </div>

      <div className="skill-category mb-8 bg-gray-800 p-6 rounded">
        <h3 className="text-2xl font-semibold mb-4 text-teal-300">Frontend Technologies</h3>
        <p className="text-gray-400 text-lg">
          My expertise in frontend development includes:
          <strong className="text-teal-400"> React, Material UI, and Tailwind CSS.</strong> I focus on creating intuitive
          and visually appealing user interfaces to enhance the overall user experience.
        </p>
      </div>

      <div className="skill-category mb-8 bg-gray-800 p-6 rounded">
        <h3 className="text-2xl font-semibold mb-4 text-teal-300">Backend Technologies</h3>
        <p className="text-gray-400 text-lg">
          On the backend, I excel in:
          <strong className="text-teal-400"> Node JS, Express JS, and Flask.</strong> I am experienced in building
          scalable and efficient server-side solutions, implementing RESTful APIs, and managing databases like MongoDB,
          Prisma ORM, MySQL, and SQLite.
        </p>
      </div>

      <div className="skill-category mb-8 bg-gray-800 p-6 rounded">
        <h3 className="text-2xl font-semibold mb-4 text-teal-300">Machine Learning</h3>
        <p className="text-gray-400 text-lg">
          Beyond web development, I have a strong passion for exploring the realms of Machine Learning and AI. I have
          hands-on experience in <strong className="text-teal-400">Deep Learning, Scikit-Learn, Tensorflow</strong>, and have integrated the Open AI API into
          projects. This intersection of software development and artificial intelligence allows me to contribute to
          cutting-edge solutions in a rapidly evolving technological landscape.
        </p>
      </div>

      <div className="skill-category mb-8 bg-gray-800 p-6 rounded">
        <h3 className="text-2xl font-semibold mb-4 text-teal-300">Database Management</h3>
        <p className="text-gray-400 text-lg">
          I have a strong command of various database systems, including:
          <strong className="text-teal-400"> MongoDB, Prisma ORM, MySQL, and SQLite.</strong> My skills extend to
          designing and optimizing database structures to ensure optimal performance.
        </p>
      </div>

    </div>
  );
};

export default Skills;  