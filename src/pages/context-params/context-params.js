import React, {Component} from 'react'
import ShowContext from './showContext'
import SonContext from './othercontext'
import {
  contextData,
  createContext
} from './paracontext'

export default class ParamContext extends Component{
  
  constructor(props) {
    super(props)
    this.yundong = (arg)=>{
      return ()=>{
          console.log(this,'thitthishtish')
          this.setState(state => ({
              zicontext:{
                  money: state.zicontext.money + arg,
                  yundong: this.yundong
              }

          }))
      }
      
    };
  //   this.yundong = this.yundong.bind(this)
    this.state= {
        checked: false,
        disabled: true,
        zicontext:{
            money: contextData.money,
            yundong: this.yundong
        }
    }
  }

  render(){
    return (
      <createContext.Provider value={this.state.zicontext}>
          <ShowContext />
          <SonContext />
      </createContext.Provider>
    )
  }
}