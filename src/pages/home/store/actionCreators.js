 import axios from 'axios';
 import * as  constants  from './constants';
import { fromJS } from 'immutable';

 const getHomeList = (data) => ({
     type: constants.GET_HOME_LIST,
     data: fromJS(data)
 })

 const getMore = (data,page) => ({
     type: constants.GET_More,
     data: fromJS(data),
     page: page
 })

 export const getHomeInfo = () => {
     return (dispatch) => {
        axios.get('/api/home.json').then( res => {
            console.log(res,'res');
            const { data } = res.data
            dispatch(getHomeList(data))
        })
     }
 }

 export const loadMore = (page) => {
     return (dispatch) => {
         axios.get('/api/homeList.json?page=' + page).then( res => {
             const { data } = res.data;
             dispatch(getMore(data,page))
         })
     }
 }