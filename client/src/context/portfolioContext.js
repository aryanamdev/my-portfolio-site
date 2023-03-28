import React, { createContext, useState, useEffect } from "react";
import fetchData from "./api"; // import the function that fetches data from Sanity

// create a new context
export const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectType, setProjectType] = useState("");
  const [blogs, setBlogs] = useState([]);

  // fetch data from Sanity when the component mounts
  useEffect(() => {
    fetchData().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    // pass the projects state to the context provider
    <PortfolioContext.Provider
      value={{
        projects,
        setProjects,
        projectType,
        setProjectType,
        blogs,
        setBlogs,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
