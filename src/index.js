import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Region from './Region';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/region/:code" component={Region} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
