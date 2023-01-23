import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/logo.png'
// import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const WelcomePage = () => {
    const navigate = useNavigate();
  return (
    <>

    {/* REACT HELMET FOR SEO */}
          {/* <Helmet>
        <title>Welcome - Giftly</title>
        <meta
          name="description"
          content="Welcome to Giftly, a platform where you can get the best gifts from your best people, 
          create a wish list in minutes and share to your friends on your favourite platforms!"
        />
        <link rel="canonical" href="/welcome" />
      </Helmet> */}

      {/*  PAGE IN AND OUT MOTION ANIMATION */}
<motion.div className='welcome-container' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
<div className='welcome-wrapper'>
        
        <Link className='back-to-home-btn btn' to='/'>
            Go back to site
        </Link>
        <div className='welcome-text-btn-wrapper'>
            <div>
            <img src={logo} alt="giftly logo" />
        <p>
        Hi there! Kindly sign up to continue using Giftly <br></br>and share your wishlist with your family and friends.
        </p>
        <section >
                <button className='btn cancel' onClick={(e) => navigate('/')}>
                    Cancel
                    </button>
                    <button className='btn signup' onClick={(e) => navigate('/signup')}>
                        Sign Up
                    </button>
            </section>
            </div>
        </div>
      
    </div>
</motion.div>
</>
  )
}

export default WelcomePage
