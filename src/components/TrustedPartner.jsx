import React from "react";
import Slider from "react-slick";
import { slidedata } from "./Mapdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

const TrustedPartner = () => {
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 473,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="trusted_padding">
                <Container className="custom_container2 mx-auto">
                    <h3 className='fw-medium text_black fs_lg text-center '>Our Trusted Partners</h3>
                    <Slider className="mt-5" {...settings}>
                        {slidedata.map((slides, e) => {
                            return (
                                <div key={e} className="px-6">
                                    <a
                                        href={''}
                                        className="flex items-center justify-center "
                                    >
                                        <img src={slides.Image} alt="sliderimg" width={190} />
                                    </a>
                                </div>
                            );
                        })}
                    </Slider>
                </Container>
            </div>
        </>
    );
};
export default TrustedPartner;