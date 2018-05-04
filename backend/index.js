var dotenv = require('dotenv').config();

const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
const url = require('url');

app.get('/', (request, response) => response.send('Api Ready'));

app.use('/api', router);

const originWhitelist = ['http://localhost:3000'];


router.use((request, response, next) => {

  let origin = request.headers.origin;
  
  if (originWhitelist.indexOf(origin) > -1) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }

  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
  
  next();

});

router.get('/topheadlines', (request, response) => {
	  
	newsapi.v2.topHeadlines({
	 language: 'en',
  	 country: 'gb'
	}).then(data => {
	   response.send(data);
	});
});

router.get('/everything', (request, response) => {
	  
	var urlParts = url.parse(request.url, true);
	var parameters = urlParts.query;
	var query = parameters.q;
	
	newsapi.v2.everything({
	 q: query,
	 language: 'en',
	 sortBy: 'publishedAt',
	}).then(data => {
	  response.send(data);
	});

});

app.listen(port, () => console.log(`Listening on port ${port}`));
