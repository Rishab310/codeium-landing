import React, { Component } from 'react';
import {Form, FormGroup} from "reactstrap";
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      contactState:"",
      contactUs: {
        "name": '',
        "email": '',
        "subject": '',
        "message": '',
      },
    }
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleContactSubmit = this.handleContactSubmit.bind(this);
  }

  handleContactChange(event) {
    const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;
    let { contactUs } = this.state;
    this.setState({
      contactUs: {
        ...this.state.contactUs,
        [name]: value
      }
    });
  }
  handleContactSubmit(event) {
    event.preventDefault();
    const contactData = this.state.contactUs;
    const sendPostRequest = async () => {
      try {
        const res = await axios.post(`http://104.211.91.225:5000/contact`, contactData);
        if (res.data.status === 200) {
          alert("Response Sent Succesfully");
        }
        else {
          this.setState({ signUpError: res.data.msg });
          alert("Error : " +res.data.msg)
        }
      } catch (err) {
        this.setState({ signUpError: "Please, try again later!!" });
        alert("Please, try again later!!")
      }
    };
    sendPostRequest();
  }
  render() {
    return (
      <div className="">
        <Form onSubmit={this.handleContactSubmit} className="email-contact-form">
          <div className="form-row">
            <FormGroup className="col form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                data-rule="minlen:4" data-msg="Please enter at least 4 chars" required
                value={this.state.contactUs.name} onChange={this.handleContactChange}
              />
            </FormGroup>
            <FormGroup className="col form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required
                value={this.state.contactUs.email} onChange={this.handleContactChange}/>
            </FormGroup>
          </div>
          <FormGroup>
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
              data-msg="" required
              value={this.state.contactUs.subject} onChange={this.handleContactChange}
            />
          </FormGroup>
          <FormGroup>
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required
              value={this.state.contactUs.message} onChange={this.handleContactChange}
            ></textarea>
          </FormGroup>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button style={{ cursor: "pointer" }} type="submit">Send Message</button></div>
        </Form>
      </div>
    );
  }
}

export default ContactForm;