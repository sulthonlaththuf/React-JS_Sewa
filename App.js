import React, { Component } from "react";
import { Layout, Header, Navigation } from "react-mdl";
import { withRouter, Link } from "react-router-dom";
import Test from "./Images/Test.jpg";
import swal from "sweetalert"

import "./App.css";
import Main from "./Main";

class App extends Component {
  logout = () => {
    swal({
      title: "Are you sure,",
      text: "want to logout ?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        swal("You have been logged out", {
          icon: "success"
        });
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("role");
        this.props.history.push("/");
      } else {
        swal("Considered People");
      }
    });
  };

  render() {
     const loginRegisterLink = (
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Navigation>
    );
    const userLink = (
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/data/officers">Officers</Link>
        <Link to="/data/fields">Fields</Link>
        <Link to="/data/rents">Rents</Link>
        <Link to="/myProfile">Profile</Link>
        <Link to="/" onClick={this.logout.bind(this)}>Logout</Link>
        
      </Navigation>
    );
    return (
      <div>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <strong>4Rent</strong>
              </span>
            }
          >
            {localStorage.token ? userLink : loginRegisterLink}
         
          </Header>
          <div
            style={{
              background: `url(${Test})`,
              backgroundSize: "100% 100%",
              backgroundAttachment: "fixed",
              height: "100%",
            }}
          >
            <Main />
          </div>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
