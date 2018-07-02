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
import OurProducts from '../components/OurProducts'



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
      <Header/>
       <aside id="colorlib-hero">
         <div className="flexslider">
           <ul className="slides">
             <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
               <div className="overlay" />
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-md-6 col-md-offset-3 col-md-pull-2 col-sm-12 col-xs-12 slider-text">
                     <div className="slider-text-inner">
                       <div className="desc">
                         <h1 className="head-1">Mens</h1>
                         <h2 className="head-2">Jeans</h2>
                         <h2 className="head-3">Collection</h2>
                         <p className="category"><span>New stylish shirts, pants &amp; Accessories</span></p>
                         <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </li>
             <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
               <div className="overlay" />
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-md-6 col-md-offset-3 col-md-pull-2 col-sm-12 col-xs-12 slider-text">
                     <div className="slider-text-inner">
                       <div className="desc">
                         <h1 className="head-1">Huge</h1>
                         <h2 className="head-2">Sale</h2>
                         <h2 className="head-3">45% off</h2>
                         <p className="category"><span>New stylish shirts, pants &amp; Accessories</span></p>
                         <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </li>
             <li style={{backgroundImage: 'url(images/img_bg_3.jpg)'}}>
               <div className="overlay" />
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 slider-text">
                     <div className="slider-text-inner">
                       <div className="desc">
                         <h1 className="head-1">New</h1>
                         <h2 className="head-2">Arrival</h2>
                         <h2 className="head-3">up to 30% off</h2>
                         <p className="category"><span>New stylish shirts, pants &amp; Accessories</span></p>
                         <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </li>
           </ul>
         </div>
       </aside>
       <div id="colorlib-featured-product">
         <div className="container">
           <div className="row">
             <div className="col-md-6">
               <a href="shop.html" className="f-product-1" style={{backgroundImage: 'url(images/item-1.jpg)'}}>
                 <div className="desc">
                   <h2>Fahion <br />for <br />men</h2>
                 </div>
               </a>
             </div>
             <div className="col-md-6">
               <div className="row">
                 <div className="col-md-6">
                   <a href className="f-product-2" style={{backgroundImage: 'url(images/item-2.jpg)'}}>
                     <div className="desc">
                       <h2>New <br />Arrival <br />Dress</h2>
                     </div>
                   </a>
                 </div>
                 <div className="col-md-6">
                   <a href className="f-product-2" style={{backgroundImage: 'url(images/item-4.jpg)'}}>
                     <div className="desc">
                       <h2>Sale <br />20% <br />off</h2>
                     </div>
                   </a>
                 </div>
                 <div className="col-md-12">
                   <a href className="f-product-2" style={{backgroundImage: 'url(images/item-3.jpg)'}}>
                     <div className="desc">
                       <h2>Shoes <br />for <br />men</h2>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

       <div id="colorlib-intro" className="colorlib-intro" style={{backgroundImage: 'url(images/cover-img-1.jpg)'}} data-stellar-background-ratio="0.5">
         <div className="overlay" />
         <div className="container">
           <div className="row">
             <div className="col-md-6">
               <div className="intro-desc">
                 <div className="text-salebox">
                   <div className="text-lefts">
                     <div className="sale-box">
                       <div className="sale-box-top">
                         <h2 className="number">45</h2>
                         <span className="sup-1">%</span>
                         <span className="sup-2">Off</span>
                       </div>
                       <h2 className="text-sale">Sale</h2>
                     </div>
                   </div>
                   <div className="text-rights">
                     <h3 className="title">Just hurry up limited offer!</h3>
                     <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                     <p><a href="shop.html" className="btn btn-primary">Shop Now</a> <a href="#" className="btn btn-primary btn-outline">Read more</a></p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
      <OurProducts />
      <Footer/>
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
