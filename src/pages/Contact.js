import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import * as actions from '../actions';

// import Login from './Login';
// import Register from './Register';
// import Forget from './Forget';

import Header from '../components/Header';
import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer';

const baseurl = "http://10.2.1.49:5037/api"

class Contact extends Component {

constructor() {
   super();
   this.state = {

   }

}




  render() {
    let { formType } = this.state;
    return (
      <div id="page">
      <TopHeader/>
      {/*header-*/}
      <Header/>
      <section className="image-head-wrapper" style={{backgroundImage: 'url("images/banner4.jpg")'}}>
        <div className="inner-wrapper">
          <h1>Contact Us</h1>
        </div>
      </section>
      <div className="clearfix" />
      <section className="contact-block">
        <div className="container">
          <div className="col-md-6 contact-left-block">
            <h3><span>Contact </span>Us</h3>
            <p className="text-left">Nulla pharetra eleifend tellus in molestie. In vel neque sit amet urna gravida blandit nec id massa. Phasellus eu aliquet augue. Quisque fringilla urna quam.</p>
            <p className="text-right">701 Old York Drive Richmond USA. <i className="fa fa-map-marker fa-lg" /></p>
            <p className="text-right"><a href="tel:+1-202-555-0100"> +1-202-555-0100 <i className="fa fa-phone fa-lg" /></a></p>
            <p className="text-right"><a href="mailto:demo@info.com"> demo@info.com <i className="fa fa-envelope" /></a></p>
          </div>
          <div className="col-md-6 contact-form">
            <h3>Send a <span>Message</span></h3>
            <form action="#" method="post">
              <input type="text" className="form-control" name="Name" placeholder="Name" required />
              <input type="email" className="form-control" name="Email" placeholder="Email" required />
              <textarea className="form-control" name="Message" placeholder="Message Here...." required defaultValue={""} />
              <input type="submit" className="submit-btn" defaultValue="Submit" />
            </form>
          </div>
          <div className="clearfix" />
        </div>
      </section>
      {/*-map-*/}
      <section className="offspace-70">
        <div className="map">
          <div className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101257.12284776446!2d-77.56330202084071!3d37.52477641775529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111095799c9ed%3A0xbfd83e6de2423cc5!2sRichmond%2C+VA%2C+USA!5e0!3m2!1sen!2sin!4v1488891294599" frameBorder={0} style={{border: 0, width: '100%', height: 400}} allowFullScreen />
          </div>
        </div>
      </section>
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

export default connect(null, actions)(withRouter(Contact));


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
