import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NewsDetailContainer from './containers/NewsDetailContainer';

export default () => {
 return (
   <BrowserRouter>
   <Switch>
   	 <Route exact path='/' component={App}/>
   	 <Route path='/news/:id' component={NewsDetailContainer}></Route>
   </Switch>
   </BrowserRouter>
 )
}