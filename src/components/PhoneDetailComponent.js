import React, {Component} from 'react';
import {Col, Row, Image, Modal, Button} from 'react-bootstrap';
import '../App.css';

class PhoneDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.appActions.showModal(false, null);
    }

    render() {
        if (this.props.detail !== null) {
            return (

                <Modal show={this.props.modal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.detail.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col lg={6} sm={6} xs={12}>
                                <Image src={"./images/" + this.props.detail.img} className="thumb2"/></Col>
                            <Col lg={6} sm={6} xs={12}>
                                <p>
                                    {this.props.detail.spec}
                                </p>
                                <p><strong>Price: </strong>
                                    {this.props.detail.price}
                                </p>

                                <p><strong>Color: </strong>
                                    {this.props.detail.color}
                                </p>

                            </Col></Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

            );
        }
        else return null
    }
}

export default PhoneDetailComponent;