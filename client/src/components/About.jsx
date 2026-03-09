import aboutImg from '/images/about.jpg'

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img
              src={aboutImg}
              alt="Our team of tailors and designers working in our modern workshop"
            />
          </div>
          <div className="about-text">
            <h2>About Kidwoo Uniforms</h2>
            <p>
              With over 8 years of experience in the textile industry, Kidwoo Uniforms has established itself as a trusted name in school uniform
              manufacturing. We combine traditional craftsmanship with modern
              technology to deliver uniforms that meet the highest standards of
              quality and comfort.
            </p>
            <p>
              Whether you are a school administrator looking for a reliable
              supply partner or a parent shopping for durable school wear, we
              have the perfect solution for you.
            </p>
            <div className="about-values">
              <div className="about-value-item">
                <div className="about-value-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>All kind of febric </span>
              </div>
              <div className="about-value-item">
                <div className="about-value-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>Any design you Dream we make</span>
              </div>
              <div className="about-value-item">
                <div className="about-value-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>Quality uniforms made with Saparsh Feb & Valji Feb fabrics.</span>
              </div>
              <div className="about-value-item">
                <div className="about-value-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>On-Time Delivery Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
