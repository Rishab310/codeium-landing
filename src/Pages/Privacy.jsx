import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, NavItem, Collapse } from "reactstrap";
import { Link as RouterLink } from 'react-router-dom';

class PrivacyPolicy extends Component {
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
        </header><br /><br />
        <section id="privacy-content pt-5 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center font-weight-bold">Privacy Policy</h1><br />
                <div className="">
                <h3 className="" style={{fontWeight:"500"}}>Data Usage Policy</h3>
                <p>
                  This document outlines how Codeium collects, stores, and uses your data.
                  It also provides you with information on how to remove your stored data on request, and what data will be removed. Please read this document carefully before proceeding with using the Codeium website. By reading this page, you agree to abide by the terms of this policy. We reserve the right to update this policy as and when needed and will update you about the same on the email ID associated with your Codeium account.
                  Additionally, please also read our Terms of Use and Privacy Policy before using the Codeium website.
                </p>
                </div>
                <div className="">
                <h3 className="" style={{fontWeight:"500"}}>How does Codeium collect my data and why?</h3>
                <p>
                  Codeium collects data from you to identify you as a user, to be able to communicate with you,
                  and to help ensure that all our users get the best experience while using our services. With your permission, we may use your registered email address to send you communication about our newsletters, your submission results and other updates. Codeium does not share your data with any third parties without your explicit consent. We also store your data
                  with adequate security features and remove personally identifiable information for analytics purposes.
                </p>
                </div>
                <div className="">
                <h3 className="" style={{fontWeight:"500"}}>Do I have ownership over all my data?</h3>
                <p>Codeium retains ownership over some of your data which includes the username which you reserved while registering, the analytical data collected from you such as your preferred language, your institution, your degree, your graduation year, the type of user you are, and how long you have been programming for. However, personally identifiable data associated with these, such as your real name, email ID, age, gender, and others will be removed on request.</p>
                </div>
                <div className="">
                <h3 className="" style={{fontWeight:"500"}}>What about third parties that collect my data?</h3>
                <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
                <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
                <p>When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.We also use cookies to personalise your experience, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. You consent to our cookies if you continue to use our website.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PrivacyPolicy;