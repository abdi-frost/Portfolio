import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  
  const hackerNews = "https://i.postimg.cc/8czpYHk6/hacker-News.jpg";
  const daftech = "https://i.postimg.cc/SKby4qNq/daftech.jpg"
  const dashboard = "https://i.postimg.cc/023ktDTz/dashboard.webp"
  const quizzy = "https://i.postimg.cc/Bv2nPbwX/quizzy.jpg"
  const restaurant = "https://i.postimg.cc/wB59TP7N/restaurant.jpg"
  const shopping = "https://i.postimg.cc/x1z0BqQt/shopping.jpg"
  // const orebishopping = "https://i.postimg.cc/3RBr96hh/orebi-Shopping.png"
  
  return (
    <div className="wrapper mt-4">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={quizzy}
          title="Quizzy | Angular"
          link="https://quizzy-app-abdi-megersa.netlify.app/"
        />
        <ProjectCard
          img={daftech}
          title="Car Info keeper | Angular"
          link="https://daftech-demo-abdi.netlify.app/"
        />
        <ProjectCard
          img={hackerNews}
          title="Hacker News | Angular"
          link="https://hackernews-abdi.netlify.app/"
        />
        <ProjectCard
          img={restaurant}
          title="Restaurant | React"
          link="https://restaurant-abdi.netlify.app/"
        />
        <ProjectCard
          img={shopping}
          title="Shopping Cart | Angular"
          link="https://shopping-cart-abdi.netlify.app/"
        />

        <ProjectCard
          img={dashboard}
          title="Dashboard"
          link="https://orebishopping.reactbd.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
