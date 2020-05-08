import React from 'react';
import { Button } from 'antd';

// 高阶组件
const Input = InputComponent => {
  const forwardRef = (props, ref) => {
    return (
      <InputComponent forwardedRef={ref} {...props}>
        <div>高级组件转发refs</div>
      </InputComponent>
    );
  };
  return React.forwardRef(forwardRef);
};

function logProps(Component) {
    class LogProps extends React.Component {
      componentDidUpdate(prevProps) {
        
      }
  
      render() {
        const {forwardedRef, ...rest} = this.props;
  
        // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
        return <Component ref={forwardedRef} {...rest} />;
        
      }
    }
  
    // 注意 React.forwardRef 回调的第二个参数 “ref”。
    // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
    // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
    return React.forwardRef((props, ref) => {
      return <LogProps {...props} forwardedRef={ref} />;
    });
  }

// 普通组件
const TextInput = ({ forwardedRef, children, ...rest }) => {
  return (
  <div>
    <input ref={forwardedRef} {...rest} />
    {children}
  </div>
  )
};
const TextInput2 = ( props) => {
        console.log(props,'aaaa')
        console.log(this,'ggg')
    return (
        <div>
        <input defaultValue='9999' />
        </div>
    )
    // const forwardRef = (props, ref) => {
    //     return (
    //         <div>
    //             <input tt={ref} defaultValue='9999' />
    //         </div>
    //     )
    // }
    // return React.forwardRef(forwardRef);

  };

const InputField = Input(TextInput);
const ClassRef = logProps(TextInput2)

class HocRefs extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.wrapref = React.createRef();
  }

  handleSubmit = () => {
    // 通过this.inputRef可以拿到TextInput组件中的input
    console.log(this.inputRef)
    console.log(this.wrapref, 'wrapref')
  };

  render() {
    return (
      <div>
        <h1>高阶组件传递refs</h1>
        <InputField ref={this.inputRef} />
        <ClassRef ref={this.wrapref}></ClassRef>
        <Button onClick={this.handleSubmit}>提交</Button>
      </div>
    );
  }
}
export default HocRefs;