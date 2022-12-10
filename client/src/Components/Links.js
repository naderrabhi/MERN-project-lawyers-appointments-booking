import React from 'react'
import {Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {BsShieldFillCheck,BsQuestionLg} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../JS/actions/auth'

const Links = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.User);
  return (
    <>
        {localStorage.getItem("token") ? (
          <>
           {User.role === "admin" ? <Link to='/tableau-de-bord' >
            <p>Tableau de bord</p>
            <FaUserAlt />
          </Link> : <Link to='/profile'>
            <p>Profile</p>
            <FaUserAlt />
          </Link>}
          <Link to='/connecter' onClick={() => dispatch(logOut())}>
            <p>Se déconnecter</p>
            <FaUserAlt />
          </Link>
          </>
        ) : <Link to='/connecter'>
              <p>Se connecter</p>
              <FaUserAlt />
            </Link>}
        <Link to='/connecter'>
            <p>Accès professionnel</p>
            <BsShieldFillCheck />
        </Link>
        <Link to='/connecter'>
            <p>Besoin d'aide?</p>
            <BsQuestionLg />
        </Link>
    </>
  )
}

export default Links