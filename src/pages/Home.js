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
      <div className='main'>
       <div style={{ width: 400}}>
        { formType=='login'
             ? <Login changeForm={this.changeForm}/>
             : formType=='register' ?
               <Register changeForm={this.changeForm}/>
             : <Forget changeForm={this.changeForm}/> }
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(withRouter(Home));
