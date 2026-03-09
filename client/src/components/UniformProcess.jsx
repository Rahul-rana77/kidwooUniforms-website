import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import pattern from "../assets/pattern.mp4"
import febric from "../assets/febric2.mp4"
import cutting from "../assets/cutting.mp4"
import stitching from "../assets/Stiching.mp4"
import finalImg1 from "../assets/final-product1.jpeg"
import finalImg2 from "../assets/final-product2.jpeg"
import finalImg3 from "../assets/final-product3.jpeg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/uniformProcess.css"

function UniformProcess() {
  const media = [
    {
      type: "video",
      src: pattern,
      title: "Printing Solution",
    },
    {
      type: "video",
      src: febric,
      title: "Pattern Making",
    },
    {
      type: "video",
      src: cutting,
      title: "Fabric Cutting",
    },
    {
      type: "video",
      src: stitching,
      title: "Stitching",
    },
    {
      type: "image",
      src: finalImg1,
      title: "Final Uniform",
    },
    {
      type: "image",
      src: finalImg2,
      title: "Final Uniform",
    },
    {
      type: "image",
      src: finalImg3,
      title: "Final Uniform",
    },
  ];

  return (
    <section className="section" id="process">
      <div className="container">

        <h2 className="section-title">How We Make Our Uniforms</h2>
        <p className="section-subtitle">
          See the complete process of how our uniforms are designed and produced.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="media-card">

                {item.type === "video" ? (
                  <video className="video-style"
                    autoPlay
                    muted
                    loop
                    playsInline

                    
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img className="image-style"
                    src={item.src}
                    alt={item.title}
                    
                  />
                )}

                <h3>{item.title}</h3>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default UniformProcess;