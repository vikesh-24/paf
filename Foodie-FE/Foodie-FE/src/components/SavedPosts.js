import React, { useEffect, useState } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import axios from "axios";
import PostItem from "./PostItem";
import { ToastContainer, toast } from "react-toastify";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";


function SavedPosts() {
  const [showModal, setShowModal] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
    fetchSavedPosts();
  };

  const handleCloseModal = () => setShowModal(false);

  const showSuccessMessage = (inputMessage) => {
    toast.success(inputMessage, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const showFailMessage = (inputMessage) => {
    toast.error(inputMessage, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const fetchSavedPosts = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "post",
        url: "/api/v1/savedposts",
        headers: {
          Authorization: localStorage.getItem("psnToken"),
        },
        data: {
          id: localStorage.getItem("psnUserId"),
        },
      });

      if (response.data && response.data.status === "success") {
        setSavedPosts(response.data.payload || []);
      } else {
        showFailMessage("Failed to fetch saved posts");
      }
    } catch (error) {
      console.error("Error fetching saved posts:", error);
      showFailMessage("Error fetching saved posts");
    } finally {
      setLoading(false);
    }
  };

  const handleUnsavePost = async (postId) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/v1/unsavepost",
        headers: {
          Authorization: localStorage.getItem("psnToken"),
        },
        data: {
          userId: localStorage.getItem("psnUserId"),
          postId: postId,
        },
      });

      if (response.data && response.data.status === "success") {
        showSuccessMessage("Post removed from saved posts");
        // Remove the post from the local state
        setSavedPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      } else {
        showFailMessage("Failed to remove post from saved posts");
      }
    } catch (error) {
      console.error("Error unsaving post:", error);
      showFailMessage("Error removing post from saved posts");
    }
  };

  return (
    
  );
}

export default SavedPosts;