import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import StepsComponent from '../components/StepsComponent';
import Dashboard from './Dashboard';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;



class Documents extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Dashboard>
            <StepsComponent/>
      </Dashboard>
    );
  }
}

export default withRouter(Documents);
