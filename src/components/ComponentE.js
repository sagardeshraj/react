import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
          <UserConsumer>        
              {
                  (username)=>{
                    return(
                        <h3>componentE here and provided value is {username}</h3>
                    )
                  }
              }
          </UserConsumer>
      </div>
    )
  }
}

export default ComponentE;

// we can consume multiple values provided by ascending providers and consuming seeems like a callback hell--