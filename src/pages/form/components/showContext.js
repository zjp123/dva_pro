import React , {Component} from 'react'
import {createContext} from './context'
import { Button } from 'antd'
class ShowContext extends Component {

  static contextType = createContext
  constructor(props){
    super(props)
    
  }
  contextHandle= (e) => {
    
  }
  render(){
    const {fuzujian_context} = this.props
    const constextTest = this.context

    // console.log(this.props, 'this.props')
    return (
      <createContext.Consumer>
        {({money, yundong}) => {
          // console.log(money, yundong)
          return (
            <div>
              改变context-copy：{money}
              <Button onClick={yundong('pps')}>改变context</Button>
            </div>
          )
        }}
        
      </createContext.Consumer>
    )
  }
}

export default ShowContext