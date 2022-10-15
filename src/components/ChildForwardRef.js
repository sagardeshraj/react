import React from 'react'

const ChildForwardRef = React.forwardRef(
    ( props, Ref) => {
        
        return (
          <div>
              <input type="text" ref={Ref} />
          </div>
        )
      }
)

export default ChildForwardRef


