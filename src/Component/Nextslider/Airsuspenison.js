import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s1 from '../IMG/s1.jpg'
import s2 from '../IMG/s2.jpg'
import s3 from '../IMG/s3.jpg'
import s4 from '../IMG/s4.jpg'
import s6 from '../IMG/s6.jpg'
import s7 from '../IMG/s7.jpg'
import Slider from "react-slick";
export default function Airsuspension() {
    const settings = {
        
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    

    const slidesData = [
        {
            image: s1,
            price: '$1938',
            name: 'HKS Hipermax S Coilovers - 2019+ Toyota Corolla',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3: 'Ait Tank',

            descc1 :"Air Ride Kits",
            descc2 :"Shock and Struts",
            descc3 :'Air Management',
            descc4: "Air Compressors",
            descc5 :"Air Tank"
            
          
         
        },
        {
            image: s2,
            price: '$200',
            name: 'HKS Hipermax S Coilovers - 2019+ Toyota Corolla',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
          
        },
        {
    
            image: s3,
            price: '$3008',
            name: 'HKS Hipermax S Coilovers - 2019+ Toyota Corolla',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
            
        }, {
            image: s4,
            price:'$2500',
            name: 'HKS Hipermax S Coilovers - 2019+ Toyota Corolla',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
           
        }, {
      
            image :s6,
            price: '$3400',
            name: 'HKS Hipermax S Coilovers - 2019+ Toyota Corolla',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
          
        },
        {
            image: s7,
            price: '$2900',
            name: 'HKS Hipermax S Coilovers - 2019+ Toyota Corolla',
            desc: 'Air Ride Kits',
            desc1: 'Shock and Struts',
            desc2: 'Air Management',
            desc3:'Ait Tank'
           
        },
      ];
    
    return (
        <div>
          
            <div className="staticsuspension">
                <div className="row">
                    <div className="col-md-3" id="mycoling">
                        <h1 className="staticsuspensiontitiel">Air Suspension </h1>
                        <div className="mr-auto">
                            <hr className="lineforsuspension" />
                            {slidesData.map((slide) =>
                                <><li class="ok"><a href="#">{slide.descc1}</a></li>
                                    <li class="ok"><a href="#">{slide.descc2}</a></li>
                                    <li class="ok"><a href="#">{slide.descc3}</a></li>
                                    <li class="ok"><a href="#">{slide.descc4}</a></li>
                                    <li class="ok"><a href="#">{slide.descc5}</a></li>
                                 
                                </>
                               
                            )}
                      </div>
                 </div>
                    <div className="col-md-9">
                    <Slider {...settings} className="slickimg ">
                {slidesData.map((slide) =>
                    <div className="slick-slide">
                        <img src={slide.image} className="imggs" />
                        <p class="procutname">{slide.name}</p>
                        <p class="procutprice">{slide.price}</p>
                       
                     
                       
                    </div>
                )}
                            </Slider>
                            </div>
                    </div>
              
           </div>
        </div>
    )
}
