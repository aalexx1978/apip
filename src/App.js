import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from './actions/appActions';
import PropTypes from 'prop-types';
import PhoneDetailComponent from './components/PhoneDetailComponent';
import PhoneListContainer from './components/PhoneListContainer';
import Header from './components/Header';
import {Alert, Grid} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.appActions.fetchData();

    }

    render() {
        let warning = '';
        if (this.props.error) {
            warning = <Alert bsStyle="danger">
                <p>{this.props.msg.message}</p>
            </Alert>;
        }
        return (
            <div className="App">
                <PhoneDetailComponent {...this.props}/>
                <Header/>
                <Grid>
                    {warning}
                    <PhoneListContainer {...this.props}/>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    appActions: PropTypes.object,
    phones: PropTypes.array,
    modal: PropTypes.bool,
    error: PropTypes.bool,
    msg: PropTypes.object,
    detail: PropTypes.object
};

function mapStateToProps(state) {
    return {
        phones: state.appRed.phones,
        detail: state.appRed.detail,
        modal: state.appRed.modal,
        msg: state.appRed.msg,
        error: state.appRed.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);