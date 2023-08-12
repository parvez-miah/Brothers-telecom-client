import './HomeBanner.css'

import Slide1 from '../../assets/Slider/slide1.png'

const HomeBanner = () => {



    return (
        <div className='homebanner'>

            <div className='textside'>
                <h2 className="text-6xl heading">Get <span style={{ color:'#0088ff'}}>Best Device</span> <br />With  Lowest Price.</h2>
                <br />
                <span>iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPad OS mobile operating systems.  </span>
                <br />
                <br />
                <button className="btn btn-info">Explore Now</button>
            </div>
            <div className='slider'>
             <img src={Slide1} alt="" />
            </div>


        </div>
    )
}

export default HomeBanner