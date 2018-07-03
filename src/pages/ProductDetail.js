import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import TableComponent from '../components/TableComponent';
import Dashboard from './Dashboard';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;



class MyInventory extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Dashboard>
      <div className="row row-pb-lg">
   <div className="col-md-10 col-md-offset-1">
     <div className="product-detail-wrap">
       <div className="row">
         <div className="col-md-5">
           <div className="product-entry">
             <div className="product-img" style={{backgroundImage: 'url(images/elec_1.jpg)'}}>
               <p className="tag"><span className="sale">Sale</span></p>
             </div>
             <div className="thumb-nail">
               <a href="#" className="thumb-img" style={{backgroundImage: 'url(images/elec_2.jpg)'}} />
               <a href="#" className="thumb-img" style={{backgroundImage: 'url(images/elec_3.jpg)'}} />
               <a href="#" className="thumb-img" style={{backgroundImage: 'url(images/elec_4.jpg)'}} />
             </div>
           </div>
         </div>
         <div className="col-md-7">
           <div className="desc">
             <h3>Dummy Product Name</h3>
             <p className="price">
               <span>$68.00</span>
               <span className="rate text-right">
                 <i className="icon-star-full" />
                 <i className="icon-star-full" />
                 <i className="icon-star-full" />
                 <i className="icon-star-full" />
                 <i className="icon-star-half" />
                 (74 Rating)
               </span>
             </p>
             <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
             <div className="color-wrap">
               <p className="color-desc">
                 Color:
                 <a href="#" className="color color-1" />
                 <a href="#" className="color color-2" />
                 <a href="#" className="color color-3" />
                 <a href="#" className="color color-4" />
                 <a href="#" className="color color-5" />
               </p>
             </div>
             <div className="size-wrap">
               <p className="size-desc">
                 Size:
                 <a href="#" className="size size-1">xs</a>
                 <a href="#" className="size size-2">s</a>
                 <a href="#" className="size size-3">m</a>
                 <a href="#" className="size size-4">l</a>
                 <a href="#" className="size size-5">xl</a>
                 <a href="#" className="size size-5">xxl</a>
               </p>
             </div>
             <div className="row row-pb-sm">
               <div className="col-md-4">
                 <div className="input-group">
                   <span className="input-group-btn">
                     <button type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                       <i className="icon-minus2" />
                     </button>
                   </span>
                   <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} min={1} max={100} />
                   <span className="input-group-btn">
                     <button type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                       <i className="icon-plus2" />
                     </button>
                   </span>
                 </div>
               </div>
             </div>
             <p><a href="cart.html" className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart" /> Add to Cart</a></p>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
      </Dashboard>
    );
  }
}

export default withRouter(MyInventory);
