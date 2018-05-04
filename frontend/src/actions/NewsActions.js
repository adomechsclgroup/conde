// ./src/actions/newsActions.js
import Axios from 'axios';

export const fetchNewsSuccess = (news) => {
  return {
    type: 'FETCH_NEWS_SUCCESS',
     payload: {
        news
     }
  }
};

//Async Action
export const fetchNews = (keywords) => {
  let apiUrl = 'http://localhost:3001/api/topheadlines';
  if(keywords){
  	apiUrl = 'http://localhost:3001/api/everything?q=' + encodeURIComponent(keywords);	
  }	
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchNewsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};