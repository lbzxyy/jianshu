import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Header></Header>
            </div>
            
        )
    }
}

export default App;