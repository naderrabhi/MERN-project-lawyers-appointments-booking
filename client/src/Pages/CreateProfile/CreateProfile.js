import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import {postProfile} from '../../JS/actions/profile'

import './createprofile.css'

const CreateProfile = () => {
  const [image, setImage] = useState("")
  const [address, setAddress] = useState("")
  const [bio, setBio] = useState("")
  const [phone, setPhone] = useState("")
  const [facebook, setFacebook] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [instagram, setInstagram] = useState("")

  const dispatch = useDispatch();

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
    dispatch(postProfile(data));
    window.location.reload(false);
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
          <input required id="bio" name="bio" onChange={(e) => setBio(e.target.value)} placeholder="Bio" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="phone">Téléphone</label>
          <input required id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone" type="text" className="input--custom"
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