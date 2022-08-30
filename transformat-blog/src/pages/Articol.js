import React, {useState, useEffect} from 'react'
import {getDocs, collection, doc, getDoc, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import { db } from '../firebase-config'
import scroll from '../Scroll.svg'
import footerlogo from '../footer-logo.svg'
import instagram from '../instagram.svg'
import { useParams } from "react-router-dom";

function Articol(props){

     const [error, seterror] = useState('')
    

    const params = useParams();
    const [Doc, setDoc] = useState([])
    useEffect(() => {
        const getPost = async () => {
            
            const docRef = doc(db, "articole", String(params.id));
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setDoc(docSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            seterror("Ups, această pagină nu există...");
            }
        };
        getPost()
        
    }, []);



    

  
  


//   const docRef = doc(db, "cities", params.id);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//     }

  return(
    <div>
      <p style={error ? { display:'block'} : {display : 'none'}}>
      {error}
      </p>
      <div className="post-container">
        <div className="post-image-container">
        <img className="post-image" src={Doc.image} alt="post-image"/>
        </div>
     <p className="post-title">
        {Doc.title}
      </p>
      <pre className="post-content">
        {Doc.text}
      </pre>
      
      </div>
      


      <div className="footer">
        <img src={instagram} alt="insta" className="instaicon"/>
            <p className="insta-username">@transformatblog</p>
            
            <p className="copyright">© transformat 2022</p>
            <img className="footer-logo" src={footerlogo} alt=""/>
        </div>
    </div>
  )
}

export default Articol