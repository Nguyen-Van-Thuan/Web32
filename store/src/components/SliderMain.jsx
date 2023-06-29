
import Slider from "react-slick";
import banner from "../../public/images/mau-banner-do.jpg"

const SliderMain = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div className="wrap-banner">
            <Slider {...settings}>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </Slider>
        </div>

    )
}

export default SliderMain