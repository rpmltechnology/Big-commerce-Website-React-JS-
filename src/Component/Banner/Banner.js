import React from 'react'
import BannerNav from './Bannernav'
import myimage from '../IMG/x.jpg'
export default function Banner() {
    return (
        <div>
            <section className="bannersection">
                <img id="bannerimg" className="image-response"src={myimage}/>
            </section>
         
        </div>
    )
}
