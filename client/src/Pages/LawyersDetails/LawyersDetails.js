import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import LawyerDetailsCommentList from '../../Components/LawyerDetailsCommentList'
import ProfileLawyerCoverImage from '../../Components/ProfileLawyerCoverImage'
import LawyersDetailsBooking from '../../Components/LawyersDetailsBooking'
import ProfileLawyerContent from '../../Components/ProfileLawyerContent'
import LawyerDetailsComment from '../../Components/LawyerDetailsComment'
import ProfileLawyerInfo from '../../Components/ProfileLawyerInfo'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

import Navbar from '../Navbar/Navbar'

import { getOneProfile } from '../../JS/actions/profile'
import { editPost, getPost } from '../../JS/actions/post'

import './lawyersdetails.css'

const LawyersDetails = () => {
  const {avocatID} = useParams()
  const [comment, setComment] = useState("");
  const [commentEdit, setCommentEdit] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false)
  const [postID, setPostID] = useState("")
  
  const User = useSelector((state) => state.auth.User);
  const Posts = useSelector((state) => state.post.Posts);
  const Profile = useSelector((state) => state.profile.Profile);
  const Loading = useSelector((state) => state.profile.loading);
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProfile(avocatID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (avocatID) {dispatch(getPost(avocatID))}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment]);

  const handleEdit = (postID) => {
    setPostID(postID)
    if (toggleEdit) {dispatch(editPost(postID,commentEdit,avocatID))}
    setToggleEdit(!toggleEdit)
    setComment("")
  }
  
  return (
    <div className='lawyerDetails--page section__padding'>
        {Loading ? <LoadingSpinner /> : <>
        <Navbar />
        <ProfileLawyerCoverImage />
        <ProfileLawyerContent ><><ProfileLawyerInfo Profile={Profile} /><LawyersDetailsBooking avocatID={avocatID}/></></ProfileLawyerContent>
        {localStorage.getItem("token") && <><LawyerDetailsComment comment={comment} setComment={setComment} avocatID={avocatID} User={User} />
        <LawyerDetailsCommentList User={User} avocatID={avocatID} Posts={Posts} toggleEdit={toggleEdit} setCommentEdit={setCommentEdit} handleEdit={handleEdit} postID={postID} /></>}
        </>}
    </div>
  )
}

export default LawyersDetails