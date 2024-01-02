import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'AI Chatbot',
      description: 'The chatbot is designed to understand and respond to user queries intelligently.This chatbot is made with Open AI API and MERN Stack using Node JS and React as backend and front end respectively',
      repoLink: 'https://github.com/Legend0300/AI-ChatBot',
    },
    {
      title: 'NLP Processor',
      description: 'This DSA (Data Structures and Algorithms) project is an NLP (Natural Language Processing) processor designed to predict and auto-complete words. The project reads a PDF file, processes the text, and provides functionalities such as word prediction and auto-completion.',
      repoLink: 'https://github.com/Legend0300/NLP-processor',
    },
    {
      title: 'Dynamic API CRUD Handler React',
      description: 'Implemented a dynamic API CRUD handler using React, allowing users to perform Create, Read, Update, and Delete operations on data. The application provides a seamless and user-friendly interface.',
      repoLink: 'https://github.com/Legend0300/API-Dynamic-CRUD-Handler',
    },
    {
      title: 'Email Spam Detector',
      description: 'Developed an email spam detector using machine learning algorithms.It has a Flask web application for detecting whether an email is spam or not. The application uses MultinomialNB Classifier to make predictions on the provided email content.',
      repoLink: 'https://github.com/Legend0300/Email-Spam-Detector',
    },
    {
      title: 'Discord Bot in Python',
      description: 'Implemented a Discord bot using Python to enhance server functionality. A simple Discord bot written in Python using the Discord API. This bot is designed to respond with roasts when triggered by specific messages.',
      repoLink: 'https://github.com/Legend0300/Discord-Bot-in-Python',
    },
    {
      title: 'Social Media App REST API',
      description: 'Designed and developed a RESTful API for a social media application. The API includes user authentication, post creation, and interaction features to support the functionality of the social platform.',
      repoLink: 'https://github.com/Legend0300/Social-Media-App-REST-API',
    },
    {
      title: 'Chat/Server Room App',
      description: 'Implemented a real-time chat and server room application using Socket.IO. The application allows multiple users to join different chat rooms and engage in real-time communication.',
      repoLink: 'https://github.com/Legend0300/Chat-Server-Room-App-Socket-IO',
    },
    {
      title: 'Contact Manager REST API',
      description: 'Developed a RESTful API for a contact manager application. The API includes endpoints for managing contacts, user authentication, and data storage.',
      repoLink: 'https://github.com/Legend0300/Contact-Manager-REST-API',
    },
    {
      title: 'Machine Learning Repo',
      description: 'A repository dedicated to practicing various machine learning concepts and algorithms to deepen expertise in this field.',
      repoLink: 'https://github.com/Legend0300/Machine-Learning-Prac',
    },
  ];

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-900 text-white rounded shadow-lg font-montserrat">
      <h2 className="text-4xl font-bold mb-6 text-center text-teal-400">Projects</h2>

      <div className="flex flex-wrap justify-center">
        {projectList.map((project, index) => (
          <div key={index} className="project bg-gray-800 p-6 rounded m-4 max-w-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3 text-teal-300">{project.title}</h3>
            <p className="text-md mb-4 text-gray-400">{project.description}</p>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out inline-block"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
