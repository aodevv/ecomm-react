import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/ShopPage";
import Auth from "./pages/auth/Auth";

import CheckoutPage from "./pages/checkout/ChekoutPage";

import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions"

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { checkUserSession } = this.props;
    checkUserSession();

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Auth />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
