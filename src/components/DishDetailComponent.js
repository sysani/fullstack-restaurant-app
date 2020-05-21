import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            dish: this.props.selectedDish
        }
    }

    

    render() {

        if (this.props.selectedDish != null) {

            for (var i in this.props.selectedDish.comments) {
                console.log(this.props.selectedDish.comments[i]['comment'])
            }
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
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