import React, { Component } from 'react';

import { Layout, Button, Input, Checkbox, Spin, Icon, Form, Divider, Select } from 'antd';
const FormItem = Form.Item;


class FormTest extends Component{
    constructor(props){
        super(props)
        this.pptest = React.createRef()

    }
    getErrorMsg = field => {
        const { form } = this.props;
        const { getFieldError } = form;
        const errorList = getFieldError(field);
        return errorList ? errorList[0] : null;
      }
    handleSubmit = e => {
        const { form } = this.props;
        e.preventDefault();
        form.validateFields((err, values) => {
          if (!err) {
            console.log(values, '88888')
            // dispatch({
            //   type: 'login/login',
            //   payload: values
            // });
          }
        });
      }

    render(){
        const { form } = this.props;
        const { getFieldDecorator } = form;
        console.log(this.props, 'rporppspsp')

      return (
        <div>
          <FormItem>
                {getFieldDecorator('pptest', {
                  initialValue: '123',
                  rules: [{ required: true, message: '请输入数字' }]
                })(
                  <Input
                    ref={this.props.testref}
                    size="large"
                    prefix={<Icon type="user"/>}
                    placeholder="数字"
                    onBlur={this.handleSubmit}
                  />
                )}
              </FormItem>
        </div>
  
      )
    }
  }
  const Testaa = Form.create()(FormTest)
  const WrapButton = React.forwardRef((props, ref) => (
  
    <Testaa testref={ref}/>
  ));
  export default WrapButton