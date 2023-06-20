import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LineChart from "./LineChart";
import PieChartComponent from "./PieChart";
import MeetingBoard from "./MeetingBoard";
import Header from "./Header";
import SideBar from "./Sidebar";
import CardRow from "./CardRow";

class Dashboard extends Component {
  render() {
    return (
      <div className="flex max-h-max flex-row p-4 lg:p-10 gap-[20px] lg:gap-[50px] bg-[#dddddd]">
        <SideBar />
        <div className="w-4/5">
          <Header />
          <CardRow />
          <LineChart title="Activities" />
          <div className="flex mt-10 gap-10">
            <PieChartComponent title="Top Products" />
            <MeetingBoard title="Today's schedule" />
          </div>
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