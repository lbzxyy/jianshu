import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import store from './store';
import { Iconfont } from './statics/iconfont/iconfont.js';

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Iconfont></Iconfont>
                <Provider store = { store }>
                     <Header></Header>
                </Provider>
            </div>
            
        )
    }
}

export default App;