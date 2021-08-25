import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import { onEmailSignInStart } from './redux/user/user.sagas';
import { checkUserSession } from './redux/user/user.actions'



const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  // no need again our setCurrentUser i.e action will take care of it
  // constructor() {
  //   super()
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  // unsubscribeFromAuth = null

  // componentDidMount() {
  //   const { checkUserSession } = this.props
  //   checkUserSession() no need of componentDidMount again useEffect will take care of it
  // no need aggain bcos of googlesignin and onEmailSignInStart
  // const { setCurrentUser } = this.props 

  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth)
  //     console.log(userRef)
  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data()

  //       }, () => { console.log(this.state) })

  //     })

  // }
  //   setCurrentUser(userAuth) comment out bcos of saga
  //addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
  // createUserProfileDocument(user)will pass this to onAuthStateChanged bcos we needed our state data too
  // instead of this state use the createUserProfileD below
  // this.setState({ currentUser: user })
  // console.log(user)

  //   })


  // componentWillUnmount() {
  //   this.unsubscribeFromAuth()
  // }




  return (
    <div >
      <Header
      // currentUser={this.state.currentUser} we are passing current user from our user reducer now instead of appjs
      />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );

}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())

})


// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// }) no need again bcos of emailsignin and googlesignin

export default connect(mapStateToProps, mapDispatchToProps)(App);


