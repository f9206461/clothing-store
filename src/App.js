import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // auth is an open subscription, which will always run as long as the app is mounted.
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        // This is a user reference (if the user is never stored in the database before)
        const userRef = await createUserProfileDocument(userAuth);

        // taking form Firebase Firestore DB
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          // console.log('State', this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount() { // close the subscription.
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  } 
}
// Switch will only renders the first occurence of the path.

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
