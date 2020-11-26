import React,{useState,useEffect} from 'react'
import Post from './Post'
import './App.css';
import {db} from './firebase';
import Upload from './Upload';


function App() {
  
  



  return (
    <div className="app">
        <div className="app__header">
          <img
            className="app__headerimg"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._9lt8FcexKeclAErsTfp5wHaCv%26pid%3DApi&f=1"
            alt=""
          />
        </div>
        <Upload />
    </div>
  );
}

export default App;
