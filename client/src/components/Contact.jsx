import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {

  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = `${import.meta.env.VITE_REACT_APP_WEB3FORMS_ACCESS_KEY}`;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Kidwoo Uniforms",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have a question or want to discuss a bulk order? We would love to hear from you.
        </p>

        <div className="contact-grid">

          {/* FORM */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  {...register("name", { required: true })}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  placeholder="your contact number"
                  {...register("phone", { required: true })}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  {...register("message", { required: true })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              <span className="form-result">{result}</span>
            </form>
          </div>

          {/* CONTACT DETAILS */}
         <div className="contact-details">
           <h3>Contact Information</h3>
            <div className="contact-item"> 
              <a href="https://www.google.com/maps/place/KIDWOO+UNIFORM+HOUSE/@31.5361504,76.8917881,16.99z/data=!4m6!3m5!1s0x3905197d24f8b6f3:0x7a8b6a0cb09a94a7!8m2!3d31.536151!4d76.8917994!16s%2Fg%2F11m_7sswyz?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" className="contact-item-icon">
                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" >
                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /> 
                   <circle cx="12" cy="10" r="3" /> 
                 </svg>
              </a> 
                <div className="contact-item-text"> 
                  <strong>Our Address</strong> 
                  <p> Suket Complex, Near Bus Stand <br /> Sunder Nagar, (H.P), India </p> 
                  </div> 
                </div> 
                <div className="contact-item"> 
                  <a href = "tel:+91 62309 98999" className="contact-item-icon"> 
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" > 
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                     </svg> 
                  </a> 
                 <div className="contact-item-text"> 
                  <strong>Phone</strong>
                   <p>+91 62309 98999<br /> +91 94593-90501 <br />+91 94597-63501</p> 
                 </div> 
                </div> 
                <div className="contact-item"> 
                  <a href = "mailto:kidwoouniformhouse@gmail.com" className="contact-item-icon"> 
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" > 
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /> <polyline points="22,6 12,13 2,6" />
                     </svg> 
                     </a> 
                <div className="contact-item-text"> 
                  <strong>Email</strong> 
                  <p>kidwoouniformhouse@gmail.com</p>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}