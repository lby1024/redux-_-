import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware} from "redux"
import { Provider } from "react-redux"
import thunk  from 'redux-thunk'

import {counter} from "./redux/reducer.js"  
import Goods from './page/goods/goods.js'
import Comments from './page/comment/comment.js'
import Business from './page/business/business.js'
import Header from './common/header/header.js'

const store = createStore(
	counter, 
	applyMiddleware(thunk)
);

const App = () => (
    <HashRouter>
        <div>
            <Header></Header>
            <Route exact path="/" component={Goods}></Route>
            <Route path="/goods" component={Goods}></Route>
            <Route path="/comments" component={Comments}></Route>
            <Route path="/business" component={Business}></Route>    
        </div>
    </HashRouter>
)

ReactDOM.render(
    <Provider store={store}>
		<App></App>
	</Provider>
    ,
    document.getElementById("root")
);
registerServiceWorker();
