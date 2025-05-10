import React, { useState } from "react";

import { Hashicon } from "@emeraldpay/hashicon-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Foot from "../components/components/Foot"
import {
  RiHeartFill,
  RiHeartLine,
  RiMessage2Fill,
  RiShareForwardFill,
  RiSendPlane2Fill
} from "react-icons/ri";
import { AiFillEdit } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";

import { Button, Col, Form, Row } from "react-bootstrap";

import styles from "./styles/PostItem.module.css";
import { useDispatch } from "react-redux";
import {
  addLove,
  addShare,
  addComment,
  getFollowingPosts,
} from "../feature/followingPost/followingPostSlice";
import { BsFillPencilFill } from "react-icons/bs";
import MultiImageUploadView from "../feature/multiImageUploadView";

function PostItem(props) {
  const dispatch = useDispatch();

  const [loveStatus, setLoveStatus] = useState(false);
  const [commentStatus, setCommentStatus] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [sendButtonDisable, setSendButtonDisable] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(
    localStorage.getItem("psnUserId")
  );
  const [postId, setPostId] = useState(props.postId);

  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  function handleLoveClick(e) {
    if (!props.loveList.includes(currentUserId)) {
      setLoveStatus(true);
      dispatch(addLove({ postId: postId, userId: currentUserId }));
    } else {
      setLoveStatus(false);
      dispatch(addLove({ postId: postId, userId: currentUserId }));
    }
  }

  function handleShareClick(e) {
    dispatch(addShare({ postId: postId, userId: currentUserId }));
    dispatch(getFollowingPosts());
  }

  function handleCommentButtonClick(e) {
    setCommentStatus(!commentStatus);
  }

  function handleCommentContentChange(e) {
    e.preventDefault();

    setCommentContent(e.target.value);

    if (commentContent.length - 1 > 0 && commentContent.length - 1 <= 100) {
      setSendButtonDisable(false);
    } else {
      setSendButtonDisable(true);
    }
  }



  function sendComment(e) {
    dispatch(
      addComment({
        postId: postId,
        newComment: {
          userId: localStorage.getItem("psnUserId"),
          userFullname:
            localStorage.getItem("psnUserFirstName") +
            " " +
            localStorage.getItem("psnUserLastName"),
          content: commentContent,
        },
      })
    );
    setCommentContent("");
  }

  return (
   
  );
}

export default PostItem;
