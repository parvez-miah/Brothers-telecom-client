import React from 'react'
import './MiddleBanner.css'
import { Container } from 'react-bootstrap'

const MiddleBanner = () => {
    return (
     <Container>
            <div className='middlebanner'>

                <div className='section-div'>
                    <small>TABLETS</small>
                    <h3 className="text-5xl ">TABLETS Apple iPad Air</h3>
                    <p>iPad is a line of tablet computers br designed, developed and marketed  <br /> by Apple Inc., which run the iOS <br /> and iPad OS mobile operating systems.</p>
                    <button className="btn btn-active btn-warning">Buy Now</button>
                </div>






                <div className='apple-div'>
                    <small>SMART</small>
                    <h3 className="text-5xl">Apple
                        Watch</h3>
                    <p>Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities.</p>
                    <button className="btn btn-active btn-warning">Buy Now</button>
                </div>




            </div>
     </Container>
    )
}

export default MiddleBanner