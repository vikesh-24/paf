import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";


import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewsFeed from "./NewsFeed";
import NewsFeedContent from "./NewsFeedContent";
import FollowingList from "./FollowingList";
import FollowerList from "./FollowerList";
import Profile from "./Profile";
import MyProfile from "./MyProfile";
import AllAccounts from "./AllAccounts";
import UnauthorizedPage from "./UnauthorizedPage";
import SkilllinkLanding from "./SkilllinkLanding";
import ProgressTracker from "../components/Progress/ProgressTracker";
import ProgressDashboard from "../components/Progress/ProgressDashboard";
import EducationalContentPage from "./EducationalContent/EducationalContentPage";

const userId = localStorage.getItem("psnUserId");

function AppContainer() {
  return (
   
  );
}

export default AppContainer;
