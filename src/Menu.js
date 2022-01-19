import React from 'react'
import App from './App'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Home';
import Writting from './Writting';
import Projects from './Projects';
import Photos from './Photos';
import Words from './Words';


const Menu = () => {
    return (
        <>


            <App />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Projects" component={Projects} />
                <Route exact path="/writting" component={Writting} />
                <Route exact path="/photos" component={Photos} />
                <Route exact path="/words" component={Words} />
            </Switch>
        </>
    )
}

export default Menu
