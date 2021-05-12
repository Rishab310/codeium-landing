import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, NavItem, Collapse } from "reactstrap";
import { Link as RouterLink } from 'react-router-dom';
class TermsOfService extends Component {
  state = {}
  render() {
    return (
      <div className="">
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <Navbar dark expand="md" style={{ width: "100%" }} className="px-md-0">
              <div className="container px-md-0" style={{ cursor: "pointer" }}>
                <div className="mr-auto" href="/">
                  <h1 className="logo mr-auto">
                    {/* <a className="nav-logo" onClick={this.scrollToTop}>O<span>z</span>one</a> */}
                    <a className="nav-logo" onClick={this.scrollToTop}><img src="./assets/img/codeium_logo_bg.png" alt="Codeium" width="160px" /></a>
                  </h1>
                </div>
                <NavbarToggler onClick={this.toggleNavbar} className="ml-auto" />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar className="ml-auto d-flex align-items-center">
                    <NavItem>
                      <RouterLink className="nav-link" to="/">
                        Home
                        </RouterLink>
                    </NavItem>
                    <NavItem>
                      <RouterLink className="nav-link" to="/">
                        About
                        </RouterLink>
                    </NavItem>
                    <NavItem>
                      <RouterLink className="nav-link" to="/">
                        F.A.Q
                        </RouterLink>
                    </NavItem>
                    <NavItem>
                      <RouterLink className="nav-link" to="/">
                        Community
                        </RouterLink>
                    </NavItem>
                    <NavItem>
                      <RouterLink className="nav-link" to="/">
                        Contact Us
                        </RouterLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
          </div>
        </header>
      </div>
    );
  }
}

export default TermsOfService;