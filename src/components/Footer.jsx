import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container align-items-center">
        <span className="text-muted">
          Made with{" "}
          <span href="https://it.reactjs.org/" className="text-decoration-none a">
            <FaReact />
          </span>
          . For other projects check my <FaGithub />{" "}
          <a href="https://it.reactjs.org/" className="text-decoration-none">
            GitHub
          </a>
        </span>{" "}
        repo.
      </div>
    </footer>
  );
};

export default Footer;
