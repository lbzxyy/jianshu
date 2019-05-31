 import axios from 'axios';
 import * as  constants  from './constants';
import { fromJS } from 'immutable';

 const getHomeList = (data) => ({
     type: constants.GET_HOME_LIST,
     data: fromJS(data)
 })

 const getMore = (data) => ({
     type: constants.GET_More,
     data: fromJS(data)
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

 export const loadMore = () => {
     return (dispatch) => {
         axios.get('/api/homeList.json').then( res => {
             const { data } = res.data;
             dispatch(getMore(data))
         })
     }
 }