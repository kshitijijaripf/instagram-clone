import React, { useState,useEffect } from "react";
import { Button } from "@material-ui/core";
import {  db } from "./firebase";
import Post from './Post';

function Upload() {
  const [posts,setPosts]=useState([]);
  const [caption, setCaption] = useState("");
  const [username, setUsername] = useState("");
  const [flip,setFlip]=useState(false)

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  },[]);

  const handleUpload = () => {
    setFlip(!flip)
    db.collection("posts").add({
      caption: caption,
      username: username,
    });
    setCaption("");
    setUsername("");
  };


  const deletes = () => {
    setFlip(!flip)
    db.collection("posts")
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
      });
  };

   


  return (
    <div>
       <div 
      className={`card ${flip ? 'flip' : ''}`}
      
      >
           <div className = 'front'>
              <h1>Front</h1>
           </div>
           <div className = 'back' >
           {
          posts.map(post =>(
          <Post  caption={post.caption} username ={post.username} />
           ))
           }
         </div>

        </div>
      <input
        type="text"
        placeholder="Enter a caption"
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />

      <input
        type="text"
        placeholder="Enter a username"
        onChange={(event) => setUsername(event.target.value)}
        value={username}
      />
      <Button onClick={handleUpload}>Upload</Button>
      <Button onClick={deletes}>Delete</Button>
      

    </div>
  );
}

export default Upload;