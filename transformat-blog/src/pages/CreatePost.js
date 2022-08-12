import React, {useState} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebase-config'
import {useNavigate} from 'react-router-dom'

function CreatePost() {
    let navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const postsCollectionRef = collection(db, "articole")
    const createPost = async () => {
        await addDoc(postsCollectionRef, {title, text});
        navigate("/");
    };

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
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost
