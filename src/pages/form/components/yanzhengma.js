import React , {Component} from 'react'
import {Input} from 'antd'

class Yanzhengma extends Component{

  render(){
    const {form, FormItem} = this.props
    const {getFieldDecorator} = form

    return (
      <div>
        <FormItem label="验证码">
            {
              getFieldDecorator('yanzhengma',)(
                <Input placeholder="请输入验证码"/>

                ) 
            }
        </FormItem>
      </div>
    )
  }
}

export default Yanzhengma