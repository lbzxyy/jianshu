import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends Component {
    render() {
        const { topicList } = this.props;
        return(
            <TopicWrapper>
                {
                    topicList.map( v => {
                        return(
                            <TopicItem key={v.get('id')}>
                                <img className='topic-pic' src={v.get('imgUrl')}/>
                                {v.get('title')}
                             </TopicItem>
                        )
                    })
                }
               
            </TopicWrapper>
        )
    }
}
const mapState = (state) => ({
    topicList: state.getIn(['home','topicList'])
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
export default connect(mapState,null)(Topic);