import React, { useState } from "react";

const ProjectsPart = () => {
  const projects = [
    {
      name: "File Uploader",
      description:
        "A web application built with React and Node.js that allows users to securely upload and manage files using Google authentication. After signing in, users can upload any type of file to a local directory on the web server. The application also provides a list of all uploaded files, with the ability to download individual files.",
      imageUrl: "/projects/juneDrive.png",
      githubUrl: "https://github.com/June-Senpai/file-uploader",
      demoUrl: "https://june-drive.netlify.app",
    },
    {
      name: "Notes",
      description:
        "A note-taking web application built with the MERN stack that features an autosave capability. Users can create and manage notes with rich text processing capabilities, thanks to the integration of the Quill library. Notes are automatically saved to a MongoDB database, preserving changes even if the user navigates away from the page. Each note has a unique URL that can be shared with others.",
      imageUrl: "/projects/notes.png",
      githubUrl: "https://github.com/June-Senpai/autosave-blog",
      demoUrl: "https://notes-june.netlify.app",
    },
    {
      name: "Manager",
      description:
        "A web application built with Next.js and MongoDB that allows users to manage vendor information. Features include login with Google, creating and editing vendor details, and displaying a paginated list of vendors. Users can easily update vendor information or delete vendors after confirmation.",
      imageUrl: "/projects/vendorList.png",
      githubUrl: "https://github.com/June-Senpai/Vendor-Manager",
      demoUrl: "https://vendor-manager-three.vercel.app",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const [isChanging, setIsChanging] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleNextClick = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
      setIsChanging(false);
    }, 300);
  };

  const handlePrevClick = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setIsChanging(false);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center mb-10 ">
      <div className="text-8xl font-bold text-pink-300 mx-auto mb-11">
        <h1>
          <span className="text-8xl font-extrabold bg-clip-text text-transparent bg-center bg-[url('https://images.unsplash.com/photo-1589307004173-3c95204d00ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')]">
            My
          </span>
          <span className="text-8xl font-extrabold bg-clip-text text-transparent bg-center bg-[url('https://images.unsplash.com/photo-1587738433410-8f34adcb0c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-position-x-right">
            Projects
          </span>
        </h1>
      </div>
      <div className="m-4 relative overflow-hidden">
        <div className="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <button
            onClick={handlePrevClick}
            className="hover:opacity-90 absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-pink-400 rounded-lg text-white mx-2 z-20 hidden lg:block"
          >
            <ion-icon name="caret-back-outline"></ion-icon>
          </button>
          <button
            onClick={handleNextClick}
            className="hover:opacity-90 absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-pink-400 rounded-lg text-white mx-2 z-20 hidden lg:block"
          >
            <ion-icon name="caret-forward-outline"></ion-icon>
          </button>
          <div className="">
            <img
              src={projects[currentProjectIndex].imageUrl}
              alt={projects[currentProjectIndex].name}
              className={`w-full h-[500px] object-cover rounded-lg  duration-900 group-hover:scale-105 ease-in-out transition-all duration-300 ${
                isChanging ? "translate-x-full" : ""
              }`}
            />
          </div>
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${
              currentProjectIndex === 2 ? "to-black" : "to-pink-50"
            } group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70`}
          ></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-serif text-3xl font-bold text-pink-300">
              {projects[currentProjectIndex].name}
            </h1>
            <p
              className={`mb-3 text-lg italic mx-8 text-white transition-opacity duration-300 ${
                isChanging ? "opacity-0" : "group-hover:opacity-100"
              }`}
            >
              {projects[currentProjectIndex].description}
            </p>
            <a
              href={projects[currentProjectIndex].githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 flex items-center px-4 py-2 bg-neutral-900 shadow-black/60 rounded-full text-white mx-2 text-lg font-com capitalize"
            >
              <ion-icon name="logo-github" className="mr-2"></ion-icon>
              <span className="ml-1">GitHub</span>
            </a>
            <div className="mt-2"></div>
            <a
              href={projects[currentProjectIndex].demoUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 px-4 py-2 bg-pink-500 shadow-black/60 rounded-full text-white mx-2 text-lg font-com capitalize"
            >
              Demo
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-3">
        <button
          onClick={handlePrevClick}
          className="hover:opacity-90 px-4 py-2 bg-pink-400 rounded-lg text-white mx-2"
        >
          Prev
        </button>
        {projects.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentProjectIndex(index);
              setClickedIndex(index);
              setTimeout(() => {
                setClickedIndex(null);
              }, 300);
            }}
            className={`w-7 h-7 rounded-full mx-2 cursor-pointer transition-all duration-300 ${
              currentProjectIndex === index ? "bg-pink-300" : "bg-gray-300"
            } hover:bg-pink-200 hover:scale-[1.3] relative`}
          >
            <span
              className={`absolute inset-0 rounded-full border border-pink-300 transition-all duration-300 ${
                clickedIndex === index ? "scale-[3] opacity-0" : ""
              }`}
            />
          </div>
        ))}

        <button
          onClick={handleNextClick}
          className="hover:opacity-90 px-4 py-2 bg-pink-400 rounded-lg text-white mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectsPart;
