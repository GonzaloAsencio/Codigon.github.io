import {motion} from "framer-motion";
import {useRef,useEffect,useState} from "react";
//Se tiene que cargar el objeto y no la imagen.
import images from "../LandingPageImages";
import "./Slider.css";

function Slider() {
    const [width,setWidth] = useState(0);
    const carousel= useRef();
    useEffect(()=> {
       setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth/2));
    },[]);

    return (
        <div className="sliderConteiner">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                <motion.div  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} drag="x" dragConstraints={{right: width, left:-width}}className="inner-carousel">
                    {images.map((image,index) => {
                        return (
                            <motion.div className="item" key={index} >
                                <img src={image} key={index} alt=""/>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
}
export default Slider;