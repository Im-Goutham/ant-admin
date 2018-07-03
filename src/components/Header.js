import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Modal, Button,Input, Row,Menu, Dropdown, Col, Icon, Layout, Avatar } from 'antd';

import Login from './Login';
import Register from './Register';
import Forget from './Forget';

const Search = Input.Search;
const { Header, Content, Sider } = Layout;


class HeaderComponent extends Component {

  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
    formType:'Login',
    visibleDropDown: false
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

  handleVisibleChange = (flag) => {
    this.setState({ visibleDropDown: flag });
  }


  render() {
   console.log(this.props.history.location.pathname);
   var pathname = this.props.history.location.pathname;
    const { visible, confirmLoading, ModalText , formType} = this.state;
    console.log('pathname is '+pathname);
    const menu = (
  <Menu onClick={()=>{this.setState({visibleDropDown:false})}}>
    <Menu.Item key="1">Sign out</Menu.Item>
  </Menu>
);
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
      <Row>
 <Col span={2}>
 <Icon
   className="trigger"
   type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
   onClick={this.props.toggle}
 />
 </Col>
 <Col span={19}>
 <Search
     placeholder="Find Seller / Products"
     onSearch={value => console.log(value)}
     enterButton
   />
 </Col>
 <Col span={3} style={{textAlign:'center'}}>
 {
   (pathname=='/')?(
     <Button style={{float:'right',margin: 15}} onClick={this.showModal.bind(this)}>Login</Button>
   ):(
     <Dropdown overlay={menu}
           onVisibleChange={this.handleVisibleChange.bind(this)}
           visible={this.state.visibleDropDown}
         >
         <Avatar size="large" icon="user" />
     </Dropdown>
   )
 }

 </Col>
</Row>
<Modal title={formType}
    visible={visible}
    onOk={this.handleOk}
    confirmLoading={confirmLoading}
    onCancel={this.handleCancel}
    footer={null}
  >
   {formType=='Login'?  <Login changeForm={this.changeForm}/> : formType=='Register' ? <Register changeForm={this.changeForm}/> : <Forget changeForm={this.changeForm}/>}

  </Modal>
      </Header>
    );
  }
}

export default withRouter(HeaderComponent);
