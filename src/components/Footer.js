import React, { Component } from 'react';
import {withRouter} from "react-router-dom";



class Footer extends Component {



  constructor(props) {
      super(props);
      this.state = {

      };


  }



  render() {

    return (
      <footer id="colorlib-footer" role="contentinfo" style={{background:'rgb(0, 122, 183)',color:'white',fontWeight:500}}>
        <div className="copy">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                <span className="block">
                  Copyright © All rights reserved
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
