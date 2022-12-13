import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {postProfile} from '../../JS/actions/profile'

import './createprofile.css'

const CreateProfile = () => {
  const User = useSelector(state => state.auth.User)
  const [image, setImage] = useState("")
  const [address, setAddress] = useState("")
  const [bio, setBio] = useState("")
  const [phone, setPhone] = useState("")
  const [facebook, setFacebook] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [instagram, setInstagram] = useState("")
  const [mon_fri, setMon] = useState("")
  const [sat_sun, setSat] = useState("")
  const [price, setPrice] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("fileName", image);
    data.append("address", address);
    data.append("bio", bio);
    data.append("phone", phone);
    data.append("facebook", facebook);
    data.append("linkedin", linkedin);
    data.append("instagram", instagram);
    data.append("mon_fri", mon_fri);
    data.append("sat_sun", sat_sun);
    data.append("price", price);
    dispatch(postProfile(data,User._id));
    navigate('/')
  }
  
  return (
    <div className='createprofile--page section__padding'>
      <h3>Créer votre profil</h3>
      <div className="login--barre" />
      <form className='form--custom page--relative' action="post" onSubmit={handleSubmit}>
        <div className="form--div">
          <label className='form--label' htmlFor="fileName">Image</label>
          <input required id="fileName" name="fileName" onChange={(e) => setImage(e.target.files[0])} placeholder="fileName" type="file" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="address">Adresse</label>
          <input required id="address" name="address" onChange={(e) => setAddress(e.target.value)} placeholder="Adresse" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="bio">Bio</label>
          <textarea required id="bio" name="bio" cols="30" rows="10" onChange={(e) => setBio(e.target.value)} placeholder="Bio" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="phone">Téléphone</label>
          <input required id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="mon_fri">Les horaires de travail - lun au ven</label>
          <input required id="mon_fri" name="mon_fri" onChange={(e) => setMon(e.target.value)} placeholder="Exp : 08:00 - 17:00" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="sat_sun">Les horaires de travail - sam et dim</label>
          <input required id="sat_sun" name="sat_sun" onChange={(e) => setSat(e.target.value)} placeholder="Exp : 08:00 - 12:00" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="price">Prix de consultation</label>
          <input required id="price" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="00 Euro" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="facebook">Facebook</label>
          <input id="facebook" name="facebook" onChange={(e) => setFacebook(e.target.value)} placeholder="Facebook" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="linkedin">Linkedin</label>
          <input id="linkedin" name="linkedin" onChange={(e) => setLinkedin(e.target.value)} placeholder="Linkedin" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="instagram">Instagram</label>
          <input id="instagram" name="instagram" onChange={(e) => setInstagram(e.target.value)} placeholder="Instagram" type="text" className="input--custom"
          />
        </div>
        <div className="login--page_form-btn">
          <button className="btn--costum btn--costum_hover">Enregistrer</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProfile