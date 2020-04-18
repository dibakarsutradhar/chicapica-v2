/*
 *
 * Sell
 *
 */

import React from "react";
import { connect } from "react-redux";

import { Row, Col } from "reactstrap";

import actions from "../../actions";

import Input from "../../components/Input";

class Reservation extends React.PureComponent {
  render() {
    const { sellFormData, sellFormChange, sellWithUs } = this.props;

    return (
      <div className="sell">
        <h1>
          Dine With Us! Fill up the form, and we will confirm your shortly
        </h1>
        <hr />
        <Row>
          <Col xs="12" md="6">
            <Input
              type={"text"}
              label={"Name"}
              name={"name"}
              placeholder={"You Full Name"}
              value={sellFormData.name}
              onInputChange={(name, value) => {
                sellFormChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="6">
            <Input
              type={"text"}
              label={"Email Address"}
              name={"email"}
              placeholder={"Your Email Address"}
              value={sellFormData.email}
              onInputChange={(name, value) => {
                sellFormChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="6">
            <Input
              type={"text"}
              label={"Phone Number"}
              name={"phoneNumber"}
              placeholder={"Your Phone Number"}
              value={sellFormData.phoneNumber}
              onInputChange={(name, value) => {
                sellFormChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="6">
            <Input
              type={"text"}
              label={"Table Location"}
              name={"brand"}
              placeholder={"Your Prefered Table Location"}
              value={sellFormData.brand}
              onInputChange={(name, value) => {
                sellFormChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="12">
            <Input
              type={"textarea"}
              label={"Notes for Booking"}
              name={"business"}
              placeholder={"Any Notes for the Reservation"}
              value={sellFormData.business}
              onInputChange={(name, value) => {
                sellFormChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className="sell-actions">
          <button
            className="input-btn"
            type="submit"
            onClick={() => sellWithUs()}
          >
            Apply
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sellFormData: state.merchant.sellFormData,
  };
};

export default connect(mapStateToProps, actions)(Reservation);
