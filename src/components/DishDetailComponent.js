import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        
    }

    render() {

        if (this.props.selectedDish != null) {
            const commentList = this.props.selectedDish.comments.map((comment) => {
                return (
                        <CardText>
                            {comment['comment']}<br /> {comment['author']}, 
                            {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment['date'])))}
                        </CardText>
                )
            })

            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name} Comments: </CardTitle>
                                {commentList}
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

}

export default DishDetail