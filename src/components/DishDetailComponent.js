import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (value) => !(value) || (value.length <= len);
const minLength = (len) => (value) => (value) && (value.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen 
         });
    }

    handleSubmit(values) {
        this.toggleModal();
        alert("Comment Added!");
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comments)
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>

                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="name" >Your Name</Label>
                                    <Control.text model=".name" id="name" name="name" className="form-control" placeholder="Enter Your Name"
                                        validators={{
                                            minLength: minLength(2), maxLength: maxLength(15)
                                        }} />
                                    <Errors model=".name"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 1 character. ',
                                                maxLength: 'Must be 15 characters or less. '
                                            }} 
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="comments" >Comments</Label>
                                    <Control.textarea model=".comments" id="comments" name="comments" className="form-control" />
                                </Col>
                            </Row>
                            <br />

                            <Button type="submit" value="submit" color="primary">Submit Comment</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>

        )
    }
}

function RenderComments({ comments, addComment, dishId }) {
    const commentList = comments.map((comment) => {
        return (
            <CardText>
                {comment['comment']}<br /> -- {comment['author']},{" "}
                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment['date'])))}
            </CardText>
        )
    })
    return (
        <>
            {commentList}
            <CommentForm dishId={dishId}
                        addComment={addComment} />
        </>
    );
}

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

const DishDetail = (props) => {

    if (props.selectedDish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.selectedDish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.selectedDish} />
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle>{props.selectedDish.name} Comments </CardTitle>
                            <RenderComments comments={props.comments}
                                            addComment={props.addComment}
                                            dishId={props.selectedDish.id} />
                        </CardBody>
                    </Card>
                </div>
            </div>
                
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

export default DishDetail;