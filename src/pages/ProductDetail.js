import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import TableComponent from '../components/TableComponent';
import Dashboard from './Dashboard';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;



class MyInventory extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Dashboard>
      <div className="colorlib-shop">
          <div className="container">
            <div className="row row-pb-lg">
              <div className="col-md-10 col-md-offset-1">
                <div className="product-detail-wrap">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="product-entry">
                        <div className="product-img" style={{backgroundImage: 'url(images/elec_1.jpg)'}}>
                          <p className="tag"><span className="sale">Sale</span></p>
                        </div>
                        <div className="thumb-nail">
                          <a href="#" className="thumb-img" style={{backgroundImage: 'url(images/elec_2.jpg)'}} />
                          <a href="#" className="thumb-img" style={{backgroundImage: 'url(images/elec_3.jpg)'}} />
                          <a href="#" className="thumb-img" style={{backgroundImage: 'url(images/elec_4.jpg)'}} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="desc">
                        <h3>Dummy Product Name</h3>
                        <p className="price">
                          <span>$68.00</span>
                          <span className="rate text-right">
                            <i className="icon-star-full" />
                            <i className="icon-star-full" />
                            <i className="icon-star-full" />
                            <i className="icon-star-full" />
                            <i className="icon-star-half" />
                            (74 Rating)
                          </span>
                        </p>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        <div className="color-wrap">
                          <p className="color-desc">
                            Color:
                            <a href="#" className="color color-1" />
                            <a href="#" className="color color-2" />
                            <a href="#" className="color color-3" />
                            <a href="#" className="color color-4" />
                            <a href="#" className="color color-5" />
                          </p>
                        </div>
                        <div className="size-wrap">
                          <p className="size-desc">
                            Size:
                            <a href="#" className="size size-1">xs</a>
                            <a href="#" className="size size-2">s</a>
                            <a href="#" className="size size-3">m</a>
                            <a href="#" className="size size-4">l</a>
                            <a href="#" className="size size-5">xl</a>
                            <a href="#" className="size size-5">xxl</a>
                          </p>
                        </div>
                        <div className="row row-pb-sm">
                          <div className="col-md-4">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                                  <i className="icon-minus2" />
                                </button>
                              </span>
                              <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} min={1} max={100} />
                              <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                                  <i className="icon-plus2" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <p><a href="cart.html" className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart" /> Add to Cart</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="row">
                  <div className="col-md-12 tabulation">
                    <ul className="nav nav-tabs">
                      <li className="active"><a data-toggle="tab" href="#description">Description</a></li>
                      <li><a data-toggle="tab" href="#manufacturer">Manufacturer</a></li>
                      <li><a data-toggle="tab" href="#review">Reviews</a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="description" className="tab-pane fade in active">
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        <ul>
                          <li>The Big Oxmox advised her not to do so</li>
                          <li>Because there were thousands of bad Commas</li>
                          <li>Wild Question Marks and devious Semikoli</li>
                          <li>She packed her seven versalia</li>
                          <li>tial into the belt and made herself on the way.</li>
                        </ul>
                      </div>
                      <div id="manufacturer" className="tab-pane fade">
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                      </div>
                      <div id="review" className="tab-pane fade">
                        <div className="row">
                          <div className="col-md-7">
                            <h3>23 Reviews</h3>
                            <div className="review">
                              <div className="user-img" style={{backgroundImage: 'url(images/person1.jpg)'}} />
                              <div className="desc">
                                <h4>
                                  <span className="text-left">Jacob Webb</span>
                                  <span className="text-right">14 March 2018</span>
                                </h4>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-half" />
                                    <i className="icon-star-empty" />
                                  </span>
                                  <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                                </p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                              </div>
                            </div>
                            <div className="review">
                              <div className="user-img" style={{backgroundImage: 'url(images/person2.jpg)'}} />
                              <div className="desc">
                                <h4>
                                  <span className="text-left">Jacob Webb</span>
                                  <span className="text-right">14 March 2018</span>
                                </h4>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-half" />
                                    <i className="icon-star-empty" />
                                  </span>
                                  <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                                </p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                              </div>
                            </div>
                            <div className="review">
                              <div className="user-img" style={{backgroundImage: 'url(images/person3.jpg)'}} />
                              <div className="desc">
                                <h4>
                                  <span className="text-left">Jacob Webb</span>
                                  <span className="text-right">14 March 2018</span>
                                </h4>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-half" />
                                    <i className="icon-star-empty" />
                                  </span>
                                  <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                                </p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-md-push-1">
                            <div className="rating-wrap">
                              <h3>Give a Review</h3>
                              <p className="star">
                                <span>
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  (98%)
                                </span>
                                <span>20 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-empty" />
                                  (85%)
                                </span>
                                <span>10 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-empty" />
                                  <i className="icon-star-empty" />
                                  (98%)
                                </span>
                                <span>5 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-empty" />
                                  <i className="icon-star-empty" />
                                  <i className="icon-star-empty" />
                                  (98%)
                                </span>
                                <span>0 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="icon-star-full" />
                                  <i className="icon-star-empty" />
                                  <i className="icon-star-empty" />
                                  <i className="icon-star-empty" />
                                  <i className="icon-star-empty" />
                                  (98%)
                                </span>
                                <span>0 Reviews</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default withRouter(MyInventory);
