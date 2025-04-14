import Slider, { Settings, CustomArrowProps } from "react-slick";
import campus from "../assets/images/campus.avif";
import homeimage from "../assets/images/homeimage.avif";
import labs from "../assets/images/labs.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  img: string;
}

// Custom arrow components with responsive sizing
const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 md:p-3 lg:p-5 rounded-full transition-all duration-300"
    aria-label="Next slide"
  >
    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
    </svg>
  </button>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 md:p-3 lg:p-5 rounded-full transition-all duration-300"
    aria-label="Previous slide"
  >
    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
    </svg>
  </button>
);

const Hero = () => {
  const slides: Slide[] = [{ img: campus }, { img: labs }, { img: homeimage }];

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false // Hide dots on very small screens if needed
        }
      }
    ]
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full">
        <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"} // Lazy load non-first images
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;