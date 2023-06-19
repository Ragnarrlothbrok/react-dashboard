import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { confirmAlert } from "react-confirm-alert";

function PrivateRoute({ children, auth }) {
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
