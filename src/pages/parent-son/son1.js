import React, {Component} from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '哈哈'
    }
    this.inputRef = React.createRef();
    // this.childHanle = this.childHanle.bind(this);
  }

  childHanle = () => {
    console.log('子组件执行了');
  }

  render() {
    return (
      <input type="text" value={this.state.name} onChange={(e) => this.setState(e.target.value)} ref={this.inputRef} />
    )
  }
}
