import React , {Component} from 'react'
import { Table, Divider, Tag, Checkbox } from 'antd'

class ShowTable extends Component{
  keyRow=(record)=>{
       return record.name
  }
  tableComponents={
    
      body:{
        row:({record})=>{// 这里能拿到record 是因为onRow 做了事情
          // console.log(props,'propsprops')
          const {name, age,address} = record || {}
          return (
            // <tr>
            //   <td>lll</td>
            //   <td>ddd</td>
            // </tr>
            <tr>
              <td><Checkbox /></td>

              <td>{name + 'zjp'}</td>
              <td>{age + 18}</td>
              <td>{address}</td>
              <td>{<span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <span name={record.name} onClick={this.tdHandleClick}>tt</span>
          </span>}</td>
            </tr>
          )
        }
      }
    
  }
  tdHandleClick=(e)=>{
    const name = e.target.getAttribute('name')
    console.log(name, 'tdtd')

    
  }
  renderRow=(record)=>{
    const {zjp} = this.props
    return {
      zjp,
      record
    }
  }
  renderCell=(record)=>{
    const {zjp} = this.props
    return {
      zjp,
      record
    }
  }
  render(){
    const dataSource = [
      {
        // key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        // key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
      //   onCell: record => {
      //     console.log(record, 'oncelll')
      //     return {
      //       record,
      //       // editable: col.editable,
      //       // dataIndex: col.dataIndex,
      //       // title: col.title,
      //       // handleSave: this.handleSave,
      //     }
      //  },
        render: (text, record) => {
          console.log(record, 'recordrecord')
          return (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <span name={record.name} onClick={this.tdHandleClick}>tt</span>
          </span>
        )},
      },
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === '胡彦斌', // Column configuration not to be checked
        name: record.name,
      }),
    };
    
    return (
      
      <Table 
      // components={this.tableComponents}
      onRow={this.renderRow}
      onCell={this.renderCell}
      rowKey={this.keyRow}
      rowSelection={rowSelection}  
      dataSource={dataSource} 
      columns={columns} />
    )
  }
}


export default ShowTable