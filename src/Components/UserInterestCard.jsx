import React from "react";
import logo from "../Assets/logo.png";
import choose from "../Assets/choose.png";
import { motion } from "framer-motion";

import { useInterestContext } from "../ContextsManagers/InterestContext";


// LOGICS AND STATES IMPORTED FROM USEINTERESTCONTEXT
const UserInterestCard = () => {
  const {
    UserInterestList,
    handleInterest,
    addInterest,
    interests,
    removeInterest,
  } = useInterestContext();


  return (
    // PAGE IN AND OUT MOTION ANIMATION
    <motion.div className="user-interest-container" initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>


      <div className="user-interest-wrapper">
        <section>
          <img src={logo} alt="logo" />
          <h2>What are you into these days?</h2>
          <p>
            Select at least 5 interests to help us personalise <br></br> your
            Giftly experience.
          </p>

          {/* MAPPING EACH INTEREST FROM THE INTEREST CONTEXT DATABASE */}
          <section className="interest-lists">
            {UserInterestList.map((interest) => (
              <div
                key={interest.id}
                className={
                  interest.pushInterest === true
                    ? "each-interest interest-enable"
                    : "each-interest"
                }
                onClick={(e) => {
                 interest.pushInterest = !interest.pushInterest;
                  interest.pushInterest === true
                    ? addInterest(interest) : removeInterest(interest)
                    
                }}
              >
                <div>
                  <img src={choose} alt="choose" />
                  <div className="interest-name">
                    <p >
                        {interest.name}
                   </p>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section className="stick-down int-btn">
            <button
              className={
                interests.length > 4
                  ? "interest-done-btn"
                  : "interest-done-btn disable"
              }
              onClick={handleInterest}
            >
              Done
            </button>
          </section>
        </section>
      </div>
    </motion.div>
  );
};

export default UserInterestCard;
