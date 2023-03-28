import React from "react";
import myImage from "../assets/compressed.png";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

function Hero() {
  return (
    <div className="hero min-h-[80vh] w-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={myImage}
          className="max-w-sm p-2 bg-red- rounded-full shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold leading-[70px]">
            Building a Better Web using{" "}
            <span className="text-accent">React.</span>
          </h1>
          <p className="py-6 text-gray-400">
            I'm Aryan Namdev, a React developer building engaging Web
            Applications. I prioritize both aesthetics and functionality, and
            bring a unique perspective to my work. I value collaboration and
            communication, and work closely with clients and team members to
            deliver high-quality results.
          </p>
          <div className="icons flex gap-2 text-2xl">
            <Link
              className="hover:text-accent btn"
              target="_blank"
              to="https://www.linkedin.com/in/aryan-namdev-3b16151b6/"
            >
              <BsLinkedin />
            </Link>
            <Link
              className="hover:text-accent btn"
              target="_blank"
              to="https://www.github.com/aryanamdev"
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:text-accent btn"
              target="_blank"
              to="https://www.twitter.com/aryanamdev08"
            >
              <BsTwitter />
            </Link>
            <Link
              className="hover:text-accent btn"
              target="_blank"
              to="https://www.instagram.com/thetangledguy"
            >
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
