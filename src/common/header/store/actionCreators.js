import * as contants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
const changeList = (data) => ({
    type: contants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10) 
})

export const handleFocus = () => ({
    type: contants.SEARCH_FOCUS
})

export const handleBlur = () => ({
    type: contants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: contants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: contants.MOUSE_LEAVE
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then( res => {
            const { data } = res.data
            dispatch(changeList(data))
        })
        
    }
}                                               