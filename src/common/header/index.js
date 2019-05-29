import React, { Component } from 'react';
import  { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';


class Header extends Component{
    getListArea()  {
        // const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const { focused, list, page, handleMouseEnter, mouseIn, handleMouseLeave} = this.props;
        const newList = list.toJS();
        const pageList = [];
    
         if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
    
         if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            // onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
    render(){
        const { focused, handleFocus, handleBlur} = this.props;
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
                            in = { focused }
                            classNames="slide"
    
                        >
                            <NavSearch 
                            onFocus={ handleFocus }
                            onBlur={ handleBlur }
                            className={ focused? 'focused': ''}>
                            </NavSearch>
                        </CSSTransition>
                       
                        <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
							&#xe614;
						</i>
                        {this.getListArea()}
                    </SearchWrapper>
                   
                </Nav>
                <Addition>
                    <Button className='writting'>
                         <i className={ focused? 'focused iconfont': 'iconfont'}>&#xe615;</i>
                        写文章
                   </Button>
                   <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
   
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.handleFocus())
        },
        handleBlur() {
            dispatch(actionCreators.handleBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)  