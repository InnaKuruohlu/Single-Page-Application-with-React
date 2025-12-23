import "../styles/ArticlePage.scss"

import { useParams, useNavigate } from "react-router-dom";
import useArticles from "../hooks/useArticles";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import netflixImage from "../assets/netflix-image.jpg";
import codeImage from "../assets/code-image.jpg";
import robotImage from "../assets/robot-image.jpg";
import magazineImage from "../assets/magazine-image.jpg";

const images = [
  netflixImage,
  codeImage,
  robotImage,
  robotImage,
  magazineImage,
  netflixImage,
];



function ArticlePage () {

  const { id } = useParams();
  const navigate = useNavigate();

  const { articles } = useArticles(6);

  const articleIndex = articles.findIndex(
    (item) => item.id === Number(id)
  );

  const article = articles[articleIndex];

  if (!article) {
  return <p>Loading article, please wait...</p>;
}

  return <>
  <header 
  className={`header 
    ${articleIndex === 2 || articleIndex === 3 ? "robot" : ""} 
    ${articleIndex === 4 ? "magazine" : ""} `}
  style={{
    backgroundImage: `url(${images[articleIndex]})`,
  }} >
  </header>

  <div className="containerTextBtn">
    
  <div className="containerArticle">
    <h2 className="titleArticlePage">{article.title}</h2>
    <p className="descArticlePage">
      {article.summary.endsWith(".") || article.summary.endsWith("[…]")
      ? article.summary
      : article.summary + "..."
      }
      </p>
  </div>

  <button className="backHomeButn"
  onClick={() => navigate("/")}
  ><ArrowBackIcon className="ArrowBackIcon" /> Back to homepage</button>
  </div>
  </>
};

export default ArticlePage;