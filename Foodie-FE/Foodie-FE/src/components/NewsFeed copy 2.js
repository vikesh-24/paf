import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Tabs, Tab, Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "./assets/food.png";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import { getProfilePosts } from "../feature/checkProfile/checkProfileSlice";
import { getProfileInfo } from "../feature/checkProfile/checkProfileSlice";
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineSetting } from "react-icons/ai"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { AiOutlineLogout } from "react-icons/ai"
import { AiFillHome } from "react-icons/ai"
import { BiAddToQueue } from "react-icons/bi"

import {
  RiNewspaperLine,
  RiRadarLine,
  RiBaseStationLine,
  RiFolderUserLine,
  RiLogoutBoxLine,
  RiFileSearchLine,
} from "react-icons/ri";

import styles from "./styles/NewsFeed.module.css";

function NewsFeed() {
  let navigate = useNavigate();
  // const [tabValue, setTabValue] = useState("All");

  function handleClick(e) {
    navigate("/newsfeed/allaccounts");
  }

  function handleSignOut(e) {
    localStorage.removeItem("psnUserId");
    localStorage.removeItem("psnToken");
    localStorage.removeItem("psnUserFirstName");
    localStorage.removeItem("psnUserLastName");
    localStorage.removeItem("psnUserEmail");
    navigate("/s");
  }
  const postList = useSelector((state) => state.checkProfileReducer.postList);
  const userInfo = useSelector(
    (state) => state.checkProfileReducer.profileInfo
  );
  useEffect(() => {
    if (localStorage.getItem("psnToken") === null) {
      navigate("/unauthorized");
    }
  });

  return (
    
  );
}

export default NewsFeed;
