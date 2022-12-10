import React from 'react'
import image from '../../assets/images/about.jpeg'

import './about.css'

const About = () => {
  return (
    <div className='about--page section__padding'>
        <div className="about--page_img">
            <img src={image} alt="" />
        </div>
        <div className="about--page_content">
            <h1>Pour en savoir plus sur nous</h1>
            <p>Nous souhaitons faciliter l'accès aux professionnels du droit en digitalisant et regroupant sur une meme plateforme l'ensemble des avocats ey leur disponibilité.</p>
            <p>ingénieur et psychologue de formation, loin du monde de la justice, nous voulions proposer un modèle d'organisation plus centraliser pour la prise de rendez-vous.</p>
        </div>
    </div>
  )
}

export default About