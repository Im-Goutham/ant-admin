import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Carousel, Button } from 'antd';
import TableComponent from '../components/TableComponent';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;



class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  render() {
    console.log(this.props.location.pathname)
    let path = this.props.location.pathname;
    let menuKey = "1";
switch(path) {
   case "/dashboard": {
      menuKey='1';
      break;
   }
   case "/documents": {
        menuKey='2';
      break;
   }
   case "/saleProducts": {
        menuKey='3';
      break;
   }
   case "/buyProducts": {
      menuKey='4';
      break;
   }
   case "/myInventory": {
      menuKey='5';
      break;
   }
   case "/purchaseProducts": {
        menuKey='6';
      break;
   }
   case "/saleOrders": {
        menuKey='7';
      break;
   }
   default: {
        menuKey='1';
      break;
   }
}

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{height:'100vh'}}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[menuKey]} mode="inline">
            <Menu.Item key="1" onClick={()=>{this.props.history.push('dashboard')}}>
              <Icon type="home" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2"  onClick={()=>{this.props.history.push('documents')}}>
              <Icon type="idcard" />
              <span>Documents</span>
            </Menu.Item>
            <Menu.Item key="3"  onClick={()=>{this.props.history.push('saleProducts')}}>
              <Icon type="wallet" />
              <span>Sale Product</span>
            </Menu.Item>
            <Menu.Item key="4"  onClick={()=>{this.props.history.push('buyProducts')}}>
              <Icon type="shopping-cart" />
              <span>Buy Product</span>
            </Menu.Item>
            <Menu.Item key="5"  onClick={()=>{this.props.history.push('myInventory')}}>
              <Icon type="inbox" />
              <span>My Inventory</span>
            </Menu.Item>
            <Menu.Item key="6"  onClick={()=>{this.props.history.push('purchaseProducts')}}>
              <Icon type="bank" />
              <span>My Purchase Orders</span>
            </Menu.Item>
            <Menu.Item key="7"  onClick={()=>{this.props.history.push('saleOrders')}}>
              <Icon type="folder" />
              <span>My Sales Orders</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
             <Button style={{float:'right',margin: 15}} onClick={()=>{this.props.history.push('/')}}>Sign out</Button>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children ? (this.props.children) : ( <Carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Dashboard);