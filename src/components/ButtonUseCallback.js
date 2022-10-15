import React from 'react'

function ButtonUseCallback({handleClick, children}) {
    console.log(`rendering ${children}`)
  return (
    <div>
        <button onClick={handleClick} >{children}</button>
    </div>
  )
}

export default React.memo(ButtonUseCallback);