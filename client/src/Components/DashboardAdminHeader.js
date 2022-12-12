import React from 'react'
import {FaSearch} from 'react-icons/fa'

const DashboardAdminHeader = ({setName,name,handleSubmit,setRole}) => {
  return (
    <div className='dashboardAdminHeader'>
        <form onSubmit={handleSubmit} className="dash--header_search">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Recherche..." type="text" className="input--custom"/>
            <button><FaSearch /></button>
        </form>
        <ul className='dash--header_links'>
            <button onClick={() => setRole("all")} className='btn--costum'>Tout</button>
            <button onClick={() => setRole("lawyer")} className='btn--costum'>Avocats</button>
            <button onClick={() => setRole("client")} className='btn--costum'>Clients</button>
        </ul>
    </div>
  )
}

export default DashboardAdminHeader