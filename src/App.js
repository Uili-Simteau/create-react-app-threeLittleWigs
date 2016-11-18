import React, { Component } from 'react';

import './App.css';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'; 

class App extends Component {

 

  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Three Little Wigs</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#aboutUs">About Us</NavItem>
              <NavItem eventKey={2} href="http://www.health.govt.nz/new-zealand-health-system/claims-provider-payments-and-entitlements/wigs-and-hairpieces-subsidy" target="_blank">Funding</NavItem>
              <NavItem eventKey={3} href="#">Contact</NavItem>
              <NavDropdown eventKey={4} title="Blog" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1}>Family business since 1996</MenuItem>
                <MenuItem eventKey={4.2} href="http://www.health.govt.nz/new-zealand-health-system/claims-provider-payments-and-entitlements/wigs-and-hairpieces-subsidy">Health Benefits Funding changes</MenuItem>
                <MenuItem eventKey={4.3}>Applications made easy</MenuItem>
                
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="https://www.jonrenau.com/">Jon Renau</NavItem>
              <NavItem eventKey={2}  href="http://www.health.govt.nz/new-zealand-health-system/claims-provider-payments-and-entitlements/wigs-and-hairpieces-subsidy" target="_blank">Ministry of Health</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="App-header">
        
          <h3>Welcome</h3>
          <h3>to</h3>
          <h1>Three Little Wigs</h1>
        </div>
        <div className="aboutUs" id="aboutUs">
          <h2>About Us</h2>
          <p className="App-intro">
            Find out about our range of wigs available, consultations and Health Benefits Funding assistance.
          </p>
        </div>
        <div className="helathBenefits">
          <h1>Health Benefits Funding</h1>
          <p>
          With the onset of greater asjdjasflkjalksfjpjja;fj;ldj
          </p>
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
