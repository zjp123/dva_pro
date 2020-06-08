import React from 'react'
import Child from './son1'


export default class Parent extends React.Component{

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  focus = () => {
    console.log(this.child.current);
    this.child.current.childHanle();
    this.child.current.inputRef.current.focus();
  }

  render(){
    return (
      <div>
        <Child ref={this.child} />
        <button onClick={this.focus}>获取焦点</button>
      </div>
    )
  }
}