

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    switch(action.type){
        case 'handleFocus':
            return {
                focused: true
            }
        case 'handleBlur':
            return {
                focused: false
            }
        default:
          return state
         
    }
}