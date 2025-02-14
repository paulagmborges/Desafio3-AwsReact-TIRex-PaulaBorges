import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import './style.css';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Splide
        options={{
          type: "loop",
          perPage: 2.5,
          perMove: 1,
          gap: "1rem",
          autoplay: true,
          interval: 3000,
          pagination: true,
          arrows: true,
          focus: 0,
          breakpoints: {
            768: {
              perPage: 1.5,
            },
          },
        }}
        className="splide-custom"
      >
        <SplideSlide className="first-slide">
          <div className="image-container">
            <img
              src='https://meu-app-imagens.s3.us-east-1.amazonaws.com/quartoCarroselHome.svg'
              alt="Inspiração 1"
              className="carousel-image"
            />
            <div className="carousel-message">
              <p className="bedRoom">01 - Bed Room</p>
              <p className="inner">Inner Peace</p>

              <button className="square-button">
                <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/VectorCarousel.svg" alt="Vetor Coursel" className="vector-icon" />
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="image-container">
            <img
              src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/cozinhaCarroselHome.svg"
              alt="Inspiração 2"
              className="carousel-image"
            />
            <div className="carousel-message">
              <p className="bedRoom">01 - Bed Room</p>
              <p className="inner">Inner Peace</p>

              <button className="square-button">
                <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/VectorCarousel.svg" alt="Vetor" className="vector-icon" />
              </button>
            </div>
          </div>

        </SplideSlide>
        <SplideSlide>
          <div className="image-container">
            <img
              src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/mesinhaCarroselHome.png"
              alt="Imagem carousel 3"
              className="carousel-image"
            />
            
            <div className="carousel-message">

              <p className="bedRoom">01 - Bed Room</p>
              <p className="inner">Inner Peace</p>
              <button className="square-button">
                <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/VectorCarousel.svg" alt="Vetor" className="vector-icon" />
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;

