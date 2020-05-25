import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = (props) => {

        if (props.selectedDish != null) {
            const commentList = props.selectedDish.comments.map((comment) => {
                return (
                        <CardText>
                            {comment['comment']}<br /> -- {comment['author']},{" "}
                            {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment['date'])))}
                        </CardText>
                )
            })

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg src={props.selectedDish.image} alt={props.selectedDish.name} />
                                <CardBody>
                                    <CardTitle>{props.selectedDish.name}</CardTitle>
                                    <CardText>{props.selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card className="border-0">
                                <CardBody>
                                    <CardTitle>{props.selectedDish.name} Comments: </CardTitle>
                                    {commentList}
                                </CardBody>
                            </Card>
                        </div>
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

export default DishDetail