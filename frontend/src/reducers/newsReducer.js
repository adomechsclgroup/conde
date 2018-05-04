// ./src/reducers/newsReducer.js
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
          return action.payload.news;
    default:
          return state;
  }
};