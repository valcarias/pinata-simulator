
/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring'
import { getRandBetweenMinAndMax, randomPosOrNeg } from '../../utils';
import DrinkIndicator from '../DrinkIndicator/DrinkIndicator';
import { PinataContainerStyles } from './PinataStyles';

const initialPinataState = {
  clicksRemaining: getRandBetweenMinAndMax(5,15),
  isExploded: false,
}

// why was the component overconfident??
// it got too many props from its parent
export default () => {

  const [totalClicks, setTotalClicks] = useState(0)
  const [clicksRemaining, setClicksRemaining] = useState(initialPinataState.clicksRemaining)
  const [isExploded, setIsExploded] = useState(initialPinataState.isExploded)
  // temporary
  const [isBeingHit, setIsBeingHit] = useState(false)

  // helper
  const isExploding = clicksRemaining<=0

  const handleClick = () => {
    const newClicksRemaining = clicksRemaining-1;

    // animation helper state
    setIsBeingHit(true);

    setClicksRemaining(newClicksRemaining);

    // clamp on mount
    setTotalClicks(totalClicks+1)

    // make it bounce back
    setTimeout(()=>{setIsBeingHit(false)},200)

    const shouldExplode = newClicksRemaining<=0
    if(shouldExplode){
      setTimeout(()=>{setIsExploded(true)},750)
    }

  }

  const springWeirdStuffOnClick = useSpring({opacity: isExploding ? 0 : 1,
  transform: `scale(${isBeingHit?1.1:1}) rotate(${isBeingHit?randomPosOrNeg()*10:0}deg)`,
  config:{mass:0.7,tension:370,friction:5, clamp:isExploding || totalClicks===0}
  })

  const handleReset = () => {
    setClicksRemaining(getRandBetweenMinAndMax(5,15))
    setIsExploded(initialPinataState.isExploded)
    setTotalClicks(0)
  }

  return <PinataContainerStyles className="pinataContainer">
    {!isExploded ? <animated.div style={springWeirdStuffOnClick} className="mule" onClick={handleClick}>
      <div className="row row1">
        <div className="head">😎</div>
      </div>
      <div className="row row2">
        <div className="body">👨‍👩‍👧‍👦</div>
        <div className="tail">🎉</div>
      </div>
      <div className="row row3">
        <div className="leg">🍗</div>
        <div className="leg">🍗</div>
        <div className="leg">🍗</div>
        <div className="leg">🍗</div>
      </div>
    </animated.div>
    :
    <DrinkIndicator
    handleReset={handleReset}
    />}
  </PinataContainerStyles>
}
