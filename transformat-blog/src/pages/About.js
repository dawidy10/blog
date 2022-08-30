import React, {useState, useEffect} from 'react'
import {getDocs, collection, doc, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import instagram from '../inst-dark.svg'





function About() {
    
    
    
    return (
        <div>
            <p className="page-title">Despre transformat.</p>
            <p className="about-description">
            Proiectul transformat își propune să transmită mai departe vestea bună și să promoveze conținut prin care să comunice mesajul evangheliei. Vrem ca, în toate, doar Dumnezeu să fie onorat și în centrul atenției. 
            <br/>
            <br/>
            Hristos în noi, nădejdea slavei – și fiindcă avem această nădejde, vrem ca prin noi, Dumnezeu să fie slăvit, și cât mai mulți oameni sa conștientizeze nevoia de salvare pe care o au.
            </p>
            
            
        
        </div>
        
    )
}

export default About
