import React from "react";
import cancel from "../Assets/cancel.png";
import logo from "../Assets/logo.png";
import { useShareContext } from "../ContextsManagers/ShareContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";


const GiftSuggestions = () => {
  const { SuggestedGiftList, addSuggest, clearSuggestions, removeSuggest } = useShareContext();
  const navigate = useNavigate();
  return (
    <>

{/* REACT HELMET FOR SEO */}
<Helmet>
        <title>Suggestion - Giftly</title>
        <meta
          name="description"
          content="This is Giftly Suggestion Page, a platform where you can get the best gifts from your best people, 
          create a wish list in minutes and share to your friends on your favourite platforms!"
        />
        <link rel="canonical" href="/suggested" />
      </Helmet>

      {/* PAGE IN AND OUT MOTION ANIMATION */}
    <motion.div className="suggestions-container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="suggestion-wrapper">
        <img src={cancel} alt="cancel" className="wislist-cancel" onClick={(e) => navigate('/')} />
        <section>
          <img src={logo} alt="logo" />
          <h2>Gift suggestions</h2>
        </section>

        <section>
          <div>
            {SuggestedGiftList.map((gift) => (
              <div key={gift.id} className="suggestedGift-wrapper">
                <div className="gift-price-wrapper">
                  <img src={gift.image} alt="Air Force Max" />
                  <div className="gift-name-price-wrapper">
                    <h4>{gift.name}</h4>
                    <p>NGN {gift.price}</p>
                  </div>
                </div>
                <div>
                  <button
                    className={gift.pushGift === true ? 'remove-gift-btn' : 'add-gift-btn'}
                    
                    onClick={() => {
                      gift.pushGift = !gift.pushGift;
                      gift.pushGift === true ? addSuggest(gift) : removeSuggest(gift)
                    }}
                  >
                    {gift.pushGift === true ? 'Remove' : 'Add'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="stick-down">
          <section className="delete-share-btn">
            <button className="deletebtn" onClick={clearSuggestions}>
              Cancel
            </button>
            <button className="sharebtn" onClick={(e) => navigate("/")}>
              Done
            </button>
          </section>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default GiftSuggestions;
