import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Table, Icon, Divider, Row , Col , Dropdown ,Button , Menu, message, Input} from 'antd';
const Search = Input.Search;

class TableComponent extends Component {



  constructor(props) {
      super(props);
      this.state = {

      };

  }

   handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }


  render() {

      const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">Action 一 {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
            <Divider type="vertical" />
            <a href="javascript:;" className="ant-dropdown-link">
              More actions <Icon type="down" />
            </a>
          </span>
        ),
      }];

      const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },{
        key: '4',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '5',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },{
        key: '7',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '8',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '9',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }];

      const menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1">1st menu item</Menu.Item>
          <Menu.Item key="2">2nd menu item</Menu.Item>
          <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
      );

    return (
      <div>
      <Row>
      <Search
          placeholder="Search Product"
          onSearch={value => console.log(value)}
          enterButton
          style={{margin:'50px 0px'}}
        />
      </Row>
       <Row>
           <Col span={5}>
             <p>Category</p>
             <Dropdown overlay={menu}>
               <Button style={{ width: '80%' }}>
                 Please select <Icon type="down" />
               </Button>
             </Dropdown>
           </Col>
           <Col span={5}>
              <p>Brand</p>
              <Dropdown overlay={menu}>
                <Button style={{ width: '80%' }}>
                  Please select <Icon type="down" />
                </Button>
              </Dropdown>
           </Col>
           <Col span={5}>
               <p>Ram</p>
               <Dropdown overlay={menu}>
                 <Button style={{ width: '80%' }}>
                   Please select <Icon type="down" />
                 </Button>
             </Dropdown>
           </Col>
           <Col span={4}>
               <p>Rom</p>
               <Dropdown overlay={menu}>
                 <Button style={{ width: '80%' }}>
                   Please select <Icon type="down" />
                 </Button>
               </Dropdown>
           </Col>
           <Col span={5}>
               <p>Color</p>
               <Dropdown overlay={menu}>
                 <Button style={{ width: '80%' }}>
                   Please select <Icon type="down" />
                 </Button>
               </Dropdown>
           </Col>
       </Row>
       <div style={{marginTop: 50}}>
       <Table columns={columns} dataSource={data}/>
       </div>
      </div>
    );
  }
}

export default withRouter(TableComponent);
