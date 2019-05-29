import React from 'react';
import  { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
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

const Header = (props) => {
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
                        in = { props.focused }
                        classNames="slide"

                    >
                        <NavSearch 
                        onFocus={ props.handleFocus }
                        onBlur={ props.handleBlur }
                        className={ props.focused? 'focused': ''}>
                        </NavSearch>
                    </CSSTransition>
                   
                    <i className="iconfont">
                        &#xe614;
                    </i>
                </SearchWrapper>
               
            </Nav>
            <Addition>
                <Button className='writting'>
                     <i className={ props.focused? 'focused iconfont': 'iconfont'}>&#xe615;</i>
                    写文章
               </Button>
               <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreators.handleFocus())
        },
        handleBlur() {
            dispatch(actionCreators.handleBlur())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header) 