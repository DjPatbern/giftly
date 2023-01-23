import React from "react";
import logo from "../Assets/logo.png";
import { useInterestContext } from "../ContextsManagers/InterestContext";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const UsernameCard = () => {

  // LOGICS AND STATE IMPORTED FROM USEINTERESTCONTEXT TO HANDLE USERNAME
  const { userName, setUserName, handleUserName } = useInterestContext();

  return (
    <>

    {/* REACT HELMET FOR SEO */}
              <Helmet>
        <title>Set Username - Giftly</title>
        <meta
          name="description"
          content="Set your Giftly Username, a platform where you can get the best gifts from your best people, 
          create a wish list in minutes and share to your friends on your favourite platforms!"
        />
        <link rel="canonical" href="/dashboard/setusername" />
      </Helmet>

      {/* PAGE IN AND OUT MOTION ANIMATION */}
    <motion.div className="userName-card-container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="userName-card-wrapper">
        <section>
          <img src={logo} alt="logo" />
          <h2>Create a username</h2>
          <p>Create a unique username personalized for yourself on Giftly.</p>
          <div className="usernameInput">
            {userName.length > 0 && <p>Username</p>}
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <section>
            <button
              className={
                userName.length > 0
                  ? "nextStep-btn able"
                  : "nextStep-btn disable"
              }
              onClick={handleUserName}
            >
              Next step
            </button>

          </section>

        </section>
      </div>
    </motion.div>
    </>
  );
};

export default UsernameCard;
