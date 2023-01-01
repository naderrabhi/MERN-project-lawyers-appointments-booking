import React from 'react'
import LawyerDetailsCommentCardBtn from './LawyerDetailsCommentCardBtn'


const LawyerDetailsCommentCard = ({post, avocatID, User, toggleEdit, handleEdit, setCommentEdit, postID}) => {
  
  return (
    <div className="lawyerDetailsCommentList--comment">
            <div className="lawyerDetailsCommentList--nameDate">
                <h2>{post.name}</h2>
                <h4>( {post.date.slice(0, 10) + " à " + post.date.slice(11, 16)} )</h4>
            </div>
            {toggleEdit && postID === post._id ? <textarea onChange={(e) => setCommentEdit(e.target.value)} Value={post.comment && post.comment} name="comment" id="comment" cols="30" rows="10" className="textarea--custom" /> : <p>{post.comment}</p> }
            {User._id === post.userID && <LawyerDetailsCommentCardBtn postID={post._id} avocatID={avocatID} toggleEdit={toggleEdit} handleEdit={handleEdit} />}
        </div>
  )
}

export default LawyerDetailsCommentCard