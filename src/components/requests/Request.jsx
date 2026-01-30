import React from 'react'
import Subheading from '../shared/Subheading'
import RequestBar from './RequestBar'

const Request = () => {
  return (
    <div className='grow font-arimo p-6 rounded-[12px] bg-card-bg border border-borderColor'>
      <Subheading />

      {/* ========= RequestBars =========  */}
      <div className='mt-4 space-y-3'>
        <RequestBar value={68} requestNum={156} requestName='Screen Repair' />
        <RequestBar value={39} requestNum={89} requestName='Battery Replacement' />
        <RequestBar value={30} requestNum={67} requestName='Back Glass Repair' />
        <RequestBar value={20} requestNum={45} requestName='Software Issues' />
      </div>
    </div>
  )
}

export default Request