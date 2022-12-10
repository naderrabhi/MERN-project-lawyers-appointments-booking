import React from 'react'

const FooterAddress = ({el}) => {
  return (
    <div className='footer--page_content'>
        <h5>{el.title}</h5>
        <p>{el.description}</p>
    </div>
  )
}

export default FooterAddress