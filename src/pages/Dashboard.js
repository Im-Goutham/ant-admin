import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Carousel, Button,Input,Row, Col ,Divider, List, Avatar  } from 'antd';
import TableComponent from '../components/TableComponent';
import Header from '../components/Header';
import OurProducts from '../components/OurProducts';
import Footer from '../components/Footer';
const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

const data = [
  {
    title: 'Motorolo G4',
  },
  {
    title: 'Motorolo G4',
  },
  {
    title: 'Motorolo G4',
  },
  {
    title: 'Motorolo G4',
  },
];


class Dashboard extends React.Component {
  state = {
    collapsed: true,
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

   var pathname = this.props.history.location.pathname;

    return (
      <div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" >
             <a href="/"><img src='images/eol-transparent.png' style={{width: '100%',
    height: '100%'}}/></a>
          </div>
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
      <Header toggle={this.toggle.bind(this)}/>
          <Row>
            <Col span={pathname=='/dashboard' ? 18 : 24}>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              {this.props.children ? (this.props.children) : (<OurProducts/>)}
            </Content>
            </Col>
            <Col span={pathname=='/dashboard' ? 6 : 0}>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <div>
                 <h5>History / Notifications</h5>
                     <Divider />
                     <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src="images/elec_1.jpg" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                  <div style={{marginTop:30}}>
                    <h5>Buisiness / Notifications</h5>
                        <Divider />
                        <List
                         itemLayout="horizontal"
                         dataSource={data}
                         renderItem={item => (
                           <List.Item>
                             <List.Item.Meta
                               avatar={<Avatar src="images/elec_1.jpg" />}
                               title={<a href="https://ant.design">{item.title}</a>}
                             />
                           </List.Item>
                         )}
                       />
                  </div>
              </Content>
            </Col>
          </Row>

        </Layout>
      </Layout>
              <Footer/>
      </div>

    );
  }
}

export default withRouter(Dashboard);
