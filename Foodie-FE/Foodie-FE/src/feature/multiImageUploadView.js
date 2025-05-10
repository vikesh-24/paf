import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import './multiImageUpload.css';

function MultiMediaUploadView(props) {
    const [mediaItems, setMediaItems] = useState([]);
    
    useEffect(() => {
        if (props && props.images && props.images.length > 0) {
            setMediaItems(props.images);
        }
    }, [props]);

    const isVideo = (url) => {
        // Check if the base64 string suggests it's a video
        if (url && typeof url === 'string') {
            return url.includes('data:video/') || 
                   url.includes('data:application/octet-stream') ||
                   url.includes('video/');
        }
        return false;
    };

    return (
       
    );
}

export default MultiMediaUploadView;