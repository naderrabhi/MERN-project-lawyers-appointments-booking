import React from 'react'
import {data} from '../../assets/dataexplain'
import WebsiteExplainCard from '../../Components/WebsiteExplainCard'

import './websiteexplain.css'

const WebSiteExplain = () => {
  return (
    <div className='websiteexplain--page section__padding'>
        <div className="websiteexplain--page_header">
          <p>Comment notre site fonctionne</p>
          <button className="btn--costum btn--costum_hover">tutoriel vidéo</button>
        </div>
        <div className="websiteexplain--page_content">
          {data.map(card => <WebsiteExplainCard key={card._id} card={card} />)}
        </div>
    </div>
  )
}

export default WebSiteExplain