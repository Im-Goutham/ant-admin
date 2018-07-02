import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Modal, Button,Input } from 'antd';

import Login from './Login';
import Register from './Register';
import Forget from './Forget';

const Search = Input.Search;



class Header extends Component {

  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
    formType:'Login'
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }



  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  changeForm = (formType) => {
      this.setState({formType})
  }



  render() {
   console.log(this.props.history.location.pathname);
   var pathname = this.props.history.location.pathname;
    const { visible, confirmLoading, ModalText , formType} = this.state;
    return (
      <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-xs-2">
                <div id="colorlib-logo">
                          <a href="/"><img src='images/logo.jpg' style={{width: 100,}}/></a>
                </div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <ul>
                  <li className="active" onClick={this.showModal} style={{color:'white'}}><a style={{background: '#007AB7',
    padding: '10px 20px', color:'white !important'}}>Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Modal title={formType}
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            footer={null}
          >
           {formType=='Login'?  <Login changeForm={this.changeForm}/> : formType=='Register' ? <Register changeForm={this.changeForm}/> : <Forget changeForm={this.changeForm}/>}

          </Modal>
      </nav>
    );
  }
}

export default withRouter(Header);
