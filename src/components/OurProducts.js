import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {Input ,Row, Col } from 'antd';
const Search = Input.Search;


class OurProducts extends Component {



  constructor(props) {
      super(props);
      this.state = {

      };


  }



  render() {

    return (
      <div>
      <div className="colorlib-shop">
        <div>
          <div className="row">
            <div className="text-center" style={{marginBottom:50}}>
            <Row>
              <Col span={8}>
                <h2><span>Products</span></h2>
              </Col>
              <Col span={16}>
              <Search
                  placeholder="Search within results"
                  onSearch={value => console.log(value)}
                  enterButton
                />
              </Col>
            </Row>

            </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_1.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="sale">Sale</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a><i className="icon-shopping-cart" /></a></span>
                      <span><a><i className="icon-eye" /></a></span>
                      <span><a><i className="icon-heart3" /></a></span>
                      <span><a><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a>Motorolo G4</a></h3>
                  <Row>
                     <Col span={12}>
                         <h5>Sales</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Purchases</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Cancellations</h5>
                     </Col>
                     <Col span={12}>
                         <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_2.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a ><i className="icon-shopping-cart" /></a></span>
                      <span><a><i className="icon-eye" /></a></span>
                      <span><a><i className="icon-heart3" /></a></span>
                      <span><a><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a>One Plus 3T</a></h3>
                  <Row>
                     <Col span={12}>
                         <h5>Sales</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Purchases</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Cancellations</h5>
                     </Col>
                     <Col span={12}>
                         <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_3.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a><i className="icon-shopping-cart" /></a></span>
                      <span><a><i className="icon-eye" /></a></span>
                      <span><a><i className="icon-heart3" /></a></span>
                      <span><a><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a>iPhone X(64GB)</a></h3>
                  <Row>
                     <Col span={12}>
                         <h5>Sales</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Purchases</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Cancellations</h5>
                     </Col>
                     <Col span={12}>
                         <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_4.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a><i className="icon-shopping-cart" /></a></span>
                      <span><a><i className="icon-eye" /></a></span>
                      <span><a><i className="icon-heart3" /></a></span>
                      <span><a><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a>Motorolo G4</a></h3>
                  <Row>
                     <Col span={12}>
                         <h5>Sales</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Purchases</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Cancellations</h5>
                     </Col>
                     <Col span={12}>
                         <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_1.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a><i className="icon-shopping-cart" /></a></span>
                      <span><a><i className="icon-eye" /></a></span>
                      <span><a><i className="icon-heart3" /></a></span>
                      <span><a><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a>One Plus 4T</a></h3>
                  <Row>
                     <Col span={12}>
                         <h5>Sales</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Purchases</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Cancellations</h5>
                     </Col>
                     <Col span={12}>
                         <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_2.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a><i className="icon-shopping-cart" /></a></span>
                      <span><a><i className="icon-eye" /></a></span>
                      <span><a><i className="icon-heart3" /></a></span>
                      <span><a><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a>Samsung G</a></h3>
                  <Row>
                     <Col span={12}>
                         <h5>Sales</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Purchases</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Cancellations</h5>
                     </Col>
                     <Col span={12}>
                         <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_3.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a><i className="icon-shopping-cart" /></a></span>
                      <span><a><i className="icon-eye" /></a></span>
                      <span><a><i className="icon-heart3" /></a></span>
                      <span><a><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a>Moto G4</a></h3>
                  <Row>
                     <Col span={12}>
                         <h5>Sales</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Purchases</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Cancellations</h5>
                     </Col>
                     <Col span={12}>
                         <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_4.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a><i className="icon-shopping-cart" /></a></span>
                      <span><a><i className="icon-eye" /></a></span>
                      <span><a><i className="icon-heart3" /></a></span>
                      <span><a><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a>Vivo V7</a></h3>
                  <Row>
                     <Col span={12}>
                         <h5>Sales</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Purchases</h5>
                     </Col>
                     <Col span={12}>
                       <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                         <h5>Cancellations</h5>
                     </Col>
                     <Col span={12}>
                         <span className="sale" style={{color:'#007AB7'}}>10</span>
                     </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default withRouter(OurProducts);
