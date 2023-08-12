import React from 'react'
import './Deal.css'

const Deal = () => {
    return (
        <div className='deal'>
            <div>
                <button className="btn btn-small">DEAL OF THE DAY</button>
                <br />
                <br />
                <h3 className="text-5xl"><b>Get <span style={{ color: '#0088ff' }}>Virtual Reality</span> <br /> with 30% off.</b></h3>
                <br />
                <p>Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. Applications of VR include entertainment, education and business.</p>
                <br />
             <button>GET 30% OFF</button>

            </div>

            <div className='imagesection'>
                <img src="https://i.ibb.co/g6Zrk21/img1-1.png" alt="" />
            </div>
        </div>
    )
}

export default Deal