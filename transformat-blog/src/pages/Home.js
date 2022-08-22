import React, {useState, useEffect} from 'react'
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../firebase-config'
import scroll from '../Scroll.svg'


function Home() {
    const postsCollectionRef = collection(db, "articole")
    const [postList, setpostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setpostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getPosts()
    });
    return (
        <div>
            <div className="landing-section">
                <p className="landing-title">transformat</p><br/>
                <p className="landing-subtitle">BLOG CREȘTIN</p>
                <img src={scroll} alt="scroll_icon" className="scroll-icon"/>
            </div>
            <div className="recent-posts">
                <p className="recent-title">Ultimele articole.</p>
                <div>
                    {[...postList].reverse().slice(0,3).map((post) => {
                        return <div>{post.title}</div>
                    })}
                </div>
            </div>         
            
            
            
            {/* <div>
            {postList.map((post) => {
                return <div>{post.title}</div>
            })}
        </div> */}
        <div className="footer">
            <p className="insta-username">@transformatblog</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="copyright">© transformat 2022</p>
        </div>
        </div>
        
    )
}

export default Home
