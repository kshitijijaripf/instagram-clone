import React, { useState,useEffect } from "react";
import {  db } from "./firebase";
import Post from './Post';

function Upload() {
  const [posts,setPosts]=useState([]);
  const [caption, setCaption] = useState("");
  const [username, setUsername] = useState("");
  const [flip,setFlip]=useState(false)

  useEffect(()=>{
   
    db.collection('posts').onSnapshot(snapshot =>{
      if(snapshot.docs.length == 0){
        console.log('empty')
      }else{
        setFlip(!flip)
      }
      setPosts(snapshot.docs.map(doc => doc.data()))      
    })
  },[]);

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
      onClick={deletes}
      >
           <div className = 'front'>
              <h1>Front</h1>
           </div>
           <div className = 'back'  >
           {
          posts.map(post =>(
          <Post caption={post.caption} username ={post.username} />
           ))
           }
         </div>

        </div>
    </div>
  );
}

export default Upload;




