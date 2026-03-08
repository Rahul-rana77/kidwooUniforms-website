import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import { Navigation, Autoplay } from "swiper/modules"
import cert1 from '../assets/certifications.jpeg'
import cert2 from '../assets/certification2.jpeg'
import cert3 from '../assets/certification3.jpeg'

function Certifications() {
  const certificates = [
    cert1,
    cert2,
    cert3
  ]

  return (
    <section className="schools section" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <p className="section-subtitle">
          Our commitment to quality and reliability is backed by trusted
          certifications and industry recognition.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{delay:2500}}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="schools-partners"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="partner-logo">
                <img
                  src={cert}
                  alt="certificate"
                  style={{ 
                    width:"60%",
                    height:"auto",

                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="schools-info">
          <h3>Why Schools Choose Us</h3>

          <div className="schools-benefits">
            <div className="benefit-item">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#1a5276"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
              <p>Dedicated Account Manager</p>
            </div>

            <div className="benefit-item">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#1a5276"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <p>Competitive Bulk Pricing</p>
            </div>

            <div className="benefit-item">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#1a5276"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p>On-Time Delivery</p>
            </div>
          </div>

          <div className="schools-cta">
            <a href="#contact" className="btn btn-primary">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications