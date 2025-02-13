import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../assets/photo.jpg";
import "./slider.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      {" "}
      {/* Added wrapper class */}
      <div className="container mt-5 color">
        <div className="row justify-content-center">
          <div className="col-10">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div
                  key={index}
                  className="card text-center shadow-lg border-0"
                >
                  <div
                    className="card-header text-white d-flex justify-content-center align-items-center"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={d.img}
                      alt="User"
                      className="rounded-circle"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{d.name}</h5>
                    <p className="card-text">{d.review}</p>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample Data
const data = [
  {
    name: "Anil Rumdali Rai",
    img: photo,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eaque deserunt quibusdam.",
  },
  {
    name: "Anil Rumdali Rai",
    img: photo,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eaque deserunt quibusdam.",
  },
  {
    name: "Anil Rumdali Rai",
    img: photo,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eaque deserunt quibusdam.",
  },
];

export default Sliders;
