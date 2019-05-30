import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import store from './store';
import { Iconfont } from './statics/iconfont/iconfont.js';
import {  BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home/index';
import Detail from "./pages/detail/index";

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Iconfont></Iconfont>
                <Provider store = { store }>
                    <Header></Header>
                    <BrowserRouter>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                    </BrowserRouter>
                </Provider>
            </div>
            
        )
    }
}   

export default App;