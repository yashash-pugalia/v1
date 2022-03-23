import data from "./data.json";
import "./Projects.scss";

import { FaGithub, FaArrowRight } from "react-icons/fa";

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projectCont">
        {Object.keys(data).map((e) => {
          return <ProjectCard title={e} {...data[e]} />;
        })}
      </div>
    </section>
  );
};

const ProjectCard = ({ img, title, desc, repoLink, website }) => {
  return (
    <div className="projectCard clay">
      <h3>{title}</h3>
      <img src={img} alt={title} width="272" height="153" />
      <p>{desc}</p>
      <div className="btnBox">
        <a href={website} target="_blank" rel="noreferrer" className="btn">
          <FaArrowRight /> View Live
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-github"
        >
          <FaGithub /> Github
        </a>
      </div>
    </div>
  );
};
