import React, {useState, useEffect} from 'react'
import {getDocs, collection, doc, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import { db } from '../firebase-config'
import scroll from '../Scroll.svg'
import footerlogo from '../footer-logo.svg'
import instagram from '../instagram.svg'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';





function Home() {
    // const postsCollectionRef = collection(db, "articole")
    // const postsCollectionRef = db.collection("articole");
    // const ref = collection(db, "articole");
    // const snapshot = getDocs(ref);
    // console.log(snapshot)
    // Array.from(snapshot).forEach(doc => {
    //     console.log(doc.id, '=>', doc.data());
    //   });

    





    
    const postsCollectionRef = collection(db, "articole")
    const [postList, setpostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            // console.log(data)
            setpostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getPosts()
        
    }, []);

    
    // const [postList, setpostList] = useState([]);

    // useEffect(() => {
    //     const getPosts =[];
    //     const articol = db.collection("articole")
    //     .onSnapshot((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             getPosts.push({
    //                 ...doc.data(),
    //                 key: doc.id,
    //             });
    //             setpostList(getPosts);
    //         });
    //     });
    //     }, []);
        

    
    
    return (
        <div>
            <div className="landing-section">
                <p className="landing-title">transformat</p><br/>
                <p className="landing-subtitle">BLOG CREȘTIN</p>
                <a href="#recent">
                <img src={scroll} alt="scroll_icon" className="scroll-icon"/>
                    </a>
            </div>
            <div className="recent-posts">
                <p className="recent-title" id="recent">Ultimele articole.</p>
                <div className="recent-posts-container">
                    {[...postList].reverse().slice(0,3).map((post) => {
                        return <div className="recent-post">
                            
                            <img className="recent-post-image" src={post.image} alt=""/>
                            <Link className="recent-post-title" to={"/articole/" + post.timestamp}>
                            {post.title}
                            </Link>
                            <p className="recent-post-date">{post.date}</p>
                            </div>
                    })}
                </div>
            </div>         
            
            
            
            {/* <div>
            {postList.map((post) => {
                return <div>{post.title}</div>
            })}
        </div> */}
        <div className="footer">
        <img src={instagram} alt="insta" className="instaicon"/>
            <p className="insta-username">@transformatblog</p>
            
            <p className="copyright">© transformat 2022</p>
            <img className="footer-logo" src={footerlogo} alt=""/>
        </div>
        </div>
        
    )
}

export default Home
