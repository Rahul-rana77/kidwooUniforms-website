function Testimonials() {
  const testimonials = [
    {
      text: 'Kidwoo Uniforms has been our trusted supplier for over 5 years. The quality is consistently excellent and their delivery is always on time. Our parents love the durability.',
      name: 'Sarah Johnson',
      role: 'Principal, Greenfield Academy',
      initials: 'SJ',
    },
    {
      text: 'Switching to Kidwoo Uniforms was the best decision we made. Their custom design service helped us create a uniform our students are proud to wear every day.',
      name: 'Michael Roberts',
      role: 'Director, Riverside High',
      initials: 'MR',
    },
    {
      text: 'As a parent, I appreciate the affordable pricing and how well the uniforms hold up wash after wash. My kids have been wearing Kidwoo Uniforms for three years now.',
      name: 'Priya Patel',
      role: 'Parent & Repeat Customer',
      initials: 'PP',
    },
  ]

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        <p className="section-subtitle">
          Hear from the schools and families who trust UniForm Pro.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-text">{`"${t.text}"`}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
