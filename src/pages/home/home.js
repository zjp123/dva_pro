import {Component} from 'react'
import React from 'react'
import { connect } from "dva"; 
import App from './fuzujian'
import HocRefs from './refz'
import Refzhuanfa from './ctt'


class Home extends Component{
    constructor(props){
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
        this.ctt = React.createRef();
        this.gaoji = React.createRef();

    }
    componentDidMount(){
        console.log(this.ctt.current.value, 'this.ctt')
        // console.log(this.state)
        // console.log(this.dynamics)
        // this.props.dispatch({type: 'count/add'})
        const data = this.props.propmissTest2()
        // console.log(data)
        data.then(res=>{
            console.log(res)
        })

    }
    clickHandle(){
        // console.log(888888)
        // this.props.dispatch({type: 'count/add'})
        this.props.onAddClick()

    }
    render(){
        return (
            <div>
                <App />
                <HocRefs />
                <Refzhuanfa ref={this.ctt}/>
                {/* <h2>{ count }</h2> */}
        {/* <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
        <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button> */}
        <div>这是home页面  ddd</div>
        <div>这是home页面  ddd</div>
        <div>这是home页面  ddd</div>
    <div>这是home页面  {this.props.home.home}</div>
        <button onClick={this.clickHandle}>点我</button>
    <div>{this.props.count.zjp}</div>

            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    // console.log(app, '8888888888')
    return {
        home: state.home,
        count: state.count, //这里的example表示后面用this.props.example获取state（根节点）中exmpale命名空间（model的example.js中的state所有数据）的数据
    }
}
const  mapDispatchToProps = (dispatch, ownProps)=>{
    return {
      onAddClick: () => dispatch({type: 'count/add'}),
      propmissTest:()=> dispatch({type: 'count/propmissTest'}),
      propmissTest2:()=> dispatch({type: 'count/propmissTest2'})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)