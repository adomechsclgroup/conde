import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './reducers/message';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as NewsActions from './actions/NewsActions';
import newsReducer from './reducers';

const reducer = combineReducers({
 messageReducer,
 newsReducer
})

const store = createStore(
 reducer,
 applyMiddleware(
 	thunk,
 	logger)
)

store.dispatch(NewsActions.fetchNews());

export default store;