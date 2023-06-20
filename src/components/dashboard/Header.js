import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchBar from "./../common/SearchBar";
import { ReactComponent as BellIcon } from "../../assets/Vector.svg";
import { ReactComponent as UserImg } from "../../assets/user_img.svg";

const Header = ({ auth }) => {
    return (
        <div className="flex justify-between mb-10">
            <h1 className="text-2xl	font-bold">Dashboard</h1>
            <div className="flex items-center">
                <SearchBar className="mr-[10px]" />
                <BellIcon className="mr-2 ml-5" />
                {
                    auth.isAuthenticated ?
                        <img className="rounded-full ml-3 h-[30px] w-[30px]" src={auth.user.picture} alt={auth.user.given_name} />
                        :
                        <UserImg className="rounded-full ml-3" />
                }

            </div>
        </div>
    );
}

Header.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(Header);