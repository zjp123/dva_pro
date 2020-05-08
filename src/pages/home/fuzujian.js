// 父组件
// app.js
import React from 'react'
import FancyButton from './zizujian'
export default class App extends React.Component {
  
    constructor(props) {
      super(props);
      // 创建一个ref 名字随意
      this.fancyButtonRef = React.createRef();
    }
    
    componentDidMount() {
      console.log('ref', this.fancyButtonRef);
      console.log(this.fancyButtonRef, '表示获取ref指向的DOM元素')
      this.fancyButtonRef.current.classList.add('primary'); // 给FancyButton中的button添加一个class
    //   this.ref.current.focus(); // focus到button元素上
    }
    
    render() {
      // 直接使用ref={this.fancyButtonRef}
      return (
          <FancyButton ref={this.fancyButtonRef}>子组件</FancyButton>
      );
    }
  }