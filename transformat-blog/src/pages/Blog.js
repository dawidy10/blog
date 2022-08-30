import React, {useState, useEffect} from 'react'
import {getDocs, collection, doc, getDoc, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import { db } from '../firebase-config'
import scroll from '../Scroll.svg'
import search from '../search-icon.svg'
import footerlogo from '../footer-logo.svg'
import instagram from '../instagram.svg'
import { useParams } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';




function Blog(props){

    //  const [error, seterror] = useState('')
    

    // const params = useParams();
    // const [Doc, setDoc] = useState([])
    // useEffect(() => {
    //     const getPost = async () => {
            
    //         const docRef = doc(db, "articole", String(params.id));
    //         const docSnap = await getDoc(docRef);

    //         if (docSnap.exists()) {
    //         console.log("Document data:", docSnap.data());
    //         setDoc(docSnap.data());
    //         } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //         seterror("Ups, această pagină nu există...");
    //         }
    //     };
    //     getPost()
        
    // }, []);

    

    let searchposts = [];

    const postsCollectionRef = collection(db, "articole")
    const [postList, setpostList] = useState([]);
    const [searchpostList, setsearchpostList] = useState([]);
    
    

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            // console.log(data)
            setpostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            setsearchpostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getPosts()
        
    }, []);
    
    
    let search = ' ';
    
   
    function handleinput(event){
        console.log(event.target.value)
        search = event.target.value.toLowerCase();
        setsearchpostList(postList.filter(q => q.title.toLowerCase().includes(search)));
        
        // console.log(searchpostList);
        // console.log(postList);
    }


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
      <p className="page-title">Blogul transformat.</p>
      <input className="search-icon" type="text" placeholder="Caută un articol..." onChange={handleinput} />
      
      <div className="blog-posts">
      
                    {[...searchpostList].map((post) => {
                        return <div className="recent-post">
                            
                            <img className="recent-post-image" src={post.image} alt=""/>
                            <Link className="recent-post-title" to={"/articole/" + post.timestamp}>
                            {post.title}
                            </Link>
                            <p className="recent-post-date">{post.date}</p>
                            </div>
                    })}
      
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

export default Blog