import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'


import Navbar from '../components/Navbar';
import Map from '../components/Map';
import Chart1 from '../components/Chart1';

import landingImage from '../static/images/landing-image.png'

const Home = () => {
  
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
    return (
      <div className="container-fluid home-container mt-4">
      <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={handleClose}>
        </Modal.Header>

        <Modal.Body>
          <h4>Sharing Our Stress</h4>
          <p>With the global newsfeed dominated by fear and negativity, it’s important to focus on what really matters to your community. Let us sift through the negativity, trimming the excess and giving you only the relevant facts.</p>
        </Modal.Body>
    </Modal.Dialog>
    </Modal>

      <Navbar/>
      <div className="map-container container-fluid">
        <Map/>
      </div>
      <div className="searchbar-container container-fluid text-center">
        <h1 className="search-header">Click On Your City In The Map Above</h1>
        <p className="search-desc">Or use the searchbar</p>
      </div>
      <div className="community-container container-fluid">
        <div className="community-text">
          <h4 className="community-header">Connecting Communities</h4>
          <p className="community-desc">SOS lets you keep up with your neighbors in real time. </p>
          <p>Receive important alerts, focused only on local, relevant information, and get connected to the conversation with other nearby users.</p>
        </div>
        <img className="com-img" src={landingImage} alt="com-img" />
      </div>
      <Chart1/>
    </div>
    );
}

export default Home;
