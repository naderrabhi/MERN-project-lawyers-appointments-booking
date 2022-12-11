import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postProfile } from '../JS/actions/profile'

const EditLawyerForm = ({Profile}) => {
    const [image, setImage] = useState((Profile && Profile.image) || "")
    const [address, setAddress] = useState((Profile && Profile.address) )
    const [bio, setBio] = useState((Profile && Profile.bio) || "")
    const [phone, setPhone] = useState((Profile && Profile.phone) || "")
    const [facebook, setFacebook] = useState((Profile && Profile.facebook) || "")
    const [linkedin, setLinkedin] = useState((Profile && Profile.linkedin) || "")
    const [instagram, setInstagram] = useState((Profile && Profile.instagram) || "")
    const [mon_fri, setMon] = useState((Profile && Profile.mon_fri) || "")
    const [sat_sun, setSat] = useState((Profile && Profile.sat_sun) || "")
    const [price, setPrice] = useState((Profile && Profile.price) || "")

    const dispatch = useDispatch();
    const navigate = useNavigate()

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
        dispatch(postProfile(data,Profile.lawyerID._id));
        navigate(`/profile`)
      }

  return (
    <form className='form--custom page--relative' action="post" onSubmit={handleSubmit}>
        <div className="form--div">
          <label className='form--label' htmlFor="fileName">Image</label>
          <input id="fileName" name="fileName" onChange={(e) => setImage(e.target.files[0])} placeholder="fileName" type="file" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="address">Adresse</label>
          <input value={address}  id="address" name="address" onChange={(e) => setAddress(e.target.value)} placeholder="Adresse" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="bio">Bio</label>
          <textarea value={bio}  id="bio" name="bio" cols="30" rows="10" onChange={(e) => setBio(e.target.value)} placeholder="Bio" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="phone">Téléphone</label>
          <input value={phone}  id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="mon_fri">Les horaires de travail - lun au ven</label>
          <input value={mon_fri}  id="mon_fri" name="mon_fri" onChange={(e) => setMon(e.target.value)} placeholder="Exp : 08:00 - 17:00" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="sat_sun">Les horaires de travail - sam et dim</label>
          <input value={sat_sun}  id="sat_sun" name="sat_sun" onChange={(e) => setSat(e.target.value)} placeholder="Exp : 08:00 - 12:00" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="price">Les horaires de travail - sam et dim</label>
          <input value={price}  id="price" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="00 EURO" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="facebook">Facebook</label>
          <input value={facebook} id="facebook" name="facebook" onChange={(e) => setFacebook(e.target.value)} placeholder="Facebook" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="linkedin">Linkedin</label>
          <input value={linkedin} id="linkedin" name="linkedin" onChange={(e) => setLinkedin(e.target.value)} placeholder="Linkedin" type="text" className="input--custom"
          />
        </div>
        <div className="form--div">
          <label className='form--label' htmlFor="instagram">Instagram</label>
          <input value={instagram} id="instagram" name="instagram" onChange={(e) => setInstagram(e.target.value)} placeholder="Instagram" type="text" className="input--custom"
          />
        </div>
        <div className="login--page_form-btn">
          <button className="btn--costum btn--costum_hover">Enregistrer</button>
        </div>
      </form>
  )
}

export default EditLawyerForm