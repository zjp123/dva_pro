import { createForm, createFormField, formShape } from 'rc-form';
import React, { Component } from 'react';
import {
    contextData,
    createContext
  } from './context'
import Yanzhengma from './yanzhengma'
import ShowContext from './showContext'
import ModelContent from './showModel'
import ShowTable from './showTable'
import YibuTable from './yibutable'
import EditableTable from './editTable'
import '../form.less'
import PropTypes from 'prop-types';
import {Row, Col, Form, DatePicker, Select, Input, Checkbox, Button,
        Upload, Icon, message
       } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const FormItem = Form.Item;
const {Option} = Select;
const { Dragger } = Upload;
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const today = moment().format(dateFormat)
const tomorry = moment().add(1, 'days').format(dateFormat)


@createForm()
class FilterBar extends Component{

    constructor(props){
        super(props)
        this.datepickOnChange = this.datepickOnChange.bind(this)
        this.rangeonChange = this.rangeonChange.bind(this)
        this.disabledDate = this.disabledDate.bind(this)
        this.selectHandleChange = this.selectHandleChange.bind(this)
        this.checkOnChange =  this.checkOnChange.bind(this)
        this.buttonHandle = this.buttonHandle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // let contextData = ShowContext.contextData
        // console.log(contextData, 'contextDatacontextDatacontextData')
        // let me = this

        this.yundong = (arg)=>{
            return ()=>{
                console.log(this,'thitthishtish')
                this.setState(state => ({
                    zicontext:{
                        money: state.zicontext.money + arg,
                        yundong: this.yundong
                    }
  
                }))
            }
            
          };
        //   this.yundong = this.yundong.bind(this)
        this.state= {
            checked: false,
            disabled: true,
            zicontext:{
                money: contextData.money,
                yundong: this.yundong
            }
        }
    }
    disabledDate(current) {
        // Can not select days before today and today
        return current && current > moment().endOf('day');
    }
    rangeonChange(dates, dateStrings) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    }
    datepickOnChange(value, dateString){
        console.log('Selected Time: ', moment(value).format(dateFormat));
        // console.log('Selected : ', moment().format(dateFormat))
        // console.log('Formatted Selected Time: ', dateString);
    }
    selectHandleChange(value){
        console.log(`selected ${value}`);
    }
    checkOnChange (e){
        console.log('checked = ', e.target.checked);
        this.setState({
          checked: e.target.checked,
          disabled: !e.target.checked,
          
        });
      };
    buttonHandle(e){
      this.handleSubmit(e)
    }
    handleSubmit (e){
        const { form } = this.props;
        e.preventDefault();
        form.validateFields((err, values) => {
          if (!err) {
            console.log(values, '88888')
            // dispatch({
            //   type: 'login/login',
            //   payload: values
            // });
          }
        });
    }
    getErrorMsg=(filed)=>{
        let error = {}
        const {form} = this.props
        const {getFieldsError} = form
        const errorlist = getFieldsError()
        // console.log(errorlist, 'errorlisterrorlist')
        for(const key in errorlist){
            if(errorlist.hasOwnProperty(key) && errorlist[key]){
                error = {
                    [key]: errorlist[key]
                }
                break
            }
        }
        return error[filed] ? error[filed][0] : null
    }
    render(){
        const { form } = this.props
        const {getFieldDecorator} = form
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}`
        const options = [
            {
                value: 'test1',
                text:'test1'
            },
            {
                value: 'test2',
                text:'test2'
            },
            {
                value: 'dd',
                text:'dd'
            }
        ]
        const children = []
        options.map(v=>{
            children.push(<Option key={v.text}>{v.value}</Option>);
        })
        const uploadProps = {
            name: 'file',
            multiple: true,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            beforeUpload(file) {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                  message.error('You can only upload JPG/PNG file!');
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                  message.error('Image must smaller than 2MB!');
                }
                return isJpgOrPng && isLt2M;
            },
            onChange(info) {
              const { status, } = info.file;
              const { event } = info;
              
            //   event.target
            //   console.log(status,event )
            //   if(event){
            //       console.log(event.loaded, 'loaded')
            //   }
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };
        return (
            <div className="container">
              <Form>
                <Row>
                    <Col span={8} className="time">
                        <FormItem label="datepicker">
                            {
                              getFieldDecorator('date',{
                                  
                                initialValue: moment('2020-04-06', dateFormat),
                                rules: [{required: true, message: '请输入日期' }]
                              })(
                                <DatePicker
                                locale={locale}
                                 disabledDate={this.disabledDate}
                                 placeholder="请选择日期" onChange={this.datepickOnChange} 
                                 ranges={{
                                    Today: [moment(), moment()],
                                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                                  }}
                            
                                 >
                                 
                                </DatePicker>
                               ) 
                            }
                        </FormItem>
                    </Col>
                    <Col span={8} className="time">
                        <FormItem label="range-datepicker">
                            {
                              getFieldDecorator('rangedate',{
                                  
                                // initialValue: moment('2020-04-09', dateFormat),
                                rules: [{ required: true, message: '请选择日期' }]
                              })(
                                <RangePicker
                                 locale={locale}
                                 disabledDate={this.disabledDate}
                                 placeholder="请选择日期" onChange={this.rangeonChange} 
                                 ranges={{
                                    Today: [moment(), moment()],
                                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                                  }}
                            
                                 >
                                 
                                </RangePicker>
                               ) 
                            }
                        </FormItem>
                    </Col>
                    <Col span={8} className="time">
                        <FormItem label="业务类型">
                            {
                              getFieldDecorator('select',{
                                  
                                initialValue: 'pp',
                              })(
                                <Select  
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    {
                                    console.log(input, option)
                                    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                  }
                                onChange={this.selectHandleChange}style={{minWidth:'260px'}}>
                                    {children}
                                </Select>
                               ) 
                            }
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} className="time">
                        <FormItem label="text" error={this.getErrorMsg('text')}>
                            {
                              getFieldDecorator('text',{
                                  
                                initialValue: 99,
                                rules: [{required: true, message: 'sui bian ' }]
                              })(
                                <Input placeholder="请输入明码"/>
                               ) 
                            }
                        </FormItem>
                    </Col>
                    <Col span={8} className="time">
                            <Yanzhengma form={form} FormItem={FormItem}/>
                    </Col>
                    <Col span={8} className="time">
                        <FormItem label="isagree">
                            {
                              getFieldDecorator('isagree',{
                                  
                                // initialValue: 99,
                                rules: [{required: true, message: '请同意' }]
                              })(
                                <Checkbox
                                    checked={this.state.checked}
                                    // disabled={this.state.disabled}
                                    onChange={this.checkOnChange}
                                >
                                    {label}
                                </Checkbox>
                               ) 
                            }
                            
                        </FormItem>
                    </Col>
                    
                </Row>
                </Form>
                <div>
                <Row>
                    <Col span={8} className="upload">
                        <Dragger {...uploadProps}>
                            <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                            </p>
                        </Dragger>
                    </Col>
                    <Col span={8} className="time">
                        <ModelContent />
                    </Col>
             
                </Row>
                </div>
                <div>
                <Row>
                    <Col span={8} className="time">
                        <createContext.Provider value={this.state.zicontext}>
                            <ShowContext />
                        </createContext.Provider>
                    </Col>
             
                </Row>
                </div>
                <div>
                <Button onClick={this.buttonHandle} disabled={this.state.disabled} type="primary">确定</Button>
                </div>
                <ShowTable zjp="zhangjunpeng"/>
                <YibuTable />
                <EditableTable />
            </div>

        )
    }
    
}

export default Form.create()(FilterBar)