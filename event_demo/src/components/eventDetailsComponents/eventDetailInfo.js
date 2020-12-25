import React,{useEffect} from "react";
import {connect} from 'react-redux'
import {getEventbyID,addLike,removeLike} from '../../actions/event'
import {Link} from 'react-router-dom'
import store from '../../store'
const EventDetailInfo = ({cardID,event,auth,addLike,removeLike}) => {
  
  useEffect(() => {
    store.dispatch(getEventbyID(cardID))
  }, [] ) 
 
  
  console.log(event,"karim")
  
  return (
    event.map((event)=>{
      let bg = event.imgPath;
  var sectionStyle = {
    backgroundImage: `url(${bg})`
  };
      return(
    <div className=" container">
    <div className="detail-container">
      <div className="detail-user-section">
        <img
          className="user-img"
          src={event.avatar}
          alt="pic"
        />
        <div>
          <h3 className="user-text-name">{event.eventName}</h3>
          <h3 className="user-text-mail">{event.userMail}</h3>
        </div>
      </div>
    </div>

    <div className="detail-card-section">
      <div className="style-details">
        <div className="detail-card-image-section" style ={sectionStyle} />
        
        <div>
        
        <div className="detail-card-detail-section">
          <p className="detail-card-texts">{event.eventName}</p>
          <p className="detail-card-texts">{event.categorie}</p>
          <p className="detail-card-texts">{event.region}</p>
          <p className="detail-card-texts">{event.eventDesc} </p>
        </div>
        {/* {`/post/${_id}`} */}
        <div className="detail-card-detail-social">
        <button onClick={e=>addLike(event._id)} type='button' class='btn btn-primary'><i class='fas fa-thumbs-up'></i> <span>{event.likes.length}</span></button>
        <button onClick={e=>removeLike(event._id)} type='button' class='btn btn-primary'><i class='fas fa-thumbs-down'></i> </button>
        <Link to='' class='btn btn-primary'>Discussion <span class='comment-count'>{event.comments.length}</span></Link>  
        {!auth.loading && event.user === auth.user._id && (
        <button type='button' class='btn btn-danger'><i class='fas fa-times' /></button>      
        )}
        </div>
       </div>
      </div>
    </div>
    
  </div> )})
  );
};
const mapStateToProps = state => {
  return {
    event : state.event,
    auth:state.auth
  }
}

export default connect(mapStateToProps,{getEventbyID,addLike,removeLike})(EventDetailInfo);
