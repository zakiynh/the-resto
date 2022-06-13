import { useState } from "react";
import Slider from "react-slick";
import ImgCarouselA from "../assets/img-01.png";
import ImgCarouselB from "../assets/img-02.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [ImgCarouselA, ImgCarouselB];

function Carousel() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 1,
        speed: 350,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    const [ImageIndex, setImageIndex] = useState(0);

    return (
        <>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div className={index === ImageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default Carousel;
