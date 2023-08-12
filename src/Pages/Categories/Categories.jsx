import React from 'react'
import './Categories.css'

const Categories = () => {
    return (
        <div className='categories-elements'>
        {/* First */}
        <div className='single-elements'>
                <div><img src="https://i.ibb.co/16MDg04/cat2-1.jpg" alt="" /></div>
                <div><button className="btn btn-outline btn-secondary">Laptop</button></div>
        </div>
        {/* second */}
            <div className='single-elements'>
                <div><img src="https://i.ibb.co/JB0XgRT/cat4-1.jpg" alt="" /></div>
                <div><button className="btn btn-outline btn-secondary">Phone</button></div>
           </div>
        {/* Third */}
            <div className='single-elements'>
                <div><img src="https://i.ibb.co/3WMhQsg/cat5-1.jpg" alt="" /></div>
                <div><button className="btn btn-outline btn-secondary">Laptop</button></div>
        
        </div>
        
      
        {/* Fourth */}
            <div className='single-elements'>
                <div><img src="https://i.ibb.co/4FMNSMy/cat1-1.jpg" alt="" /></div>
                <div><button className="btn btn-outline btn-secondary">Smart Watches</button></div>
        </div>
        {/* fifth */}
            <div className='single-elements'>
                <div><img src="https://i.ibb.co/HH40rwg/cat3-1.jpg" alt="" /></div>
                <div><button className="btn btn-outline btn-secondary">Smart Phone</button></div>
        </div>
        
        
        </div>
    )
}

export default Categories