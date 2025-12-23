import { useNavigate } from "react-router-dom";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import netflixImage from "../assets/netflix-image.jpg";
import codeImage from "../assets/code-image.jpg";
import robotImage from "../assets/robot-image.jpg";
import magazineImage from "../assets/magazine-image.jpg";


import type {Article} from "../types/article.ts";
import { formatDate, highlight } from "../utils/ArticlesFunctions.tsx";

type Props = {
  articles: Article[];
  keyword: string;
};

  const images = [
  netflixImage,
  codeImage,
  robotImage,
  robotImage,
  magazineImage,
  netflixImage,
];



function Articles ({articles, keyword}: Props) {

  const navigate = useNavigate();


  return<>
  {articles.map((article, index) => (

      <div className="container-article" key={article.id}>

        <img 
         className={`image 
          ${index === 2 || index === 3 ? "robot" : ""} 
          ${index === 4 ? "magazine" : ""} `}
        src={images[index]}/>

        <div className="container-text">

          <div>
          <p className="data">
            <CalendarTodayIcon className='calendarIcon'/>
            {formatDate(article.published_at)}
          </p>

          <h3 className="nameOfDesc">
            {highlight(article.title, keyword)}</h3>
          </div>


          <div>
          <p className="DescText">
            {highlight(article.summary.length > 100 ? article.summary.slice(0, 100) + "..." : article.summary, keyword)}
          </p>

          <button className="ReadMoreButton"
            onClick={() => navigate(`/article/${article.id}`)}
          >Read more
            <ArrowForwardIcon className='arrowIcon' />
          </button>
        </div>

          </div>
      </div>
  ))}

  </>
};

export default Articles;