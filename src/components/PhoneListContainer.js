import React, {Component} from 'react';
import {Col, Row, Grid, Image} from 'react-bootstrap';


class PhoneListContainer extends Component {
    constructor(props) {
        super(props);
    }

    details(phone) {

        this.props.appActions.showModal(true, phone);
    }

    render() {
        const phones = this.props.phones.map((phone) =>

            <Col lg={4} md={6} sm={6} key={phone._id}>
                <div className="phones" onClick={(e) => {
                    this.details(phone)
                }}>
                    <h4>{phone.name}</h4>
                    <Image className="thumb" src={'images/' + phone.img} responsive/>
                </div>
            </Col>
        )
        return (
            <Grid>
                <Row>
                    {phones}
                </Row></Grid>
        );
    }
}

export default PhoneListContainer;