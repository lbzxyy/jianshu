import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont.js';

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Iconfont></Iconfont>
                <Header></Header>
            </div>
            
        )
    }
}

export default App;