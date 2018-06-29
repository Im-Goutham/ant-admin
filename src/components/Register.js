import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;



const baseurl = "http://10.2.1.49:5037/api"

class Register extends Component {

  state = {
     confirmDirty: false,
     autoCompleteResult: [],
   };
   handleSubmit = (e) => {
     e.preventDefault();
     this.props.form.validateFieldsAndScroll((err, values) => {
       if (!err) {
         console.log('Received values of form: ', values);
       }
     });
   }
   handleConfirmBlur = (e) => {
     const value = e.target.value;
     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
   }
   compareToFirstPassword = (rule, value, callback) => {
     const form = this.props.form;
     if (value && value !== form.getFieldValue('password')) {
       callback('Two passwords that you enter is inconsistent!');
     } else {
       callback();
     }
   }
   validateToNextPassword = (rule, value, callback) => {
     const form = this.props.form;
     if (value && this.state.confirmDirty) {
       form.validateFields(['confirm'], { force: true });
     }
     callback();
   }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
                  {getFieldDecorator('confirm', {
                    rules: [{
                      required: true, message: 'Please confirm your password!',
                    }, {
                      validator: this.compareToFirstPassword,
                    }],
                  })(
                    <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  type="password" onBlur={this.handleConfirmBlur} placeholder="Confirm Password" />
                  )}
                </FormItem>
        <FormItem>
        <FormItem
      >
        {getFieldDecorator('phone', {
          rules: [{ required: true, message: 'Please input your phone number!' }],
        })(
          <Input  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}  style={{ width: '100%' }}  placeholder="Mobile Number" />
        )}
      </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button"  onClick={()=>{this.props.history.push('dashboard')}}>
            Register
          </Button>
          Or <a className='linkText' onClick={()=>{this.props.changeForm('Login')}}>Login!</a>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(connect(null, actions)(withRouter(Register)));
