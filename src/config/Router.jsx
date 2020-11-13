import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Containers/home';
import Product from '../Containers/product';
import Createadd from '../Containers/createadd';
import Login from '../components/login';
import Clicked_item from '../Containers/clicked_item' 



class App_router extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/item' component={Product} />
                <Route exact path='/createadd' component={Createadd} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/clicked_item' component={Clicked_item} />
            </Router>
        )
    }
}


export default App_router;