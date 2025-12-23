import { useState } from "react";

import "../styles/HomePage.scss";
import Articles from "./Articles.tsx";

import  useArticles from "../hooks/useArticles.ts"

import {
  FormControl,
  OutlinedInput,
  Typography,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function HomePage () {
  const { articles, error } = useArticles(6);
  

  const [keyword, setKeyword] = useState("");

  const searchWord = keyword.trim().toLowerCase();

  const filteredArticles = articles
    .filter((article) => {
      if (!searchWord) return true;

      return (
        article.title.toLowerCase().includes(searchWord) ||
        article.summary.toLowerCase().includes(searchWord)
      );
    })
    .sort((a, b) => {
      const firstTitle = a.title.toLowerCase().includes(searchWord);
      const secondTitle = b.title.toLowerCase().includes(searchWord);

      if (firstTitle && !secondTitle) return -1;
      if (!firstTitle && secondTitle) return 1;
      return 0;
    });

  return <>
  <section className="homeSection">
    <FormControl className="container-form">
      <Typography className="label">Filter by keywords</Typography>

      <OutlinedInput
        className="input"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
          <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>

     <p className="results">Results: {filteredArticles.length}</p>

     <div className="containerArticles">
        {error ? ( <p>{error}</p>) : ( <Articles articles={filteredArticles} keyword={keyword}/>)}
     </div>

  </section>
  </>;
}

export default HomePage;