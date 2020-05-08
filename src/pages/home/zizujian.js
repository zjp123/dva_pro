// FancyButton.js 子组件
import React from 'react';
import { Layout, Button, Input, Checkbox, Spin, Icon, Form, Divider, Select } from 'antd';
const FormItem = Form.Item;

// 接受props和ref作为参数
// 返回一个React 组件
const FancyButton = React.forwardRef((props, ref) => (
    <button className="fancybutton" ref={ref}>
    {props.children}
  </button>
));

// const Testpp = Form.create()(FancyButton)

// export default Testpp;

export default FancyButton