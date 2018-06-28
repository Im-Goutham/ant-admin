import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Table, Icon, Divider } from 'antd';
import Picture from '../components/Picture';

import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

const steps = [{
  title: 'Pan Card',
  content: <Picture/>,
}, {
  title: 'Recent Photograph',
  content: <Picture/>,
}, {
  title: 'Adhaar Proof',
  content: <Picture/>,
},  {
  title: 'Cancelled Cheque',
  content: <Picture/>,
},  {
  title: 'Signature',
  content: <Picture/>,
},  {
  title: 'Video Verification',
  content: <Picture/>,
},


];


class StepsComponent extends Component {


  constructor(props) {
      super(props);
      this.state = {
        current: 0,
      };
    }
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }
    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }


    render() {
        const { current } = this.state;
        return (
          <div>
            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">{steps[this.state.current].content}</div>
            <div className="steps-action">
              {
                this.state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => this.next()}>Next</Button>
              }
              {
                this.state.current === steps.length - 1
                &&
                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
              }
              {
                this.state.current > 0
                &&
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              }
            </div>
          </div>
        );
      }
    }



export default withRouter(StepsComponent);
