import React from 'react'

function CountUseCallback({text, count}) {
    console.log(`rendering ${text}`)
  return (
    <div>
        <h3>count - {count}</h3>
    </div>
  )
}

export default React.memo(CountUseCallback)