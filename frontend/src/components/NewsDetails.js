import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as NewsActions from '../actions/NewsActions';

class NewsDetails extends Component {

    componentWillMount(){

        if(!this.props.news.articles){
            this.props.dispatch(NewsActions.fetchNews());
        }
    }


    render() {
        
        let _news_content = '';

        if( this.props.news.articles){

         let _news = this.props.news.articles[this.props.match.params.id]; 
         _news_content =( 
                <div> 
                    <h1>{ _news.title } </h1> 
                    <p>Author: { _news.author }</p>
                    <p>Description: { _news.description }</p>
                    <p>Published at: { _news.publishedAt }</p>
                    <p><img alt={_news.description} src={ _news.urlToImage  } /></p>
                    <p>Url: { _news.url }</p> 
                </div>
          );   
        }
        
        return (
            <div>
               { _news_content }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
     return {
         news: state.newsReducer.news,
     }
 };

export default connect(mapStateToProps)(NewsDetails);