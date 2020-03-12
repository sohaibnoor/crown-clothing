import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SigninAndSignup from './components/auth/SigninAndSignup';
import { auth, createUserProfileDocument } from './firebase/utils';
import { connect } from 'react-redux';
import { SetCurrentUser } from './redux/actions/SetCurrentUser';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { SetCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          SetCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      SetCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
