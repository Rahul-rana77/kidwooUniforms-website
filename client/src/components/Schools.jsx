function Schools() {
  const partners = [
    'Greenfield Academy',
    'Riverside High',
    "St. Mary's School",
    'Oakwood College',
    'Hillcrest Prep',
    'Central Grammar',
  ]

  return (
    <section className="schools section" id="schools">
      <div className="container">
        <h2 className="section-title">Our School Partners</h2>
        <p className="section-subtitle">
          Trusted by leading educational institutions across the country for
          reliable, high-quality uniform supply.
        </p>

        <div className="schools-partners">
          {partners.map((school) => (
            <div className="partner-logo" key={school}>
              {school}
            </div>
          ))}
        </div>

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
                aria-hidden="true"
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
                aria-hidden="true"
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
                aria-hidden="true"
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

export default Schools
