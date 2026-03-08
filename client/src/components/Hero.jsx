import heroBg from '/images/hero-bg.jpg'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src={heroBg}
          alt="School uniforms displayed in a professional manufacturing facility"
        />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>Quality Uniforms for Every School and Institution</h1>
        <p>
          Crafted with care for durability and comfort. We partner with schools
          across the nation to deliver premium uniforms that students love to
          wear and parents trust.
        </p>
        <div className="hero-buttons">
          <a href="#schools" className="btn btn-accent">
            Partner with Us
          </a>
          <a href="#process" className="btn btn-outline">
            How We Make
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
