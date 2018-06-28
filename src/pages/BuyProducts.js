import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import TableComponent from '../components/TableComponent';
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
            <TableComponent/>
      </Dashboard>
    );
  }
}

export default withRouter(Documents);
