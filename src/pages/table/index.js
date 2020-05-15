import React from 'react'
import BaseTable from './table'
import Headerable from './heaerTable'
import CheckTable from './checkTable'
import DiyCheckTable from './diyCheckTable'
import {Divider} from 'antd'

export default class TableWrap extends React.Component{

  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center'}}>基本表格</h1>
        <BaseTable />
        <Divider />
        <h1 style={{textAlign: 'center'}}>表头表格</h1>
        <Headerable />
        <h1 style={{textAlign: 'center'}}>复选框表格</h1>
        <CheckTable />
        <h1 style={{textAlign: 'center'}}>自定义复选框表格</h1>
        <DiyCheckTable />
      </div>
    )
  }
}