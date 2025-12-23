import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
function App() {
  
  return<>
  <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/article/:id' element={<ArticlePage />} />
    </Routes>
  </HashRouter>
  </>;
}

export default App;
