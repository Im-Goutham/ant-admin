import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;



const baseurl = "http://10.2.1.49:5037/api"

class Forget extends Component {

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
      <Form onSubmit={this.handleSubmit} className="Forget-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="Forget-form-button">
            Send mail
          </Button>
          Or <a onClick={()=>{this.props.changeForm('login')}}>Login!</a>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(connect(null, actions)(withRouter(Forget)));
