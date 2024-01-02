import React from 'react';
import About from './about';

const AboutStatic = () => {
  return (
    
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="max-w-2xl w-full p-8 bg-gray-800 rounded-lg shadow-lg text-white">
        <section className="mb-8">
          <h2 className="text-4xl font-bold mb-6 text-teal-400">About Me</h2>

          <p className="text-lg mb-6">
            Passionate Full Stack Developer with expertise in JavaScript, Python, and Java. Specialized in crafting seamless applications using React, Express JS, and Flask. Adept at creating innovative solutions, I thrive in collaborative environments, bringing a commitment to excellence and a keen interest in Machine Learning and AI advancements. Committed to continuous learning and eager to contribute dynamic skills to high-impact projects.
          </p>

          <About></About>

            <br />
          <div className="flex flex-col">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-teal-400">Future Goals:</h3>
              <ul className="list-disc pl-8 text-lg">
                <li className="mb-2">Dive into the applications of reinforcement learning in game development.</li>
                <li className="mb-2">Apply Reinforcement Learning concepts to create innovative solutions in various gaming scenarios.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-teal-400">Love for Building Things:</h3>
              <p className="text-lg">
                I have a passion for building things, especially exploring the intersection of technology and creativity to bring ideas to life.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-teal-400">Hobbies:</h3>
              <ul className="list-disc pl-8 text-lg">
                <li className="mb-2">Cricket</li>
                <li className="mb-2">Football</li>
                <li className="mb-2">Gaming</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-teal-400">Interests:</h3>
              <ul className="list-disc pl-8 text-lg">
                <li className="mb-2">Cooking</li>
                <li className="mb-2">Anime</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutStatic;
