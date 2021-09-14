
import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import './sign-in.style.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // } bcos we are using useState now
    const { email, password } = userCredentials
    const handleSubmit = async event => {
        event.preventDefault()
        // const { emailSignInStart } = this.props destructure in signinbcos of useState
        // const { email, password } = this.state boc we are usin useState


        emailSignInStart(email, password)
        // this.setState(email, password)

        // try {
        //     await auth.signInWithEmailAndPassword(email, password)
        //     this.setState({ email: '', password: '' })
        // } catch (error) {
        //     console.log(error)
        // } removing it bcos of saga

    }

    const handleChange = event => {
        const { value, name } = event.target
        // this.setState({ [name]: value })
        setCredentials({ ...userCredentials, [name]: value })



    }
    // render() { using function component now
    // const { googleSignInStart } = this.props we are usin useState now
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    // value={this.state.email}no need for this.state again bcos of useState
                    value={email}
                    label="email"
                    required />


                <FormInput
                    name="password"
                    type="password"
                    handleChange={handleChange}
                    value={password}
                    label="password"
                    required />

                <div className='buttons'>
                    <CustomButton type="submit" > SIGN IN</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton>
                </div>

            </form>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})



export default connect(null, mapDispatchToProps)(SignIn)