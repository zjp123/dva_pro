import React ,{ Component } from 'react'
import {Form} from 'antd'

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => {
  console.log(index, props, 'edit table')
  return (
  <EditableContext.Provider value={{zjp: 'zxy', age:18}}>
    <ConsumerTest />
  </EditableContext.Provider>
)};


class ConsumerTest extends Component{
  testaa(arg){
    console.log(arg, 'ConsumerTestConsumerTest')
    return (
      <div>这是测试 consumer</div>
    )
  }
  render(){
    return (
      <EditableContext.Consumer>
        {this.testaa}
        {/* {this.props} */}
        {/* <span>888</span> */}
        
      </EditableContext.Consumer>
    )
  }
}

const EditableFormRow = Form.create()(EditableRow);

export default EditableFormRow