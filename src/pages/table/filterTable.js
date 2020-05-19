import React from 'react'
import { Table, Button, } from 'antd';
import FilterSortTable from './fie_sort_table'
import DiyFilterTable from './diy_fiter_table'
import ExportJsonExcel from 'js-export-excel';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}


export default class FilterTable extends React.Component{

  //导出为excel文件的方法
	downloadFileToExcel = () => {
    // const { getRepaymentPlanList } = this.props;  //从props中获取数据源
    const filterData = data.filter((v)=>{
      return v.age <=32
    })
		let option = {};  //option代表的就是excel文件
		let dataTable = [];  //excel文件中的数据内容
		if (filterData && filterData.length > 0) {
			for (let i in filterData) {  //循环获取excel中每一行的数据
				// let _planDay = formatTime(getRepaymentPlanList[i].planDay, true);  //格式化日期（自定义方法）
				let obj = {
           			'姓名': filterData[i].name,
           			// '计划还款日': _planDay,
           			'年龄': filterData[i].age,
           			'地址': filterData[i].address,
           			// '还款利息': getRepaymentPlanList[i].currentInterest,
            	}
            	dataTable.push(obj);  //设置excel中每列所获取的数据源
            }
        }
        option.fileName = '人名信息';  //excel文件名称
        option.datas = [
      		{
        		sheetData: dataTable,  //excel文件中的数据源
        		sheetName: '人名信息',  //excel文件中sheet页名称
        		sheetFilter: ['姓名', '年龄', '地址'],  //excel文件中需显示的列数据
        		sheetHeader: ['姓名', '年龄', '地址'],  //excel文件中每列的表头名称
      		}
    	]
    	let toExcel = new ExportJsonExcel(option);  //生成excel文件
    	toExcel.saveExcel();  //下载excel文件
	}

  render(){
    return(
      <div>
        <Button type="primary" onClick={this.downloadFileToExcel}>导出</Button>
        <Table columns={columns} dataSource={data} onChange={onChange} />
        <hr />
        <h1>筛选与过滤</h1>
        <FilterSortTable />
        <h1>自定义过滤</h1>
        <DiyFilterTable />
      </div>
    )
  }
}