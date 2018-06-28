import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Webcam from 'react-webcam';
import { Button,Upload, Row, Icon,Col, Modal } from 'antd';



class Sidebar extends Component {



  constructor(props) {
      super(props);
      this.state = {
          placeholder :'http://www.madisonnjlibrary.org/wp-content/uploads/2016/06/placeholder-12.png',
          previewVisible: false,
          previewImage: '',
      };


  }




  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      previewImage: imageSrc,
      previewVisible: true,
    });
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }



  render() {
    const { previewVisible, previewImage, placeholder } = this.state;

    const props = {
          action: '//jsonplaceholder.typicode.com/posts/',
          onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
              console.log(file, fileList);
            }
          }
        };
    return (
      <div>
      <Row>
         <Col span={12}>
            <Col span={24}>
            <Upload {...props}>
             <Button>
               <Icon type="upload" /> Browse
             </Button>
            </Upload>
            </Col>
            <Col span={24}>
              <img alt="example" style={{ width: 350, height: 270,marginTop: 40 }} src={previewImage ? previewImage : placeholder} />
            </Col>
         </Col>
         <Col span={12}>
         <Col span={24}>
              <Button >Using Webcam</Button>
         </Col>
           <Col span={24}>
               <Webcam
                 audio={false}
                 height={350}
                 ref={this.setRef}
                 screenshotFormat="image/jpeg"
                 width={350}
               />
           </Col>
           <Col span={24}>
               <Button onClick={this.capture}type="primary">Capture photo</Button>
           </Col>
         </Col>
       </Row>
     </div>
    );
  }
}

export default withRouter(Sidebar);
