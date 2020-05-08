
import React from 'react'

const contextData = {
  money: '100万',
  name: 'cui hua',
  yundong(arg){
    return ()=>{
      contextData.money = contextData.money + arg
      console.log(contextData.money)

    }
  }
}

const createContext = React.createContext(contextData.money)

export {
  contextData,
  createContext

}

