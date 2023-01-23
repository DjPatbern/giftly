import React,{useState} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import giftDash from "../Assets/giftDash.png";
import cup from "../Assets/cup.png";
import archive from "../Assets/archive.png";
import message from "../Assets/message.png";
import add from "../Assets/add.png";
import searchNormal from "../Assets/search-normal.png";
import onlineWishes from "../Assets/Online wishes list 1.png";
import discover from "../Assets/discover.png";
import { excerpt } from "../Utility";
import vector from "../Assets/Vector.png";
import { useSignUpContext } from "../ContextsManagers/SignUpContext";
import { useInterestContext } from "../ContextsManagers/InterestContext";
import { Helmet } from "react-helmet-async";
import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const Dashboard = () => {


  // FIRST AND LAST NAME IMPORTED AFTER USER IS SIGNED UP
  const { firstName, lastName } = useSignUpContext();

  // A LOGIC TO CLOSE THE SET USERNAME AND INTEREST COMPONENT AFTER IT'S POPUP
  const {closeOutlet} = useInterestContext()
  const navigate = useNavigate()

  const [isOpen, setOpen] = useState(false);  // For Phone Size Hamburger


  return (

    // PAGE IN AND OUT MOTION ANIMATION
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

      {/* REACT HELMET FOR SEO */}
      <Helmet>
        <title>Dashboard - Giftly</title>
        <meta
          name="description"
          content="This is Giftly Dashboard, a platform where you can get the best gifts from your best people, 
          create a wish list in minutes and share to your friends on your favourite platforms!"
        />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <main className="main .bg-primary	"   >
        <div className="main-flex">

          {/* SIDEBAR */}
          <div className="sidebar">
            <img src={logo} alt="giftly logo" className="dashboard-logo" />
            <Link to="/" className="Link">
              <img src={giftDash} alt="gift" className="icon" />
              <span className="active-nav">My Wishlists</span>
            </Link>
            <Link to="/" className="Link">
              <img src={cup} alt="cup" className="icon" />
              <span className="none-active-nav">Leaderboard</span>
            </Link>
            <Link to="/" className="Link">
              <img src={discover} alt="discover" className="icon" />
              <span className="none-active-nav">Gift Ideas</span>
              <span className="dash-new">new</span>
            </Link>
            <Link to="/" className="Link">
              <img src={archive} alt="archive" className="icon" />
              <span className="none-active-nav">Archive</span>
            </Link>
            <Link to="/" className="Link">
              <img src={message} alt="message" className="icon" />
              <span className="none-active-nav">Support</span>
            </Link>


            {/* USERNAME DISPLAY */}
            <Link to="/" className="Link profile">
              <span className="profile-nub">
                {firstName[0]} {lastName[0]}
              </span>
              <span className="none-active-nav">
                {/* EXCERPT HERE IS USED TO SHOW ONLY THE FIRST 10 CHARACTERS OF THE USER'S NAME */}
                {excerpt(firstName + " " + lastName, 10)}
              </span>
              <img src={vector} alt="archive" className="icon" />
            </Link>
          </div>


          <div className="home">
            <div>
            
            {/* TOP NAV */}
              <section className="dashboard-top-nav">

            {/* HAMBUGER FOR PHONE NAVIGATION */}
              <div className="dropdown"> 
          <Hamburger
            toggle={() => setOpen((prevOpen) => !prevOpen)}
            rounded
            toggled={isOpen}
          />
          <div className={isOpen ? "dropdown-content" : "setOpen"}>
            <a href="/"  className='phone-nav'>My Wishlists</a>
            <a href="/"  className='phone-nav'>Leaderboard </a>
            <a href="/"  className='phone-nav'>Gift Ideas <span className="dash-new">new</span></a>
            <a href="/"  className='phone-nav'>Archive</a>
            <a href="/"  className='phone-nav'>Support</a>
            <a href="/"  className='phone-nav'>              <span className="profile-nub">
                {firstName[0]} {lastName[0]}
              </span>{excerpt(firstName + " " + lastName, 10)}</a>
          </div>
        </div>

        {/* END OF PHONE HAMBURGER */}


              
                <p className="top-create-wishlist">My Wishlists</p>
                <div className="dashboard-search">
                  <img src={searchNormal} alt="search symbol" />
                  <input type="text" placeholder="Find friends" />
                </div>
                <button className="dashboard-top-nav-btn top-create-wishlist" onClick={(e) => navigate('/')}>
                  <img src={add} alt="+" />
                  <span>Create Wishlist</span>
                </button>
              </section>

              {/* OUTLET TO HANDLE USERNAME AND INTEREST POPUP */}
              <div className={closeOutlet ? "close-outlet" : "popup-outlet"}>
                <div className="outlet">
                  <Outlet />
                </div>
              </div>

              <section className="wishlist-center-wrapper">
                <div>
                  <div className="online-wishes">
                    <img src={onlineWishes} alt="wishes" />
                  </div>
                  <h2>We’ve never met a list we didn’t like</h2>
                  <p>
                    Your first list doesn’t need to be perfect. Just put{" "}
                    <br></br> it out there, and see if it helps receive the best{" "}
                    <br></br> gifts from your friends.
                  </p>
                  <button className="dashboard-top-nav-btn" onClick={(e) => navigate('/')}>
                    <img src={add} alt="add" />
                    <span>Create Wishlist</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Dashboard;
