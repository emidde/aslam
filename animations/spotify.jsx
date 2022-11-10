import React from 'react'
import Lottie from 'react-lottie'
import animationData from './spotify-1.json'

const Spotify = () => {

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
        speed={0.8}
        isClickToPauseDisabled  />
    </div>
  )
}

export default Spotify