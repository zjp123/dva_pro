import React, { Component } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Form } from '@ant-design/compatible';
// import '@ant-design/compatible/assets/index.css';
import { DatePicker, Layout, Button, Input, Checkbox, Spin, Icon, Form, Divider, Select } from 'antd';
import logoImg from '../../../assets/images/logo1.png';
import './index.less';
import typeDec from '../../../utils/zhuangshiqi'
import FormTest from './formtest'
// const { Link } = router;
const { Content } = Layout;
const { Option } = Select;
const FormItem = Form.Item;



const Page = ({name , age})=>{
  // console.log(name, age)
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}
class TestRender extends Component{

  render(){
    const {children, render} = this.props
    return (
      <div>
        {children}
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" 
        style={{fontSize: '48px'}}
        />
      </div>

    )
  }
}


@connect(({ login, loading }) => ({
  login,
  loading: loading.models.loading,
  aa: loading,
  userIno:login.userIno
}))
@typeDec
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: null,
      isshow: false
    }
    this.myref = React.createRef()
    this.onChange = this.onChange.bind(this)
    this.timeChange = this.timeChange.bind(this)
  }
  componentDidMount(){
    const { form, dispatch } = this.props;
    dispatch({
      type: 'login/login',
      
    });
  }
  handleSubmit = e => {
    const { form, dispatch } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        // console.log(values, this.props)
        // console.log(this.ref, 'ref')

        // console.log(this.ref.current.value, 'this.myref')
        const aa = dispatch({
          type: 'login/setUserInfo',
          
        });
        console.log(aa, 'aaaaaaaaaaaa')
      }
      // console.log(this.ref.current.value, 'this.myref')

    });
  };
  getQueryString(search,name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = search.substr(1).match(reg);  
    if (r != null) return decodeURI(r[2]);
    return null;  
 }
 onChange(value) {
  console.log(`selected ${value}`);
  this.setState({
    value:value
  })
}

onBlur() {
  console.log('blur');
}

onFocus() {
  console.log('focus');
}

onSearch(val) {
  console.log('search:', val);
}
timeChange(){

}
  render() {
    console.log('loading', this.props.loading)
    // let search = this.props.location.search
    // search = decodeURIComponent(search)
    // search = this.getQueryString(search,'aaa')
    // console.log('loading-seee', search)

    console.log(this.props.userIno, 'userInfo')
    const { loading, form } = this.props;
    const { getFieldDecorator } = form;
    const name = 'zjp'
    const age = 88
    const {isshow} = this.state
    return (
      <Layout className="full-layout login-page">
        <Content>
          <Spin tip="登录中..." spinning={!!loading}>
          {/* <Input style={{width:'300px'}} placeholder="Basic usage" /> */}
          <TestRender>
            <Input style={{width:'300px'}} placeholder="Basic usage" />
          </TestRender>

          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            value={this.state.value}
            defaultValue="jack"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value={null}>----</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <div className="pptest">
            {/* <FormTest ref={this.myref}/> */}
            <FormTest ref={this.myref}/>
          </div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <div className="user-img">
                <img src={logoImg} alt="logo" />
                <b>LANIF</b>
                <span>Admin</span>
              </div>
              <FormItem>
                {getFieldDecorator('userName', {
                  initialValue: 'admin',
                  rules: [{ required: true, message: '请输入您的用户名，示例admin' }]
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user"/>}
                    placeholder="用户名"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  initialValue: 'admin',
                  rules: [{ required: true, message: '请输入您的密码，示例admin' }]
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock"/>}
                    type="password"
                    placeholder="密码"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('data', {
                  // initialValue: 'admin',
                  rules: [{ required: true, message: '请输入时间' }]
                })(
                  <DatePicker onChange={this.timeChange} placeholder='请输入'/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(<Checkbox>记住我</Checkbox>)}
                <Link className="login-form-forgot" to="#">
                  忘记密码
                </Link>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
                <div className="new-user">
                  新用户？<Link to="/sign/register">现在注册</Link>
                </div>
              </FormItem>
            </Form>
            <Page name={name}
                  age={age}
            />
          </Spin>
        </Content>
      </Layout>
    )
  }
}

// class Login extends Component{

//   render(){
//     return (
//       <div>这是登陆页面</div>
//     )
//   }
// }

export default Form.create()(Login);
