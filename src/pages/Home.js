import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Login from './Login';
import Register from './Register';
import Forget from './Forget';

const baseurl = "http://10.2.1.49:5037/api"

class Home extends Component {

constructor() {
   super();
   this.state = {
       formType: 'login'
   }
   this.changeForm = this.changeForm.bind(this);
}


changeForm(formType) {
  alert('formType'+formType)
   this.setState({formType})
}

  render() {
    let { formType } = this.state;
    return (
      <div id="page">
    {/*-header top--*/}
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/*                            <a href="#"> </a>
                                                    <div class="info-block"><i class="fa fa-map"></i>701 Old York Drive Richmond USA.</div>*/}
          </div>
          <div className="col-md-6">
            <div className="social-grid">
              <ul className="list-unstyled text-right">
                <li><a><i className="fa fa-facebook" /></a></li>
                <li><a><i className="fa fa-twitter" /></a></li>
                <li><a><i className="fa fa-linkedin" /></a></li>
                <li><a><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*header-*/}
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
                    <li><a data-hover="Home" className="active"><span>Home</span></a></li>
                    <li><a data-hover="About" href="about.html"><span>About</span></a></li>
                    <li><a data-hover="Contact Us" href="contact.html"><span>contact Us</span></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-md-2  col-sm-4 col-xs-12 hidden-sm">
              <div className="text-right"><button type="button" className="book-now-btn">Login</button></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/*end*/}
    <div id="myCarousel1" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel1" data-slide-to={0} className="active" />
        <li data-target="#myCarousel1" data-slide-to={1} />
        <li data-target="#myCarousel1" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="item active"> <img src="images/banner.png" style={{width: '100%', height: 500}} alt="First slide" />
          <div className="carousel-caption">
            <h1>vacayhome<br /> spa &amp; Resort</h1>
          </div>
        </div>
        <div className="item"> <img src="images/banner2.png" style={{width: '100%', height: 500}} alt="Second slide" />
          <div className="carousel-caption">
            <h1>vacayhome<br /> spa &amp; Resort</h1>
          </div>
        </div>
        <div className="item"> <img src="images/banner3.png" style={{width: '100%', height: 500}} alt="Third slide" />
          <div className="carousel-caption">
            <h1>vacayhome<br /> spa &amp; Resort</h1>
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel1" data-slide="prev"> <img src="images/icons/left-arrow.png" onmouseover="this.src = 'images/icons/left-arrow-hover.png'" onmouseout="this.src = 'images/icons/left-arrow.png'" alt="left" /></a>
      <a className="right carousel-control" href="#myCarousel1" data-slide="next"><img src="images/icons/right-arrow.png" onmouseover="this.src = 'images/icons/right-arrow-hover.png'" onmouseout="this.src = 'images/icons/right-arrow.png'" alt="left" /></a>
    </div>
    <div className="clearfix" />
    {/*service block-*/}
    <section className="service-block">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6 width-50">
            <div className="service-details text-center">
              <div className="service-image">
                <img alt="image" className="img-responsive" src="images/icons/wifi.png" />
              </div>
              <h4><a>free wifi</a></h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 width-50">
            <div className="service-details text-center">
              <div className="service-image">
                <img alt="image" className="img-responsive" src="images/icons/key.png" />
              </div>
              <h4><a>room service</a></h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
            <div className="service-details text-center">
              <div className="service-image">
                <img alt="image" className="img-responsive" src="images/icons/car.png" />
              </div>
              <h4><a>free parking</a></h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
            <div className="service-details text-center">
              <div className="service-image">
                <img alt="image" className="img-responsive" src="images/icons/user.png" />
              </div>
              <h4><a>customer support</a></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*gallery block-*/}
    <section className="gallery-block gallery-front">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="gallery-image">
              <img className="img-responsive" src="images/room1.png" />
              <div className="overlay">
                <a className="info pop example-image-link img-responsive" href="images/room1.png" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true" /></a>
                <p><a>delux room</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="gallery-image">
              <img className="img-responsive" src="images/room2.png" />
              <div className="overlay">
                <a className="info pop example-image-link img-responsive" href="images/room2.png" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true" /></a>
                <p><a>super room</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="gallery-image">
              <img className="img-responsive" src="images/room3.png" />
              <div className="overlay">
                <a className="info pop example-image-link img-responsive" href="images/room3.png" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true" /></a>
                <p><a>single room</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="gallery-image">
              <img className="img-responsive" src="images/room4.png" />
              <div className="overlay">
                <a className="info pop example-image-link img-responsive" href="images/room4.png" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true" /></a>
                <p><a>double room</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*offer block*/}
    <section className="vacation-offer-block">
      <div className="vacation-offer-bgbanner">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6 col-xs-12">
              <div className="vacation-offer-details">
                <h1>Your vacation Awaits</h1>
                <h4>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.</h4>
                <button type="button" className="btn btn-default">Choose a package</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End*/}
    {/*--resort-overview-*/}
    <section className="resort-overview-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
            <div className="side-A">
              <div className="product-thumb">
                <div className="image">
                  <a><img src="images/category1.png" className="img-responsive" alt="image" /></a>
                </div>
              </div>
            </div>
            <div className="side-B">
              <div className="product-desc-side">
                <h3><a>luxury spa</a></h3>
                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc lorem nulla, ornare eu felis luctus non maximus vitae, portt neque. ipsum dolor sit amet, consec adipiscing elit.</p>
                <div className="links"><a href="single-blog.html">Read more</a></div>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
            <div className="side-A">
              <div className="product-thumb">
                <div className="image">
                  <a><img alt="image" className="img-responsive" src="images/category2.png" /></a>
                </div>
              </div>
            </div>
            <div className="side-B">
              <div className="product-desc-side">
                <h3><a>Beatusish ingl</a></h3>
                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc lorem nulla, ornare eu felis luctus non maximus vitae, portt neque. ipsum dolor sit amet, consec adipiscing elit.</p>
                <div className="links"><a href="single-blog.html">Read more</a></div>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
            <div className="side-A">
              <div className="product-desc-side">
                <h3><a>luxury room</a></h3>
                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc lorem nulla, ornare eu felis luctus non maximus vitae, portt neque. ipsum dolor sit amet, consec adipiscing elit.</p>
                <div className="links"><a href="single-blog.html">Read more</a></div>
              </div>
            </div>
            <div className="side-B">
              <div className="product-thumb">
                <div className="image txt-rgt">
                  <a className="arrow-left"><img src="images/category3.png" className="img-responsive" alt="imaga" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
            <div className="side-A">
              <div className="product-desc-side">
                <h3><a>heaven seanery</a></h3>
                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc lorem nulla, ornare eu felis luctus non maximus vitae, portt neque. ipsum dolor sit amet, consec adipiscing elit.</p>
                <div className="links"><a href="single-blog.html">Read more</a></div>
              </div>
            </div>
            <div className="side-B">
              <div className="product-thumb txt-rgt">
                <div className="image">
                  <a className="arrow-left"><img src="images/category4.png" className="img-responsive" alt="imaga" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </section>
    {/*---blog slider---*/}
    {/*blog trainer block*/}
    <section className="blog-block-slider">
      <div className="blog-block-slider-fix-image">
        <div id="myCarousel2" className="carousel slide" data-ride="carousel">
          <div className="container">
            {/* Wrapper for slides */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel2" data-slide-to={0} className="active" />
              <li data-target="#myCarousel2" data-slide-to={1} />
              <li data-target="#myCarousel2" data-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="blog-box">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</p>
                </div>
                <div className="blog-view-box">
                  <div className="media">
                    <div className="media-left">
                      <img src="images/client1.png" className="media-object" />
                    </div>
                    <div className="media-body">
                      <h3 className="media-heading blog-title">Walter Hucko</h3>
                      <h5 className="blog-rev">Satisfied Customer</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog-box">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</p>
                </div>
                <div className="blog-view-box">
                  <div className="media">
                    <div className="media-left">
                      <img src="images/client2.png" className="media-object" />
                    </div>
                    <div className="media-body">
                      <h3 className="media-heading blog-title">Jules Boutin</h3>
                      <h5 className="blog-rev">Satisfied Customer</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog-box">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</p>
                </div>
                <div className="blog-view-box">
                  <div className="media">
                    <div className="media-left">
                      <img src="images/client3.png" className="media-object" />
                    </div>
                    <div className="media-body">
                      <h3 className="media-heading blog-title">Attilio Marzi</h3>
                      <h5 className="blog-rev">Satisfied Customer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
    </section>
    {/*-blog block-*/}
    <section className="blog-block">
      <div className="container">
        <div className="row offspace-45">
          <div className="view-set-block">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="event-blog-image">
                <img alt="image" className="img-responsive" src="images/blog1.png" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
              <div className="event-blog-details">
                <h4><a href="single-blog.html">Lorem ipsum dolor sit amet</a></h4>
                <h5>Post By Admin <a><i aria-hidden="true" className="fa fa-heart-o fa-lg" />Likes</a><a><i aria-hidden="true" className="fa fa-comment-o fa-lg" />comments</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornare turpis neque, eu commodo sapien porta sed. Nam ut ante turpis. Nam arcu odio, scelerisque a vehicula vitae, auctor sit amet lectus. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornard hendrerit tortor vulputate id. Vestibulum mauris nibh, luctus non maximus vitae, porttitor eget neque. Donec tristique nunc facilisis, dapibus libero ac</p>
                <a className="btn btn-default" href="single-blog.html">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row offspace-45">
          <div className="view-set-block">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="event-blog-image">
                <img alt="image" className="img-responsive" src="images/blog2.png" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
              <div className="event-blog-details">
                <h4><a href="single-blog.html">Lorem ipsum dolor sit amet</a></h4>
                <h5>Post By Admin <a><i aria-hidden="true" className="fa fa-heart-o fa-lg" />Likes</a><a><i aria-hidden="true" className="fa fa-comment-o fa-lg" />comments</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornare turpis neque, eu commodo sapien porta sed. Nam ut ante turpis. Nam arcu odio, scelerisque a vehicula vitae, auctor sit amet lectus. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornard hendrerit tortor vulputate id. Vestibulum mauris nibh, luctus non maximus vitae, porttitor eget neque. Donec tristique nunc facilisis, dapibus libero ac</p>
                <a className="btn btn-default" href="single-blog.html">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*-footer-*/}
    <footer>
      <div className="container">
        <div className="copyright">
          © 2018 All right reserved.
        </div>
      </div>
    </footer>
    {/*back to top-*/}
    <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top" id="back-to-top">
      <span><i aria-hidden="true" className="fa fa-angle-up fa-lg" /></span>
      <span>Top</span>
    </a>
  </div>
    );
  }
}

export default connect(null, actions)(withRouter(Home));


//
// <div className='main'>
//  <div style={{ width: 400}}>
//   { formType=='login'
//        ? <Login changeForm={this.changeForm}/>
//        : formType=='register' ?
//          <Register changeForm={this.changeForm}/>
//        : <Forget changeForm={this.changeForm}/> }
//   </div>
// </div>
