import { useEffect, useState } from "react";

import type { Article } from "../types/article";

 function useArticles(limit: number = 6) {
  const [articles, setArticles] = useState<Article[]>([]);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results);
      })
      .catch(() => {
        setError("Failed to load articles from open API.");
      });
  }, [limit]);

  return {
    articles,
    error,
  };
};

export default useArticles;