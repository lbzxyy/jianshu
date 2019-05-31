import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component {
    render() {
        const { recommendList } = this.props;
        return(
            <RecommendWrapper>
                {
                    recommendList.map( item => {
                        return(
                            <RecommendItem imgUrl={ item.get('imgUrl')} key={ item.get('id')}>

                            </RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapState = (state) => ({
    recommendList: state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend) ;