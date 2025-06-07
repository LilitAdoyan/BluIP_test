# BluIP_test
A web application that allows users to explore movies. The application interacts with TMDB API

To get the data from the API one should put his API key in the /server/.env file like this:
TMDB_API_KEY=YOUR_API_KEY

## Running the project for the first time after cloning it to your machine

### `cd /client`
### `npm i`
### `npm start`

## Running the project 
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

###Features implemented:
Movie discovery and search functionality - there's also a clear button that will clear the search query and dispaly the movies again.
Display movie information - on click of the movie card displaying the detailed infromation of the movie on a new route. In case the user needs to go back to the Home page to discover movies again there's a Back button.

###Technical decisions:
Frontend: React
Backend: Express.js, AXIOS

###Future improvements:
If I had more time I'd implement also those features - Personal notes/reviews for movies and Basic user interaction features
I'd make the loading of the data more smoothly also would utilize a global state management package like Redux Toolkit.

It was challenging for me to work with Express.js and create different routes because previously I only worked as a frontend developer. It seems a small mistake but at first I had put the api key inside quotation marks and couldn't get the data from the api.






