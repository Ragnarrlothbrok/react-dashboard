import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PrivateRoute from "./components/common/PrivateRoute";
import "./App.css";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_G_OAUTH_KEY}>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
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
