import React,{ useEffect, useState } from 'react'

// we are printing the mouse positon cordinates in the ui--
// we need to resister the event once and then it works automatically-- so we ll do it in the componentDidMount---
function UseEffectThree() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    useEffect(()=>{
        console.log('use effect called')
        window.addEventListener('mousemove', logMousePosition)

      return ()=>{   // return is for clean up code i.e. componentWillUnmount---
        // its for removing subscription, timer, and event listner
        console.log('component unmounting code')
        window.removeEventListener('mousemove', logMousePosition)
      }

    },[])  // if we didnt specify the the empty dependancy the useEffect will be called every time the event fires--
    // i.e componentDidMount 

    const logMousePosition = (e)=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

  return (
    <div>
        <h4>Hooks X- {x} And Y- {y}</h4>
    </div>
  )
}

export default UseEffectThree