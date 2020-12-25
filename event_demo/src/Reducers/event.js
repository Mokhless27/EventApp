import {EVENTADD_SUCCESS,GET_EVENTS, EVENTADD_FAIL, GETEVENT_BYID,GETTODAYSEVENT,GETUPCOMINGEVENT,UPDATE_LIKES} from '../actions/types'

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {
    
    
    case EVENTADD_SUCCESS:
        return  [...state, payload ]
    case EVENTADD_FAIL:
        return state
    case GET_EVENTS:
    case GETTODAYSEVENT:
    case GETUPCOMINGEVENT:
        state = []
        return state.concat(payload)
    case GETEVENT_BYID : 
        state=[]
        return state.concat(payload)
    case UPDATE_LIKES :
        return{
            ...state,
            likes:[...state.likes,payload.likes]
        } 
    default:
        return state
    }
}
