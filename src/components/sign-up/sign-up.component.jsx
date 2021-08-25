import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.style.scss'
import { createUserProfileDocument, auth } from '../../firebase/firebase.utils'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = ({ signUpStart }) => {
    const [signUpCredentials, setSignUpCredentials] = useState({ displayName: '', email: '', password: '', })
    // constructor() {
    //     super()
    //     this.state = {
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: ''
    //     }
    // }
    const { displayName, email, password, confirmPassword } = signUpCredentials
    const handleSubmit = async event => {
        event.preventDefault()
        // const { signUpStart } = this.props usin useState now
        // const { displayName, email, password, confirmPassword } = this.state we are usin useState now
        if (password !== confirmPassword) {
            alert("Password do not match")
            return;
        }

        signUpStart({ displayName, email, password })

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password)
        //     await createUserProfileDocument(user, { displayName })
        // this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: '' not useful again bcos of signUpSuccess saga and we want to keep our user
        // })
        // } catch (error) {
        //     console.error(error)
        // }
    }

    const handleChange = event => {
        const { name, value } = event.target
        setSignUpCredentials({ ...signUpCredentials, [name]: value })


    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'> SIGN UP </CustomButton>
            </form>

        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)