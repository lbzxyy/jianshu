import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    "topicList": [],
    "articleList": [],
    "recommendList": [],
    "page": 1,
    showScroll: false


})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_HOME_LIST:
          return  state.merge({
             topicList: action.data.get('topicList'),
             articleList: action.data.get('articleList'),
             recommendList: action.data.get('recommendList')
            })
        case constants.GET_More:  
            return state.merge({
                articleList: state.get('articleList').concat(action.data),
                page: action.page
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        default:
            break;
    }
    return state;
}