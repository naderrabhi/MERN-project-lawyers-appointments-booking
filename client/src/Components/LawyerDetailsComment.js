import React from 'react'
import { useDispatch } from "react-redux";
import {addPost} from '../JS/actions/post'

const LawyerDetailsComment = ({User,avocatID,setComment,comment}) => {
    const dispatch = useDispatch();
  return (
    <div className='lawyerDetailsComment'>
        <h2>Laisser un commentaire</h2>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="comment" id="comment" cols="30" rows="10" placeholder='Laiser un commentaire' className="textarea--custom" />
        <button onClick={() => {dispatch(addPost({userID: User._id,lawyerID: avocatID,comment}));setComment("");}} className='btn--costum'>Commenter</button>
    </div>
  )
}

export default LawyerDetailsComment