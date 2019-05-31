import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';


class List extends Component {
    render() {
        const { articleList, LoadMoreData } = this.props;
        return(
            <div>
                {
                    articleList.map( item => {
                        return(
                            <ListItem key={item.get('id')}>
                                <img className='pic' alt='' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
               <LoadMore onClick={ () =>  LoadMoreData() }>更多文章</LoadMore>
 
            </div>
        )
    }
}
const mapState = (state) => ({
    articleList: state.getIn(['home','articleList'])
})
const mapDispatch = (dispatch) => ({
    LoadMoreData() {
        dispatch(actionCreators.loadMore())
    }
})
export default connect(mapState,mapDispatch)(List);