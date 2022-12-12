import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerClient } from '../../JS/actions/auth';

const RegisterAsClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      registerClient(
        {
          email: data.get("email"),
          password: data.get("password"),
          passwordConfirm: data.get("passwordConfirm"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          phone: data.get("phone"),
        },
        navigate
      )
    );
  };
  
  return (
    <div className='register--page_client'>
        <h3>Espace Client</h3>
        <div className="login--barre login--barre_register" />
        <form className='register--page_client-form' method="post" onSubmit={handleSubmit}>
        <div className="register--page_client-firtName">
          <label htmlFor="firstName">Prénom</label>
          <input id="firstName" name="firstName" placeholder="Prénom" type="text" className="input--custom" />
        </div>
        <div className="register--page_client-nom">
          <label htmlFor="lastName">Nom</label>
          <input id="lastName" name="lastName" placeholder="Nom" type="text" className="input--custom" />
        </div>
        <div className="register--page_client-email">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" placeholder="E-mail" type="email" className="input--custom" />
        </div>
        <div className="register--page_client-email">
          <label htmlFor="phone">Téléphone</label>
          <input id="phone" name="phone" placeholder="Téléphone" type="number" className="input--custom" />
        </div>
        <div className="register--page_client-password">
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" placeholder="Mot de passe" type="password" className="input--custom" />
        </div>
        <div className="register--page_client-confirmPassword">
          <label htmlFor="passwordConfirm">Confirmer votre mot de passe</label>
          <input id="passwordConfirm" name="passwordConfirm" placeholder="Confirmer votre mot de passe" type="password" className="input--custom" />
        </div>
        <div className="register--page_client-btn">
        <button className="btn--costum btn--costum_hover">
            enregistrer
        </button>
        </div>
        </form>
    </div>
  )
}

export default RegisterAsClient