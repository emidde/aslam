import React from 'react'
import Lottie from 'react-lottie'
import animationData from './wave-line.json'

const WaveLine = () => {

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
        width={100}
        speed={1}
        isClickToPauseDisabled  />
    </div>
  )
}

export default WaveLine;