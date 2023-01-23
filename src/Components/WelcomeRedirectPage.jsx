import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/logo.png'
import { useSignUpContext } from '../ContextsManagers/SignUpContext';
import { motion } from "framer-motion";

const WelcomeRedirectPage = () => {
    const navigate = useNavigate();

    // IMPORTING FIRST NAME FROM SIGNUP CONTEXT TO DISPLAY ON OUR WELCOME PAGE
    const {firstName} = useSignUpContext()


    // A LOGIC TO REDIRECT USER TO SETUSERNAME PAGE
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/dashboard/setusername')
          }, 3000);
      
          return () => clearTimeout(timeout);
    },[navigate])

  return (
        <motion.div className='welcome-redirect-container' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              <div className='welcome-redirect-wrapper'>
        
        <Link className='back-to-home-btn btn' to='/'>
            Go back to site
        </Link>
        <div className='welcome-text-btn-wrapper'>
            <div>
            <img src={logo} alt="giftly logo" />
            <h2>Hello {firstName}, Welcome to Giftly 🎉</h2>
        <p>
        To continue using Giftly, head over to your inbox and click on <br></br> the verification link we just sent you.
        </p>
        <section >
              <p className='resend-mail'>Resend email</p>
            </section>
            </div>
        </div>
      
    </div>
        </motion.div>
  )
}

export default WelcomeRedirectPage
