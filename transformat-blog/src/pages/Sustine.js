import React, {useState, useEffect} from 'react'
import {getDocs, collection, doc, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import instagram from '../inst-dark.svg'





function Sustine() {
    
    
    
    return (
        <div className="support-page">
            <p className="page-title">Sustine proiectul transformat.</p>
            <div className="support-links">
            <a href="" className="support-link">buymeacoffee.com/transformatblog</a>
            <div className="support-link-wrap">
                <img src={instagram} alt=""/>
                <p className="support-link">@transformatblog</p>
            </div>
            </div>
            
            
        
        </div>
        
    )
}

export default Sustine
