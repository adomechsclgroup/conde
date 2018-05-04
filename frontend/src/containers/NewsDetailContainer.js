import React from 'react';
import {connect} from 'react-redux';
import NewsDetails from '../components/NewsDetails'
import {Link} from 'react-router-dom';

class NewsDetailsContainer extends React.Component {
    

    render() {
        return (
            <div className="container">
                <h1>News Details Page</h1>
                <NewsDetails {...this.props} />
                <Link to='/'>
                   <button>Go home</button>
                </Link>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
     return {
         news: state.newsReducer.news,
     }
 };

export default connect(mapStateToProps)(NewsDetailsContainer);