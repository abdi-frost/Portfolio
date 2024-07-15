import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper mt-4">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        I'm a passionate web developer with over 4 years of experience specializing in React&Angular.  
        Leveraging a strong foundation in both front-end and back-end development, 
        I craft user-friendly and responsive web applications using React and its powerful ecosystem. 
        I thrive in collaborative environments, bringing expertise in building and maintaining single-page applications, 
        integrating with RESTful APIs, and implementing responsive design principles.  
        My experience extends beyond the code, with proficiency in development and deployment tools like Webpack, npm, and Git.  
        Always eager to learn and grow, I'm a strong communicator and team player who thrives on tackling challenges and
        staying ahead of the curve in the ever-evolving world of web development.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
