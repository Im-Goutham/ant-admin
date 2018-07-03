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
                      <span className="addtocart"><a href="cart.html"><i className="icon-shopping-cart" /></a></span>
                      <span><a href="product-detail.html"><i className="icon-eye" /></a></span>
                      <span><a href="#"><i className="icon-heart3" /></a></span>
                      <span><a href="add-to-wishlist.html"><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="shop.html">Floral Dress</a></h3>
                  <p className="price"><span>$199.00</span> <span className="sale">$300.00</span> </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_2.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a href="cart.html"><i className="icon-shopping-cart" /></a></span>
                      <span><a href="product-detail.html"><i className="icon-eye" /></a></span>
                      <span><a href="#"><i className="icon-heart3" /></a></span>
                      <span><a href="add-to-wishlist.html"><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="shop.html">Floral Dress</a></h3>
                  <p className="price"><span>$300.00</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_3.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a href="cart.html"><i className="icon-shopping-cart" /></a></span>
                      <span><a href="product-detail.html"><i className="icon-eye" /></a></span>
                      <span><a href="#"><i className="icon-heart3" /></a></span>
                      <span><a href="add-to-wishlist.html"><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="shop.html">Floral Dress</a></h3>
                  <p className="price"><span>$300.00</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_4.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a href="cart.html"><i className="icon-shopping-cart" /></a></span>
                      <span><a href="product-detail.html"><i className="icon-eye" /></a></span>
                      <span><a href="#"><i className="icon-heart3" /></a></span>
                      <span><a href="add-to-wishlist.html"><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="shop.html">Floral Dress</a></h3>
                  <p className="price"><span>$300.00</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_1.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a href="cart.html"><i className="icon-shopping-cart" /></a></span>
                      <span><a href="product-detail.html"><i className="icon-eye" /></a></span>
                      <span><a href="#"><i className="icon-heart3" /></a></span>
                      <span><a href="add-to-wishlist.html"><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="shop.html">Floral Dress</a></h3>
                  <p className="price"><span>$300.00</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_2.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a href="cart.html"><i className="icon-shopping-cart" /></a></span>
                      <span><a href="product-detail.html"><i className="icon-eye" /></a></span>
                      <span><a href="#"><i className="icon-heart3" /></a></span>
                      <span><a href="add-to-wishlist.html"><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="shop.html">Floral Dress</a></h3>
                  <p className="price"><span>$300.00</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_3.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a href="cart.html"><i className="icon-shopping-cart" /></a></span>
                      <span><a href="product-detail.html"><i className="icon-eye" /></a></span>
                      <span><a href="#"><i className="icon-heart3" /></a></span>
                      <span><a href="add-to-wishlist.html"><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="shop.html">Floral Dress</a></h3>
                  <p className="price"><span>$300.00</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="product-entry">
                <div className="product-img" style={{backgroundImage: 'url(images/elec_4.jpg)'}}  onClick={()=>{this.props.history.push('productDetail')}}>
                  <p className="tag"><span className="new">New</span></p>
                  <div className="cart">
                    <p>
                      <span className="addtocart"><a href="cart.html"><i className="icon-shopping-cart" /></a></span>
                      <span><a href="product-detail.html"><i className="icon-eye" /></a></span>
                      <span><a href="#"><i className="icon-heart3" /></a></span>
                      <span><a href="add-to-wishlist.html"><i className="icon-bar-chart" /></a></span>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="shop.html">Floral Dress</a></h3>
                  <p className="price"><span>$300.00</span></p>
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
