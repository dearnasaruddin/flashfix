import React from 'react'

const Subheading = ({content='', fontFamily}) => {
  return (
    <h3 className={`${fontFamily ? 'font-arimo': 'font-inter'} text-xl leading-7 text-white`}>Top Repair Requests{content}</h3>
  )
}

export default Subheading