This project is a Single Page Application built with React and TypeScript, based on a provided Figma design.

The application displays a list of articles fetched from an open API, allows filtering by keywords with highlighted matches, and supports navigation to a detailed article page.

***


To see the Live Demo:

https://innakuruohlu.github.io/Single-Page-Application-with-React/


***

Technologies Used:

- React

- TypeScript

- Material UI (for input field and icons)

- SCSS
  
- Open API: https://spaceflightnewsapi.net/

***

The design was implemented only for large screens, as the assignment did not require adaptive or responsive layout.

***

Installation:

- Install dependencies: npm install
- Start development server: npm run dev

Features


Home Page:

- Displays article cards (title and description limited for 100 characters)

- Articles (only title and description) are fetched from the open API

- Keyword search input (matched keywords are highlighted in yellow, title matches have higher priority than description ones)

- Shows the actual number of displayed articles on the page

- Clicking "Read more" navigates to the article page


Article Page:

- Displays the full title and full description of the selected article

- Uses the same article data fetched from the open API

- Clicking "Back to homepage" navigates to the home page


