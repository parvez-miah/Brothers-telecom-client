import React from 'react'
import './NewsLatter.css'

const NewsLatter = () => {
    return (
        <div className='newsLatter'>
            
            <div>
                <h2 className='text-6xl bold'>Our <span style={{ color: '#0088ff' }}>Newsletter</span></h2>
                <span>Get updates by subscribe our weekly newsletter</span>
            </div>

            <div style={{display:'flex', marginTop:'12px'}}>
                <input type="text" placeholder="Type your Email" className="input input-bordered input-accent w-full max-w-xs" />
                <button style={{marginLeft:'-20px', borderRadius:'30px'}} className="btn btn-active btn-primary">Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLatter