import Projects from "./Projects";
import Footer from "../footer/Footer";
import PortfolioDescription from "./PortfolioDescription";

const Portfolio = () => {
  document.title = "Portfolio | Tyler Dennis";
  return (
    <article className="portfolio-main">
      <PortfolioDescription />
      <Projects />
      <Footer />
    </article>
  );
};

export default Portfolio;
