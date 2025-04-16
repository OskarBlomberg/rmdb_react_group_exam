import { useFetch } from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";

function Carousel() {
  const {
    data: trailers,
    loading,
    isError,
  } = useFetch("https://santosnr6.github.io/Data/favoritemovies.json");

  if (loading) return <h2>Trailers loading...</h2>;

  if (!trailers || trailers.length === 0) {
    return <h2 style={{ color: "mintcream" }}>No trailers found...</h2>;
  }

  if (isError) {
    return <p style={{ color: "mintcream" }}>Something went wrong...</p>;
  }

  const randomTrailers = trailers.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={randomTrailers.length > 1}
      >
        {randomTrailers.map((trailer, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-video">
              <iframe
                src={trailer.Trailer_link}
                title={`Trailer ${index + 1}`}
                width="100%"
                height="100%"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
