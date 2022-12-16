import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const heroImages = [
        { 
            id:1,
            url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/61F97E9098730C6E359AC4FDD76D9BC92B2433346909A818802A9B8EDB02AA97/compose?width=1440&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim"
        },
        {
            id:2,
            url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/757BD50DDE15AEA20A1DBA02E4A7BEE497E14BB8B1E27217F6FEA384CD28256E/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim"
        },
        {
            id:3,
            url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C166EEA681E3AA1DF16788BDF7ED724D5D40E9D088CB7F52A1BFDC38BC63FE37/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim"
        }
      ]
      const settingsHero = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settingsHero} className="card-container">
        { heroImages.map(({url,id}) => (
                <img src={url} key={id}/>
            ))
        }
        </Slider>
  );
};

export default Hero;
