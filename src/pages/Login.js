import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;



const baseurl = "http://10.2.1.49:5037/api"

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <a className="login-form-forgot" onClick={()=>{this.props.changeForm('forget')}}>Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>{this.props.history.push('dashboard')}}>
            Log in
          </Button>
          Or <a onClick={()=>{this.props.changeForm('register')}}>register now!</a>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(connect(null, actions)(withRouter(Login)));
