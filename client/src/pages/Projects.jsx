import React, { useEffect } from "react";

function Projects() {
  useEffect(() => {
    window.scroll(0, 800);
  }, []);

  return <div className="h-screen w-full bg-red-200"></div>;
}

export default Projects;
