import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";

/**
 * The footer of the application
 */
const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light text-white">
      <div className="container justify-content-between">
        <span className="text-muted">
          Made with{" "}
          <a href="https://it.reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-decoration-none a">
            <FaReact />
          </a>
          .{" "}
        </span>
        <span className="text-muted">
          For other projects check my <FaGithub />{" "}
          <a href="https://github.com/albertoforcato/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            GitHub
          </a>
          {" "}repo.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
