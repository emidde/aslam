import React from 'react'
import Lottie from 'react-lottie'
import animationData from './wave.json'

const Wave = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        PreserveAspectRatio: 'xMidYMid slice'
    }
  }  

  return (
        <Lottie options={defaultOptions}
        width={30}
        speed={0.6}
        isClickToPauseDisabled  />
  )
}

export default Wave