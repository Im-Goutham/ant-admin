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
      <footer>
        <div className="container">
          <div className="copyright">
            © 2018 All right reserved.
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
