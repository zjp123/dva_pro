import React , {Component} from 'react'

import { Table } from 'antd';
import axios from 'axios';
import '../form.less'

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

class YibuTable extends React.Component {
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
    console.log(pagination, 'pagination')
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
      this.setState({
        loading: false,
        data: data.data.results,
        pagination,
      });
    });
  };
  render() {
    // console.log(this.state.pagination, 'paginationpagination')

    return (
      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default YibuTable