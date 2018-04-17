import React, { Component } from 'react';
import Header from './share/components/Header'
import Footer from './share/components/Footer'
import Clock from './share/components/Clock'
import ModalPopup from './share/components/modal-popup/ModalPopup'

class App extends Component {
  render() {

    return (
     <div className="App">
        <ModalPopup />

        <Header />
          {/* Routing Section Changing every time*/}
          <div className="center-panel">
            <center>
              <Clock />
              {this.props.children}
            </center>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
