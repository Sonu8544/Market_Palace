import React from "react";

import { Row } from 'antd';

import BgImage from '../assets/coming.jpg';

// Exchanges (Comming Soon)
const Exchanges = () => (
  <Row  className=" ">
    <img src={BgImage} alt="Coming Soon" className=" " loading="lazy" />
   
  </Row>
 );

export default Exchanges;