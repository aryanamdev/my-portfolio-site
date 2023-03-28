import React from "react";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import resume from "./resume.pdf";
import { useNavigate } from "react-router-dom";

const navbarItems = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Projects",
    route: "projects",
  },
  {
    id: 3,
    name: "Blogs",
    route: "blogs",
  },
];

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full px-10 lg:px-0">
      <ul className="nav flex justify-between p-4 px-8 items-center rounded-full">
        <div className="flex items-center">
          <li className="text-2xl font-bold text-accent">AN.</li>
        </div>
        <div className="hidden lg:flex gap-10 items-center font-medium text-lg cursor-pointer">
          {navbarItems.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  window.scroll(0, 800);
                  navigate(`${item.route}`);
                }}
                className="text-white active:scale-95"
              >
                {item.name}
              </li>
            );
          })}
          <Link to="./resume.pdf" target="_blank" download={resume}>
            <li className="btn btn-accent border-none text-black  flex items-center gap-2">
              Download CV <BsDownload />
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
