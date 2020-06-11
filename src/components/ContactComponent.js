import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (value) => value && value.length;
const maxLength = (len) => (value) => !(value) || (value.length <= len);
const minLength = (len) => (value) => (value) && (value.length >= len);
const isNumber = (value) => !isNaN(Number(value));
const validEmail = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
        console.log("Current state: " + JSON.stringify(values))
        alert("Current state: " + JSON.stringify(values));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={3}>First Name</Label>
                                <Col md={9}>
                                    <Control.text model=".firstname"
                                        id="firstname" 
                                        name="firstname" 
                                        className="form-control"
                                        placeholder="First Name"
                                        validators={{
                                            required, minLength: minLength(2), maxLength: maxLength(15)
                                        }} />
                                    <Errors model=".firstname"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 1 character. ',
                                            maxLength: 'Must be 15 characters or less. '
                                        }} 
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="lasttname" md={3}>Last Name</Label>
                                <Col md={9}>
                                    <Control.text model=".lastname" 
                                        id="lastname" 
                                        name="lastname" 
                                        className="form-control"
                                        placeholder="Last Name"
                                        validators={{
                                            required, minLength: minLength(2), maxLength: maxLength(15)
                                        }} />
                                    <Errors model=".lastname"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 1 character. ',
                                            maxLength: 'Must be 15 characters or less. '
                                        }} 
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="telnum" md={3}>Telephone Number</Label>
                                <Col md={9}>
                                    <Control.text model=".telnum" 
                                        id="telnum" 
                                        name="telnum"
                                        className="form-control"
                                        placeholder="Telephone Number"
                                        validators={{
                                            required, minLength: minLength(7), maxLength: maxLength(15), isNumber
                                        }} />
                                    <Errors model=".telnum"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 7 numbers. ',
                                            maxLength: 'Must be 15 numbers or less. ',
                                            isNumber: 'Please enter a valid number. '
                                        }} 
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={3}>Email Address</Label>
                                <Col md={9}>
                                    <Control.text model=".email" 
                                        id="email" 
                                        name="email" 
                                        className="form-control"
                                        placeholder="Email Address"
                                        validators={{
                                            required, validEmail
                                        }} />
                                    <Errors model=".email"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            validEmail: 'Invalid email format. '
                                        }} 
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 5, offset: 3}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" 
                                                name="agree" 
                                                clasName="form-check-input" />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>

                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" 
                                        name="contactType" 
                                        className="form-control">
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Control.select> 
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" md={3}>Your Feedback</Label>
                                <Col md={9}>
                                    <Control.textarea model=".message" 
                                        id="message" 
                                        name="message" 
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 9, offset: 3}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
