import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import {connect} from 'react-redux';
import {SetMessage} from './actions/Message';
import NewsList from './components/NewsList';
import * as NewsActions from './actions/NewsActions';

class App extends Component {
  
  _onChange = (value) => {
   
    this.props.dispatch(SetMessage(value));
    this.props.dispatch(NewsActions.fetchNews(value));
  }

  render() {
    const {message} = this.props.messageReducer;
    return (
      <div className="App">
        <div className="container">
         <h1>News Search </h1> 
         <SearchBox value={message} onChange={this._onChange} />
        
         <h1>News List</h1> 
         <NewsList />
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
