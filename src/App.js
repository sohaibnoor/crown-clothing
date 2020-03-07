import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SigninAndSignup from './components/auth/SigninAndSignup';
import { auth, createUserProfileDocument } from './firebase/utils';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
