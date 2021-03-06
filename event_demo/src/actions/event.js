import { EVENTADD_SUCCESS,EVENTADD_FAIL,GET_EVENTS, GETEVENT_BYID, UPDATE_LIKES} from "./types";
import axios from 'axios'


export const addevent = ({eventName,eventDesc,region,categorie,selectedTime,eventImage}) => async dispatch => {
    
    const config = {
        headers : {
            'Content-Type' : 'application/json',
           
        }
    }
        const formData = new FormData()
        formData.append('imageUp',eventImage)
        try {
            if (eventImage!==""){
                const res1 = await axios.post ('http://localhost:4000/api/evenement/upload',formData,config); 
                const imgName=res1.data.fileName
                const imgPath= res1.data.filePath
                const body = JSON.stringify({eventName,eventDesc,region,categorie,selectedTime,imgName,imgPath});
    
                const res2 = await axios.post ('http://localhost:4000/api/evenement/add',body,config); 
            dispatch({
                type : EVENTADD_SUCCESS,
                payload : res2.data
            });
            }else {
                const imgName="no image uplaoded"
                const imgPath= "/uploads/test.png"
                const body = JSON.stringify({eventName,eventDesc,region,categorie,selectedTime,imgName,imgPath});
    
                const res2 = await axios.post ('http://localhost:4000/api/evenement/add',body,config); 
            dispatch({
                type : EVENTADD_SUCCESS,
                payload : res2.data
            });
            console.log('no image')
            }
        
        
        } catch (err) {
           console.log('failed')
        }
        getEvents()
       
  
}

export const getEvents = () => async dispatch => {
    const config = {
        headers :{
            'Content-Type' : 'applciation/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:4000/api/evenement/')
        dispatch ({
            type : GET_EVENTS,
            payload :res.data
        })
    } catch (err) {
        console.log('get', err)
    }

}

export const getEventbyID = (cardID) => async dispatch => {
    const config = {
        headers :{
            'Content-Type' : 'applciation/json'
        }
    }
    try {
        const res = await axios.get(`http://localhost:4000/api/evenement/${cardID}`)
        dispatch ({
            type : GETEVENT_BYID, 
            payload :res.data
        })
        console.log('from dispatch',res.data) 
    } catch (err) {
        console.log('get', err)
    }

}

//Add like
export const addLike = postID => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:4000/api/evenement/like/${postID}`)
        dispatch({
            type:UPDATE_LIKES,
            payload:{postID,likes:res.data}
        })
    } catch (err) {
        console.log('put',err)
    }
}

//Remove like
export const removeLike = postID => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:4000/api/evenement/unlike/${postID}`)
        dispatch({
            type:UPDATE_LIKES,
            payload:{postID,likes:res.data}
        })
    } catch (err) {
        console.log('put',err)
    }
}
