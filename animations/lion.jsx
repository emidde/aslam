import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lion.json'

const Lion = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        PreserveAspectRatio: 'xMidYMid slice'
    }
  }  

  return (
    <div>
        <Lottie options={defaultOptions}
        width={60}
        isClickToPauseDisabled  />
    </div>
  )
}

export default Lion