import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';


class List extends Component {
    render() {
        const { articleList, LoadMoreData, page } = this.props;
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
               <LoadMore onClick={ () =>  LoadMoreData(page) }>更多文章</LoadMore>
 
            </div>
        )
    }
}
const mapState = (state) => ({
    articleList: state.getIn(['home','articleList']),
    page: state.getIn(['home','page'])
})
const mapDispatch = (dispatch) => ({
    LoadMoreData(page) {
        dispatch(actionCreators.loadMore(page+1))
    }
})
export default connect(mapState,mapDispatch)(List);