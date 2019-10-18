import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import RoomDetails from "./components/RoomDetails";
import Rooms from "./components/Rooms";

const routing = (
    <Router>
        <div className='container'>
            <Switch>
                <Route exact path="/" component={Rooms}/>
                <Route exact path="/rooms/:roomId" component={RoomDetails}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
