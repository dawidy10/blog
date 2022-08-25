import React, {useState} from 'react'
import {addDoc, collection, doc, setDoc} from 'firebase/firestore'
import { db } from '../firebase-config'
import {useNavigate} from 'react-router-dom'

function CreatePost() {
    let navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const postsCollectionRef = collection(db, "articole")
    const timestamp = Date.now();
    
    const createPost = async () => {
        
        // await addDoc(postsCollectionRef, {title, text, image, date, timestamp});
        
        await setDoc(doc(db, "articole", String(timestamp)), {
            title: title,
            text: text,
            image: image,
            date: date,
            timestamp: timestamp
          });
        navigate("/");
    };
    const newdate = new Date();
    
    const date = `${newdate.getDate()}/${newdate.getMonth()+1}/${newdate.getFullYear()}`;
    

    return (
        <div>
            <div>
                <h1>Create Post</h1>
                <div>
                    <label >Title</label>
                    <input type="text" onChange={(event) => {
                        setTitle(event.target.value);
                    }}/>
                </div>
                <div>
                    <label >Text</label>
                    <textarea onChange={(event) => {
                        setText(event.target.value);
                    }}/>
                </div>
                <div>
                    <label >Image</label>
                    <input type="text" onChange={(event) => {
                        setImage(event.target.value);
                    }}/>
                    
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost
