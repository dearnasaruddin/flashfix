import React from 'react'
import Subheading from '../shared/Subheading'
import RequestBar from './RequestBar'

const Request = () => {
  return (
    <div className='grow font-arimo p-6 rounded-2xl bg-card-bg border border-borderColor'>
        <Subheading/>
        <div className='mt-4 space-y-3'>
            <RequestBar/>
            <RequestBar value={39} requestName='Battery Replacement' requestNum={89}/>
            <RequestBar value={30} requestName='Back Glass Repair' requestNum={67}/>
            <RequestBar value={20} requestName='Software Issues' requestNum={45}/>
        </div>
    </div>
  )
}

export default Request