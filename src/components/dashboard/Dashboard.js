import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    // let dashboardContent;
    // dashboardContent = (
    //   <div>
    //     <p className="lead text-muted">Welcome {user.name}</p>
    //   </div>
    // );

    return (
      <div className="flex h-screen flex-row m-10 gap-[50px]">
        <div className="w-1/5 flex flex-col bg-black text-white rounded-[30px] px-[50px] py-[60px]">
          "Some data for now"
        </div>
        <div className="w-4/5 m-5">
          "Some another data"
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
