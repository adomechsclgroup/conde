import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NewList extends Component{

  render(){
  	
    return (
      <div className="container">
      {this.props.news.articles && this.props.news.articles.map((b, i) => 
      	<li key={i}>
      	 <Link to={`/news/${i}`}>{b.title}</Link>
      	</li>
      	)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
     return {
         news: state.newsReducer.news,
     }
 };

export default connect(mapStateToProps)(NewList);