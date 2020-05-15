import React from 'react'
import { Table } from 'antd';
// import reqwest from 'reqwest';
import axios from 'axios'
import HebinTable from './hebin_table'
import HeaderGroupTable from './headerGroupTable'
import {Link} from 'dva/router'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

export default class AjaxTable extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    axios({
      url: 'https://randomuser.me/api',
      method: 'get',
      params: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then(data => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      console.log(pagination, 'pagination')
      this.setState({
        loading: false,
        data: data.data.results,
        pagination,
      });
    });
  };

  componentDidMount(){
    console.log('ajaxtable 加载了。。。。')
  }
  componentWillUnmount(){
    console.log('ajaxtable 移除零了。。。。')
  }

  render() {
    return (
      <div>
        <h1>远程加载组件</h1>
        <p style={{fontSize: '16px'}}><Link to='/table-f'>ksksks</Link></p>
        <Table
          style={{marginBottom: '100px'}}
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
        <h1>合并单元格</h1>
        <HebinTable />
        <h1>表头分组</h1>
        <HeaderGroupTable />
      </div>
    );
  }
}
