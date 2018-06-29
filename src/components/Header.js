import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Modal, Button } from 'antd';

import Login from './Login';
import Register from './Register';
import Forget from './Forget';

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
      <header className="header-container">
        <div className="container">
          <div className="top-row">
            <div className="row">
              <div className="col-md-2 col-sm-6 col-xs-6">
                <div id="logo">
                  {/*<a href="index.html"><img src="images/logo.png" alt="logo"></a>*/}
                  <a href="/"><img src='images/logo.jpg' style={{width: 100}}/></a>
                </div>
              </div>
              <div className="col-sm-6 visible-sm">
                <div className="text-right"><button type="button" className="book-now-btn">Login</button></div>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12 remove-padd">
                <nav className="navbar navbar-default">
                  <div className="navbar-header page-scroll">
                    <button data-target=".navbar-ex1-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                    <ul className="list-unstyled nav1 cl-effect-10">
                      <li onClick={()=>this.props.history.push('/')}><a data-hover="Home" className={pathname=='/'?'active':''}><span>Home</span></a></li>
                      <li onClick={()=>this.props.history.push('/about')}><a data-hover="About" className={pathname=='/about'?'active':''}><span>About</span></a></li>
                      <li onClick={()=>this.props.history.push('/contact')}><a data-hover="Contact Us" className={pathname=='/contact'?'active':''}><span>contact Us</span></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-md-2  col-sm-4 col-xs-12 hidden-sm">
                <div className="text-right"><button type="button"  onClick={this.showModal} className="book-now-btn">Login</button></div>
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
      </header>
    );
  }
}

export default withRouter(Header);
