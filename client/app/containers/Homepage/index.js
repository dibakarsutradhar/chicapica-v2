/**
 *
 * Homepage
 *
 */

import React from "react";
import { connect } from "react-redux";

import actions from "../../actions";

class Homepage extends React.PureComponent {
  componentDidMount() {}

  render() {
    // return <h1>HomePage</h1>;
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
