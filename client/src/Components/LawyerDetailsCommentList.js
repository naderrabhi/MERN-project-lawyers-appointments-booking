import React from 'react'
import LawyerDetailsCommentCard from './LawyerDetailsCommentCard'

const LawyerDetailsCommentList = ({Posts,avocatID, User, toggleEdit, setCommentEdit, handleEdit}) => {
  return (
    <div className='lawyerDetailsCommentList'>
      {Posts && Posts.map(post => <LawyerDetailsCommentCard key={post._id} post={post} avocatID={avocatID} User={User} toggleEdit={toggleEdit} setCommentEdit={setCommentEdit} handleEdit={handleEdit} />)}
    </div>
  )
}

export default LawyerDetailsCommentList