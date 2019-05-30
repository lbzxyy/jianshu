import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import store from './store';
import { Iconfont } from './statics/iconfont/iconfont.js';
import {  BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Iconfont></Iconfont>
                <Provider store = { store }>
                    <Header></Header>
                    <BrowserRouter>
                        <Route path='/' exact render = { () => <div>home</div> }></Route>
                        <Route path='/detail' exact render = { () => <div>detail</div> }></Route>
                    </BrowserRouter>
                </Provider>
            </div>
            
        )
    }
}   

export default App;