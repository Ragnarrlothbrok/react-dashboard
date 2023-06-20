import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";

// import jwt_decode from "jwt-decode";
// import setAuthtoken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/common/PrivateRoute";
import "./App.css";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_G_OAUTH_KEY}>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Login />} />
              {/* <Route exact path="/register" element={Register} /> */}
              <Route path="/login" element={<Login />} />
              {/* <Route path="/dashboard">
                <PrivateRoute element={Dashboard} />
              </Route> */}
              {/* <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              /> */}
              <Route
                path="/dashboard"
                element={
                    <Dashboard />
                }
              /> 
            </Routes>
          </div>
        </Router>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
