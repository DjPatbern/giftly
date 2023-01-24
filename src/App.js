import "./App.css";
import { UseShare } from "./ContextsManagers/ShareContext";
import Dashboard from "./Components/Dashboard";
import UserInterestCard from "./Components/UserInterestCard";
import UsernameCard from "./Components/UsernameCard";
import WelcomeRedirectPage from "./Components/WelcomeRedirectPage";
import SignUp from "./Components/SignUp";
import ShareWishlist from "./Components/ShareWishlist";
import WelcomePage from "./Components/WelcomePage";
import { Route, Routes } from "react-router-dom";
import GiftSuggestions from "./Components/GiftSuggestions";
import { UseSignUp } from "./ContextsManagers/SignUpContext";
import { UseInterest } from "./ContextsManagers/InterestContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  
  return (
    <div className="App">
      <UseShare>
        <UseSignUp>
          <UseInterest>
            <main className="App-main">
            <ToastContainer position="top-center" />
              <Routes>
                <Route path="/" element={<ShareWishlist />} />
                <Route path="/suggested" element={<GiftSuggestions />} />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/welcomeredirect"
                  element={<WelcomeRedirectPage />}
                />
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="setusername" element={<UsernameCard />} />
                  <Route path="interest" element={<UserInterestCard />} />
                </Route>
              </Routes>
            </main>
          </UseInterest>
        </UseSignUp>
      </UseShare>
    </div>
  );
}

export default App;
