import React, { Component } from 'react';
import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import '../../assets/vendor/icofont/icofont.min.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse } from "reactstrap";
import { Accordion, Button } from 'react-bootstrap';
import LoginModal from "../../components/LoginModal";
import ContactForm from "../../components/ContactForm";
import { Link as RouterLink } from 'react-router-dom';
export default Watch(
  class Landing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isNavOpen: false,
        isModalOpen: false,
        activeTab: "1",
      }
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.scrollToTop = this.scrollToTop.bind(this);
      this.toggleModal = this.toggleModal.bind(this);

    }
    toggleNavbar() { this.setState({ isNavOpen: !this.state.isNavOpen }); }
    toggleModal() { this.setState({ isModalOpen: !this.state.isModalOpen, activeTab: "1" }); }
    scrollToTop = () => { scroll.scrollToTop(); };
    componentDidMount() { this.aos = AOS; this.aos.init({ duration: 1000, once: true }); }
    componentDidUpdate() { this.aos.refresh(); }

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
                        <Link className="nav-link" to="hero"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          Home
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link className="nav-link" to="about"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          About
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link className="nav-link" to="faq"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          F.A.Q
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link className="nav-link" to="community"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          Community
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link className="nav-link" to="contact"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          Contact Us
                        </Link>
                      </NavItem>
                    </Nav>
                    {/* <Nav className="ml-0 ml-md-2 d-flex align-items-center" navbar>
                      <NavItem className="nav-buttons">
                        <button className="btn btn-light" onClick={this.toggleModal}>Login</button>
                      </NavItem>
                    </Nav> */}
                  </Collapse>
                </div>
              </Navbar>
            </div>
            {/* Login and Sign Up Modal*/}
            <LoginModal toggleModal={this.toggleModal} isModalOpen={this.state.isModalOpen} />
          </header><br /><br />
          <section id="hero" className="text-dark">
            <div className="container" data-aos="zoom-out" data-aos-delay="100">
              <div className="row">
                <div className="col col-12 col-md-8">
                  <h1>Welcome to <span className="codeium-head">Codeium</span>
                  </h1>
                  <h2>A place to explore the re-defined version of competitive coding..</h2>
                  <div className="d-flex">
                    {/* <a className="btn-get-started scrollto" style={{ cursor: "pointer" }} onClick={this.toggleModal}>Get Started</a> */}
                    <Link className="btn-get-started scrollto" style={{ cursor: "pointer" }} to="community"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Join us</Link>
                  </div>
                </div>
                <div className="col col-12 col-md-4 ">
                  <img src="./assets/img/2842681.jpg" alt="" width="100%" height="100%" />
                </div>
              </div>
            </div>
          </section>
          <main id="main">
            <section id="featured-services" className="featured-services section-bg">
              <div className="container" data-aos="zoom-in" data-aos-delay="300">
                <div className="row d-flex justify-content-around">
                  <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                    <RouterLink to="/comingsoon">
                      <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><i className="bx bx-file"></i></div>
                        <h4 className="title">Practice CP</h4>
                        <p className="description">Check out some practice problems to boost your competitive coding skills.</p>
                      </div>
                    </RouterLink>
                  </div>
                  <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                    <RouterLink to="/comingsoon">
                      <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><i className="bx bx-world"></i></div>
                        <h4 className="title">Contests</h4>
                        <p className="description">Take a test of your coding skills to experience the real competition.</p>
                      </div>
                    </RouterLink>
                  </div>
                  <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                    <RouterLink to="/comingsoon">
                      <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><i className="bx bx-store"></i></div>
                        <h4 className="title">Merchandise Store</h4>
                        <p className="description">Check out our store for some exclusive goodies.</p>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </section>
            <section id="about" className="about section-bg bg-white">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h3>Find Out More <span>About Us</span></h3>
                  <p>Codeium was initiated with a mission to help students learn competitive coding along with some exciting monetary rewards.</p>
                </div>
                <div className="row">
                  <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                    <img src="assets/img/AdobeStock_296042529.jpeg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up"
                    data-aos-delay="100">
                    <h3>With us you find a chance to explore the re-defined version of competitive coding.</h3>
                    <p className="font-italic">
                      We provide you a chance to learn CP and earn coins through :-
                  </p>
                    <ul>
                      <li>
                        <i className="bx bx-store-alt"></i>
                        <div>
                          <h5>Our Practice Problems</h5>
                          <p>Each solved problem will earn you coins.</p>
                        </div>
                      </li>
                      <li>
                        <i className="bx bx-images"></i>
                        <div>
                          <h5>Fantasy Contests</h5>
                          <p>Earn special coins on the basis of your contest rank.</p>
                        </div>
                      </li>
                    </ul>
                    <p>
                      Redeem your coins at our merchandise store to buy some exclusive goodies and avail some bumper discounts.
                  </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="faq" className="faq section-bg"><br /><br />
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h3>Frequently Asked <span>Questions</span></h3>
                  <p>Facing any query, get it resolved here.</p>
                </div>
                <ul className="faq-list" data-aos="fade-up" data-aos-delay="100">
                  <Accordion defaultActiveKey="0">
                    <li>
                      <div>
                        <Accordion.Toggle as={Button} style={{ whiteSpace: "normal", textAlign: "left" }} variant="link" eventKey="0">
                          Is this platform just for students?
                      </Accordion.Toggle>
                      </div>
                      <Accordion.Collapse eventKey="0">
                        <p>This platform is open for any coding enthusiast.</p>
                      </Accordion.Collapse>
                    </li>
                    <li>
                      <div>
                        <Accordion.Toggle as={Button} style={{ whiteSpace: "normal", textAlign: "left" }} variant="link" eventKey="1">
                          How to earn coins through problems and contests?
                        </Accordion.Toggle>
                      </div>
                      <Accordion.Collapse eventKey="1">
                        <p>Each problem in our practice section is associated with a certain number of coins which you gain after solving it. Also
                        our contests provide you coins on the basis of your rank.</p>
                      </Accordion.Collapse>
                    </li>
                    <li>
                      <div>
                        <Accordion.Toggle as={Button} style={{ whiteSpace: "normal", textAlign: "left" }} variant="link" eventKey="2">
                          How and where to redeem coins ?
                        </Accordion.Toggle>
                      </div>
                      <Accordion.Collapse eventKey="2">
                        <p>Our merchandise store provides you a way to redeem your coins to buy some exclusive products. You can also avail heavy
                        discounts using the coins.</p>
                      </Accordion.Collapse>
                    </li>
                    <li>
                      <div>
                        <Accordion.Toggle as={Button} style={{ whiteSpace: "normal", textAlign: "left" }} variant="link" eventKey="3">
                          Where can I find my collected coins?
                        </Accordion.Toggle>
                      </div>
                      <Accordion.Collapse eventKey="3">
                        <p>Once you create your profile, you can find your total collected coins.</p>
                      </Accordion.Collapse>
                    </li>
                    <li>
                      <div>
                        <Accordion.Toggle as={Button} style={{ whiteSpace: "normal", textAlign: "left" }} variant="link" eventKey="4">
                          Still didn’t answer your question?
                        </Accordion.Toggle>
                      </div>
                      <Accordion.Collapse eventKey="4">
                        <p>Contact us at any Social Media or through the form given below.</p>
                      </Accordion.Collapse>
                    </li>
                  </Accordion>
                </ul>
              </div>
            </section>
            <section id="community" className="community section-bg bg-white">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h3>Collaboration with <span> Communities </span> and <span>Clubs</span></h3>
                  <p>Get a chance to organize fantasy contests in your community.</p>
                  {/* <div className="row pt-3 d-flex hustify-content-center align-items-center">
                    <div className="col-12">
                      <h5>Get a chance to organize fantasy contests in your community.</h5>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-lg-6 order-lg-last d-flex flex-column justify-content-center" data-aos="zoom-out" data-aos-delay="100">
                    <img src="assets/img/community2.jpeg" className="img-fluid mx-auto" alt="" width="100%" style={{maxWidth:"400px"}}/>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up"
                    data-aos-delay="100">
                    <h3>Partnership with Communities</h3>
                    <p>We invite all the tech communities/clubs to join us and get a chance to organize fantasy contests in your community.</p>
                    <p> If you believe in taking a chance to experience something different in the traditional art of coding then we are ready to collaborate with you.</p>
                    <p>Not only will you be able to conduct fantasy contests in your college but also avail a chance to get a shout out on our merchandise.</p>
                    <p>Many such benefits are awaiting for you. Join us now!</p>
                    <div className="">
                      <a className="btn-custom-dark" style={{ cursor: "pointer" }} href="https://forms.gle/KmaUeZ43Hzky1aHf6" target="_blank">Join us</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="contact" className="contact section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h3><span>Contact Us</span></h3>
                  <p>We’d love to hear from you! </p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                  <div className="col-12 col-md-6">
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                      <div className="col-12">
                        <div className="info-box mb-4">
                          <i className="bx bx-map"></i>
                          <h3>Our Address</h3>
                          <p>83, Shree Ji Park Colony, Mandsaur, Madhya Pradesh, PIN-458001</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="info-box  mb-4">
                          <i className="bx bx-envelope"></i>
                          <h3>Email Us</h3>
                          <p>contact@codeium.tech</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="info-box  mb-4">
                          <i className="bx bx-phone-call"></i>
                          <h3>Call Us</h3>
                          <p>+91 9406608047</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                      <div className="col-12">
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <br /><br /><br />
          <footer id="footer">
            <section className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-contact">
                    {/* <h2>O<span style={{ color: "#f0c017" }}>z</span>one</h2> */}
                    <h2 className="font-weight-bold codeium-head" style={{ color: "#003d7e" }}>Codeium</h2>
                    <p>
                      83, Shree Ji Park Colony,<br />
                    Mandsaur, Madhya Pradesh,<br />
                    PIN-458001 <br /><br />
                      <strong>Phone:</strong> +91 9406608047<br />
                      <strong>Email:</strong> contact@codeium.tech<br />
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right"></i>
                        <a href="">
                          <Link to="hero"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Home
                        </Link></a>
                      </li>
                      <li><i className="bx bx-chevron-right"></i>
                        <a href="">
                          <Link to="about"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>About us
                        </Link>
                        </a>
                      </li>
                      <li><i className="bx bx-chevron-right"></i>
                        <a href="">
                          <Link to="faq"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            F.A.Q
                        </Link>
                        </a>
                      </li>
                      <li><i className="bx bx-chevron-right"></i><a><RouterLink to="/termsofservice">Terms of service</RouterLink> </a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#"><RouterLink to="/privacypolicy">Privacy policy</RouterLink></a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links ml-auto">
                    <h4>Our Social Networks</h4>
                    <p>Follow us at our Social handles to get all the updates.</p>
                    <div className="social-links mt-3">
                      <a href="https://twitter.com/AskCodeium" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
                      <a href="https://www.facebook.com/AskCodeium" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                      {/* <a href="#" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                      <a href="#" target="_blank" className="google-plus"><i className="bx bxl-skype"></i></a> */}
                      <a href="https://www.linkedin.com/company/codeium" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </div >
      );
    }
  });