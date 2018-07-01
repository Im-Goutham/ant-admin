import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Modal, Button,Input, Card } from 'antd';

const { Meta } = Card;


class ProductCard extends Component {


  render() {
    return (
      <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://n1.sdlcdn.com/imgs/g/4/b/large/HP-Notebook-HP-15-bs164TU-SDL714478382-1-d06d9.jpg" />}
      >
      <Meta
       title="Europe Street beat"
       description="HP 15-bs164TU - 8th Gen Intel Core i5 (8250U) - 4 GB DDR4 RAM - 1TB HDD - FreeDOS 2.0 - Intel UHD Graphics 620 - Fast Charge - Sparkling Black Colour"
      />
      </Card>
    );
  }
}

export default withRouter(ProductCard);
