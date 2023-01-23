import React from "react";
import cancel from "../Assets/cancel.png";
import logo from "../Assets/logo.png";
import wishname from "../Assets/wishname.png";
import gift from "../Assets/gift.png";
import { FiLink2 } from "react-icons/fi";
import { GrFormAdd } from "react-icons/gr";
import { BsFillStarFill } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import settings from "../Assets/settings.svg";
import trash from "../Assets/trash.png";
import send from "../Assets/send.png";
import giftCancel from "../Assets/gift-cancel.png";
import giftAdded from "../Assets/gift-added.png";
import arrowDown from "../Assets/arrowdown.png";
import { useNavigate } from "react-router-dom";
import { useShareContext } from "../ContextsManagers/ShareContext";
import { motion } from "framer-motion";

const ShareWishlist = () => {
  // CONTEXT TO BE USED ON THIS COMPONENTS, IMPORTED FROM SHARECONTEXT FILE
  const {
    handleShare,
    handleDelete,
    handlePrivacy,
    handleChange,
    wishListName,
    description,
    wishName,
    purchaseLink,
    price,
    wishDescription,
    quantity,
    moreOptions,
    setMoreOptions,
    privacyToggle,
    setPrivacyToggle,
    addedMoreOptions,
    setAddedMoreOptions,
    addImage,
    setAddImage,
    setAddImageForAdded,
    suggest,mostDesrired, setMostDesired,
    addArr, pushArr, handleAddData
  } = useShareContext();  

  const navigate = useNavigate();



    
  return (
    // PAGE IN AND OUT MOTION ANIMATION
    <motion.div className="wishlist-container" initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <div className="wishlist-wrapper">

        {/* INITIAL WISH LIST FIELD */}
        <img
          src={cancel}
          alt="cancel"
          className="wislist-cancel"
          onClick={(e) => navigate("/welcome")}
        />
        <section>
          <img src={logo} alt="logo" />
          <p>New wish list</p>
          <h2>Create a wish list</h2>
        </section>
        <section className="wishlist-input-section">
          <div className="wishlist-inputs">
            <h4>List details</h4>
            <p>Add wish list name and description.</p>
            <div className="listName-div">
              <p>{wishListName.length > 0 && "Wish list name"}</p>
              <input
                type="text"
                placeholder="Wish list name"
                value={wishListName}
                name="wishListName"
                onChange={handleChange}
              />
            </div>
            <div className="listName-div">
              <p>{description.length > 0 && "Description (optional)"}</p>
              <input
                type="text"
                placeholder="Description (optional)"
                value={description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <h4>Add wishes</h4>
            <p>Add wishes and other details.</p>
            <div className="added-wishlist">
              <div className="maximize-flex">
                {addImage && (
                  <div>
                    <img src={giftAdded} alt="added gift" />
                    <img
                      src={giftCancel}
                      alt="cancel"
                      className="cancel-added-img"
                      onClick={(e) => setAddImage(false)}
                    />
                  </div>
                )}
                <div>
                  <img
                    src={arrowDown}
                    alt="more options"
                    onClick={(e) => setMoreOptions(!moreOptions)}
                  />
                </div>
              </div>
              <img src={wishname} alt="wishlist" className="wislist-icon" />
              <span>
                <input
                  type="text"
                  placeholder="Wish name"
                  value={wishName}
                  name="wishName"
                  onChange={handleChange}
                />
              </span>

              <div className="purchase-link">
                <FiLink2 className="wislist-icon" />
                <span>
                  <input
                    type="url"
                    placeholder="Purchase Link"
                    value={purchaseLink}
                    name="purchaseLink"
                    onChange={handleChange}
                  />
                </span>
              </div>
            </div>
            <section className="added-wishlist-extended">
              {moreOptions && (
                <div>
                  <section className="options-dropdown">
                    <select>
                      <option>₦</option>

                      <option>$</option>
                      <option>€</option>
                      <option>£</option>
                    </select>{" "}
                    <span>
                      <input
                        type="number"
                        placeholder="Price (optional)"
                        value={price}
                        name="price"
                        onChange={handleChange}
                      />
                    </span>
                  </section>

                  <section className="qty-desc">
                    <input
                      type="number"
                      placeholder="Quantity"
                      value={quantity}
                      name="quantity"
                      onChange={handleChange}
                    />
                  </section>
                  <section className="qty-desc">
                    <input
                      type="text"
                      placeholder="Description"
                      value={wishDescription}
                      name="wishDescription"
                      onChange={handleChange}
                    />
                  </section>
                  <section className="added-btns">
                    <button className={mostDesrired ? 'desired' : ''} onClick={(e) => setMostDesired(!mostDesrired)}><BsFillStarFill /> Most desired</button>
                    {!addImage && (
                      <button onClick={(e) => setAddImage(true)}>
                        <BiImageAdd /> Add Image
                      </button>
                    )}
                  </section>
                </div>
              )}
            </section>

            {/* WISH LIST FIELD WHEN CLICKED 'ADD ANOTHER' */}

            {
                  addArr.length > 0 &&  addArr.map((added) => (
                            <div key={addArr.indexOf(added)}>
                              <>
                <div className="added-wishlist" style={{ marginTop: "10px" }}>
                  <div className="maximize-flex">
                    {added.addImage === true && (
                      <div>
                        <img src={giftAdded} alt="added gift" />
                        <img
                          src={giftCancel}
                          alt="cancel"
                          className="cancel-added-img"
                          onClick={(e) => setAddImageForAdded(false)}
                        />
                      </div>
                    )}

                    <div>
                      <img
                        src={arrowDown}
                        alt="more options"
                        onClick={() => added.show = !added.show}
                      />
                    </div>
                  </div>
                  <img src={wishname} alt="wishlist" className="wislist-icon" />
                  <span>
                    <input
                      type="text"
                      placeholder="Wish name"

                    />
                  </span>

                  <div className="purchase-link">
                    <FiLink2 className="wislist-icon" />
                    <span>
                      <input
                        type="url"
                        placeholder="Purchase Link"

                      />
                    </span>
                  </div>
                </div>
                <section className="added-wishlist-extended">
                  {added.show = true && (
                    <div>
                      <section className="options-dropdown">
                        <select>
                          <option>₦</option>

                          <option>$</option>
                          <option>€</option>
                          <option>£</option>
                        </select>{" "}
                        <span>
                          <input
                            type="number"
                            placeholder="Price (optional)"

                          />
                        </span>
                      </section>

                      <section className="qty-desc">
                        <input
                          type="number"
                          placeholder="Quantity"

                        />
                      </section>
                      <section className="qty-desc">
                        <input
                          type="text"
                          placeholder="Description"

                        />
                      </section>
                      <section className="added-btns">
                        <button className={added.desired === true ? 'desired' : ''} onClick={(e) => added.desired = !added.desired}><BsFillStarFill /> Most desired</button>

                        {added.addImage === false && (
                          <button onClick={() => added.addImage = true}>
                           <BiImageAdd /> Add Image
                          </button>
                        )}
                      </section>
                    </div>
                  )}
                </section>
              </>
                            </div>
                          ))
            }

            {/* WISH LIST ITEMS COMING FROM GENERATED SUGGESTIONS */}

            {suggest.length > 0
              ? suggest.map((suggestItems, key) => (
                  <div key={key}>
                    <div
                      className="added-wishlist"
                      style={{ marginTop: "10px" }}
                    >
                      <div className="maximize-flex">
                        <div>
                          <img src={suggestItems.image} alt="added gift" />
                          <img
                            src={giftCancel}
                            alt="cancel"
                            className="cancel-added-img"
                            onClick={(e) => setAddImageForAdded(false)}
                          />
                        </div>

                        <div>
                          <img
                            src={arrowDown}
                            alt="more options"
                            onClick={(e) =>
                              setAddedMoreOptions(!addedMoreOptions)
                            }
                          />
                        </div>
                      </div>
                      <img
                        src={wishname}
                        alt="wishlist"
                        className="wislist-icon"
                      />
                      <span>
                        <input
                          type="text"
                          placeholder="Wish name"
                          value={suggestItems.name}
                          name=""
                        />
                      </span>

                      <div className="purchase-link">
                        <FiLink2 className="wislist-icon" />
                        <span>
                          <input
                            type="url"
                            placeholder="Purchase Link"
                            value={suggestItems.purchaseLink}
                            name=""

                          />
                        </span>
                      </div>
                    </div>
                    <section className="added-wishlist-extended">
                      {addedMoreOptions && (
                        <div>
                          <section className="options-dropdown">
                            <select>
                              <option>₦</option>

                              <option>$</option>
                              <option>€</option>
                              <option>£</option>
                            </select>{" "}
                            <span>
                              <input
                                type="number"
                                placeholder="Price (optional)"
                                value={suggestItems.price}
                                name=""
    
                              />
                            </span>
                          </section>

                          <section className="qty-desc">
                            <input
                              type="number"
                              placeholder="Quantity"

  
                            />
                          </section>
                          <section className="qty-desc">
                            <input
                              type="text"
                              placeholder="Description"
                              name="addedwishDescription"
  
                            />
                          </section>
                          <section className="added-btns">
                            <button className={suggestItems.desired ? 'desired' : ''} onClick={(e) => suggestItems.desired = !suggestItems.desired }><BsFillStarFill /> Most desired</button>

  
                          </section>
                        </div>
                      )}
                    </section>
                  </div>
                ))
              : ""}
          </div>
        </section>

        {/* ADD ANOTHER BUTTON */}
        <section className="add-another" onClick={() => handleAddData(pushArr)}>
          <GrFormAdd />
          <span>Add another</span>
        </section>

        {/* GENERATE WISHLIST BUTTON  */}
        <section
          className="generate-text-section"
          onClick={(e) => navigate("/suggested")}
        >
          <img src={gift} alt="gift" className="wislist-icon" />{" "}
          <span className="generate-text"> Generate gift ideas</span>
        </section>

        {/* PRIVACY AND SHARING BUTTON */}
        <section className="privacy-section">
          <div
            onClick={(e) => setPrivacyToggle(!privacyToggle)}
            className="privacy"
          >
            <img src={settings} alt="" className="wislist-icon" />
            <span>Privacy and Sharing</span>
          </div>
          {privacyToggle && (
            <div className="col-12 py-3">
              <div className="form-check-inline mx-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="radioOption"
                  onChange={handlePrivacy}
                />
                <label htmlFor="radioOption" className="form-check-label">
                  Public (anyone online can view wish list)
                </label>
                <br></br>
                <input
                  type="radio"
                  className="form-check-input"
                  name="radioOption"
                  onChange={handlePrivacy}
                />
                <label htmlFor="radioOption" className="form-check-label">
                  Private (only those with link can view)
                </label>
              </div>
            </div>
          )}
        </section>

            
        <div className="stick-down">
          <section className="delete-share-btn">

            {/* DELETED WISHLISTS BUTTON */}
            <button
              className={
                wishListName.length > 0 ? "deletebtn able" : "deletebtn disable"
              }
              onClick={handleDelete}
            >
              <img src={trash} alt="trash" className="wislist-icon" />{" "}
              <span>Delete</span>
            </button>

            {/* SHARE WISH LIST BUTTON */}
            <button
              className={
                wishListName.length > 0 ? "sharebtn able" : "sharebtn disable"
              }
              onClick={handleShare}
            >
              <img src={send} alt="send" className="wislist-icon" />{" "}
              <span>Share</span>
            </button>


          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ShareWishlist;
