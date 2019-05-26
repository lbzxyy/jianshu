import React, { Component } from 'react';
import  { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo ></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                       <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={ 300 }
                            in = { this.state.focused }
                            classNames="slide"

                        >
                            <NavSearch 
                            onFocus={ this.handleFocus }
                            onBlur={ this.handleBlur }
                            className={ this.state.focused? 'focused': ''}>
                            </NavSearch>
                        </CSSTransition>
                       
                        <i className="iconfont">
                            &#xe614;
                        </i>
                    </SearchWrapper>
                   
                </Nav>
                <Addition>
                    <Button className='writting'>
                         <i className={ this.state.focused? 'focused iconfont': 'iconfont'}>&#xe615;</i>
                        写文章
                        </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    handleFocus = () => {
        this.setState ({
            focused: true
        })
     }
    handleBlur = () => {
        this.setState ({
            focused: false
        })
    }
}

export default Header