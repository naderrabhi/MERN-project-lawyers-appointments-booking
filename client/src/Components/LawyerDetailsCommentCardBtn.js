import React from 'react'
import { useDispatch } from "react-redux";

import { delPost } from '../JS/actions/post';

const LawyerDetailsCommentCardBtn = ({postID, avocatID, toggleEdit, handleEdit}) => {
    const dispatch = useDispatch();
    
  return (
    <div className="lawyerDetailsCommentList--btn">
        <button onClick={()=>handleEdit(postID)} className='btn--costum'>{toggleEdit ? "Commenter" : "Editer"}</button>
        <button onClick={()=>{dispatch(delPost(postID,avocatID))}} className='btn--costum'>supprimer</button>
    </div>
  )
}

export default LawyerDetailsCommentCardBtn