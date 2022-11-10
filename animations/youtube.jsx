import React from 'react'
import Lottie from 'react-lottie'
import animationData from './youtube.json'

const Youtube = () => {

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
        width={30}
        speed={0.6}
        isClickToPauseDisabled  />
    </div>
  )
}

export default Youtube