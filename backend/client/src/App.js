import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar.jsx";

// Pages
import HomePage from "./Pages/HomePage/HomePage.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Login from "./Pages/Login/Login.jsx";
import UserHome from "./Pages/UserHome/UserHome.jsx";
import WorkspaceDisplay from "./Pages/WorkspaceDisplay/WorkspaceDisplay.jsx";

import AuthProvider from "./Context/AuthContext";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import SubscriptionPage from "./Pages/Subscription/SubscriptionPage";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route exact path="/:uID" element={<WorkspaceDisplay />} />
          <Route exact path="/profilepage" element={<ProfilePage />} />
          <Route exact path="/subscriptionpage" element={<SubscriptionPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
