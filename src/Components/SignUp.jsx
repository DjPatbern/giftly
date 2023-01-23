import React, { useState } from 'react'
import cancel from '../Assets/cancel.png'
import logo from '../Assets/logo.png'
import eye from '../Assets/eye.png'
import { useNavigate } from 'react-router-dom'
import {  useSignUpContext } from '../ContextsManagers/SignUpContext'
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const SignUp = () => {

  // LOGICS IMPORTED FROM SIGNUP CONTEXT 
  const {handleSetUser,handleSignUp,
    firstName,
    lastName,
    email,
    password,
    confirmPassword} =  useSignUpContext()

    // STATE TO SHOW AND HIDE PASSWORD
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    

  return (
    <>
    {/* REACT HELMET FOR SEO */}
        <Helmet>
        <title>Sign Up - Giftly</title>
        <meta
          name="description"
          content="Sign Up to Gifly, a platform where you can get the best gifts from your best people, 
          create a wish list in minutes and share to your friends on your favourite platforms!"
        />
        <link rel="canonical" href="/signup" />
      </Helmet>

      {/* PAGE IN AND OUT MOTION ANIMATION */}
    <motion.div className='signup-container'initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <div className='signup-wrapper'>
        
      <img src={cancel} alt="cancel" className='wislist-cancel' onClick={(e) => navigate('/welcome')}/>
        <section>
        <img src={logo} alt="logo" />
        <h2>Sign up</h2>
        <p>You’re just a few clicks away from creating your <br></br> wish list.</p>
        </section>

        <section>
            <div className='first-last-div'>
                <div className='signupInput-div firstname'>
                  <p>First name</p>
                    <input type="text" placeholder='First name' 
                    name='firstName' value={firstName} onChange={handleSetUser}
                    />
                </div>

                <div className='signupInput-div lastname'>
                  <p>Last name</p>
                    <input type="text" placeholder='Last name' 
                    name='lastName' value={lastName} onChange={handleSetUser}
                    />
                </div>
            </div>
            <div className='signupInput-div email'>
              <p>Email Address</p>
                    <input type="email" placeholder='Email Address' 
                    name='email' value={email} onChange={handleSetUser}
                    />
                </div>

                <div className='signupInput-div password'>
                  <p>Password</p>
                    <div className='password-wrapper'>
                    <input type={showPassword ? "text" : "password"} placeholder='Password'
                    name='password' value={password}  onChange={handleSetUser}
                    /><span><img src={eye} alt="show password" onClick={(e) => setShowPassword(!showPassword)} /></span>
                    </div>
                </div>

                <p className='signupText'>
                Your password must contain at least 8 characters.
                </p>

                <div className='signupInput-div password'>
                  <p>Confirm password</p>
                    <div className='password-wrapper'>
                    <input type={showPassword ? "text" : "password"} placeholder='Confirm password' 
                    name='confirmPassword' value={confirmPassword}  onChange={handleSetUser}
                    /><span><img src={eye} alt="show password" onClick={(e) => setShowPassword(!showPassword)} /></span>
                    </div>
                </div>

                <button className={confirmPassword.length > 0 ? 'signUp-btn able' : 'signUp-btn disable'}  onClick={handleSignUp}>Sign up</button>
                <p>By signing up on Giftly, you agree to our Privacy Policy and Terms of Service</p>
                <p>Aleardy have an account? <strong>Sign in</strong></p>
        </section>

      </div>
    </motion.div>
    </>
  )
}

export default SignUp
