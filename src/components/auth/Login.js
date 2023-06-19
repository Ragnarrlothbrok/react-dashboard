import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    props.loginUser(userData);
  };

  const responseGoogle = (response) => {
    const userData = jwt_decode(response.credential);
    props.loginUser(userData);
    navigate("/dashboard");
  };

  const errorGoogle = (error) => {
    props.loginUser(null, error);
  };

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex md:w-2/5 items-center justify-center bg-black">
        <h1 className="text-7xl text-white font-bold font-montserrat">
          Board.
        </h1>
      </div>
      <div className="w-full md:w-3/5 bg-[#f5f5f5] flex flex-col items-center justify-center font-lato text-left">
        <div className="md:w-[385px]">
          <h1 className="text-4xl mb-[5px] font-montserrat">Sign In</h1>
          <p className="text-base mb-6">Sign in to your account</p>
          <div className="flex gap-6">
            <GoogleLogin
              onSuccess={responseGoogle}
              width="100px"
              onError={errorGoogle}
            />
            <GoogleLogin
              onSuccess={responseGoogle}
              width="100px"
              onError={errorGoogle}
            />
          </div>
          <form
            className="mt-6 bg-white p-[30px] md:rounded-[20px]"
            onSubmit={onSubmit}
          >
            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={onChange}
              error={errors.email}
            />
            <TextFieldGroup
              placeholder="Password"
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              error={errors.password}
            />
            <button className="mb-5 text-base text-cyan-600">
              Forgot Password?
            </button>
            <input
              type="submit"
              className="bg-black w-full rounded-lg text-white text-center py-2 font-montserrat block"
              value="Sign In"
            />
          </form>{" "}
          <div className="text-center mt-5 font-lato text-base text-neutral-500">
            Don’t have an account?{" "}<button className="text-cyan-600">Register here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
