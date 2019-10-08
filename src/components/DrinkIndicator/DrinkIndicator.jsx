/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState,useEffect} from 'react';
import {useSpring, animated} from 'react-spring'
import Button from '@material-ui/core/Button'
import ResetIcon from '@material-ui/icons/History'

export default ({
  handleReset
}) => {
  // make it visible when it shows up
  const [isVisible, setIsVisible] = useState(false)

  // side-effect
  // componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(()=>{
    setIsVisible(true)
  },[])

  const springDrinkInOnExplode = useSpring({opacity: isVisible?1:0,transform: `scale(${isVisible?1.2:1}) translateY(${isVisible?0:50}px)`})

  return(
    <>
      <animated.div style={springDrinkInOnExplode} className="drinkIndicator">🍺🍸🍷 DRINK!!! 🍻🍹🥃</animated.div>
      <Button variant="contained" className="reset" onClick={handleReset}>
        🎉 Hang a new piñata <ResetIcon style={{marginLeft:'5px'}}/>
      </Button>
    </>
)};
