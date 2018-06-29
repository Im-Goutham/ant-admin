import React, { Component } from 'react';
import {withRouter} from "react-router-dom";



class TopHeader extends Component {



  constructor(props) {
      super(props);
      this.state = {

      };


  }



  render() {

    return (
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
    );
  }
}

export default withRouter(TopHeader);
