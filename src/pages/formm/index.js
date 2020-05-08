import { createForm, createFormField, formShape } from 'rc-form';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { combineReducers, createStore } from 'redux';
import { Provider, connect } from 'dva';
import ReactDOM from 'react-dom';
// import { regionStyle, errorStyle } from './styles';


class Form extends Component {
  static propTypes = {
    form: formShape,
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    console.log('oooo', this.props);
    // const { formState } = this.props;

    console.log(getFieldProps('email', {
      rules: [{
        type: 'email',
      }],
    }), 'pppppp')
    const errors = getFieldError('email');
    return (<div >
      <div>email:</div>
      <div>
        <input  {...getFieldProps('email', {
          rules: [{
            type: 'email',
          }],
        })}
        /></div>
      <div>
        {(errors) ? errors.join(',') : null}
      </div>
    </div>);
  }
}

class Out extends React.Component {
  static propTypes = {
    email: PropTypes.object,
    dispatch: PropTypes.func,
  };
  setEmail = () => {
      console.log('ddd')
    this.props.dispatch({
      type: 'formm/form',
      payload: {
        email: {
          value: 'yiminghe@gmail.com',
        },
      },
    });
  }
  render() {
    const { email } = this.props;
    return (<div>
      <div>
        email: {email && email.value}
      </div>
      <button onClick={this.setEmail}>set</button>
    </div>);
  }
}

Out = connect((state) => {
    console.log()
  return {
    email: state.formm.email,
  };
})(Out);

// const NewForm = connect()(createForm({
//     mapPropsToFields(props) {
//       console.log('mapPropsToFields', props);
//       return {
//         email: createFormField(props.formState.email),
//       };
//     },
//     onFieldsChange(props, fields) {
//       console.log('onFieldsChange', fields);
//       props.dispatch({
//         type: 'formm/form',
//         payload: fields,
//       });
//     },
//   })(Form));

const NewForm = connect((state) => {
  return {
    formState: {
      email: state.formm.email,
    },
  };
})(createForm({
  mapPropsToFields(props) {
    console.log('mapPropsToFields', props);
    return {
      email: createFormField(props.formState.email),
    };
  },
  onFieldsChange(props, fields) {
    console.log('onFieldsChange', fields);
    props.dispatch({
      type: 'formm/form',
      payload: fields,
    });
  },
})(Form));

class FormApp extends React.Component {
  render() {
    return (        
      <div>
        <h2>integrate with redux</h2>
        <NewForm />
        <Out />
      </div>
    )
  }
}


export default FormApp


// 心得：
// 第一步 通过createForm 里面的mapPropsToFields(props)这个方法可以拿到 该组件身上传来的props，来做初始值的事情
// 第二部：可以结合connect 从store 里面拿到数据 变成props  初始化数据，然后在通过onFieldsChange 把数据保存到store