import React from 'react'
import {createContext} from './paracontext'

 const SonContext = (props) => {
  console.log(props, 'props');
  
  return (
    <createContext.Consumer>
        {({money, yundong}) => {
          // console.log(money, yundong)
          return (
            <h1>
              我是依赖父组件的context的{money}
            </h1>
          )
        }}
        
      </createContext.Consumer>
    
  )
}
export default SonContext