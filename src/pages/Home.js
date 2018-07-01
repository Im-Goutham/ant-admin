import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import Slider from "react-slick";
import { Row, Col } from 'antd';



import * as actions from '../actions';

// import Login from './Login';
// import Register from './Register';
// import Forget from './Forget';

import Header from '../components/Header';
import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';



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
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
    let { formType } = this.state;
    return (
      <div id="page">
    {/*-header top--*/}
    <TopHeader/>
    {/*header-*/}
    <Header/>
    {/*end*/}
    <div id="myCarousel1" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel1" data-slide-to={0} className="active" />
        <li data-target="#myCarousel1" data-slide-to={1} />
        <li data-target="#myCarousel1" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="item active"> <img src="images/banner.jpg" style={{width: '100%', height: 500}} alt="First slide" />

        </div>
        <div className="item"> <img src="images/banner2.jpg" style={{width: '100%', height: 500}} alt="Second slide" />

        </div>
        <div className="item"> <img src="images/banner3.jpg" style={{width: '100%', height: 500}} alt="Third slide" />

        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel1" data-slide="prev"> <img src="images/icons/left-arrow.png" onmouseover="this.src = 'images/icons/left-arrow-hover.png'" onmouseout="this.src = 'images/icons/left-arrow.png'" alt="left" /></a>
      <a className="right carousel-control" href="#myCarousel1" data-slide="next"><img src="images/icons/right-arrow.png" onmouseover="this.src = 'images/icons/right-arrow-hover.png'" onmouseout="this.src = 'images/icons/right-arrow.png'" alt="left" /></a>
    </div>
    <div style={{margin:100}}>
       <h1>Trending products</h1>
    </div>
    <Row>
       <Col lg={{ span: 5, offset: 1 }}>  <ProductCard/></Col>
       <Col lg={{ span: 5, offset: 1 }}>  <ProductCard/></Col>
       <Col lg={{ span: 5, offset: 1 }}>  <ProductCard/></Col>
       <Col lg={{ span: 5, offset: 1 }}>  <ProductCard/></Col>
     </Row>
    {/*-footer-*/}
  <Footer/>
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
