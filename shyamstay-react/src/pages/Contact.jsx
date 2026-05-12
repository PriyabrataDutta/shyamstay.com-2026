import { useState } from 'react'
import Breadcrumb from '../components/Common/Breadcrumb'
import { useNavigate } from 'react-router-dom'

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxGiQlfemupJVuB0oF7NpFXLLWn3PQ3zTmFOECdoEhW_s5jSCovPj7A2nTnQLp3-vQRRg/exec";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    l_name: '',
    email: '',
    phone: '',
    preferred_location: '',
    message: '',
    agree: false
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const payload = {
      full_name: `${formData.name} ${formData.l_name}`.trim(),
      email: formData.email,
      phone: formData.phone,
      location: formData.preferred_location,
      message: formData.message
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      
      // Since it's no-cors, we assume success if no error is thrown
      navigate('/thank-you');
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again or call us directly.")
      setLoading(false)
    }
  }

  return (
    <main>
      <Breadcrumb title="Contact Us" subtitle="Contact" />
      
      <div className="tp-contact-area pt-120 mb-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="tp-contact-form-wrap shadow-lg p-5 rounded-4 bg-white">
                     <div className="tp-contact-content mb-35 text-center">
                        <h6 className="tp-about-top-subtitle"><span></span> Contact Us</h6>
                        <h2 className="tp-contact-title">Contact Our Team</h2>
                        <p className="tp-contact-dis">Fill out the form on this page and we'll get back to you shortly with all the information you need. We aim to respond within 24 hours.</p>
                     </div>
                     <div className="tp-contact-form tp-postbox-comment-input">
                        <form onSubmit={handleSubmit}>
                           <div className="row">
                              <div className="col-lg-6 col-md-6">
                                 <div className="tp-contact-input mb-25">
                                    <label className="tp-label mb-5" htmlFor="name">First Name*</label>
                                    <input 
                                      name="name" 
                                      className="tp-input" 
                                      type="text" 
                                      id="name" 
                                      placeholder="John"
                                      value={formData.name}
                                      onChange={handleChange}
                                      required 
                                    />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                 <div className="tp-contact-input mb-25">
                                    <label className="tp-label mb-5" htmlFor="l_name">Last Name*</label>
                                    <input 
                                      name="l_name" 
                                      className="tp-input" 
                                      type="text" 
                                      id="l_name" 
                                      placeholder="Smith"
                                      value={formData.l_name}
                                      onChange={handleChange}
                                      required 
                                    />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                 <div className="tp-contact-input mb-25">
                                    <label className="tp-label mb-5" htmlFor="email">Email*</label>
                                    <input 
                                      name="email" 
                                      className="tp-input" 
                                      type="email" 
                                      id="email" 
                                      placeholder="housey@mail.com"
                                      value={formData.email}
                                      onChange={handleChange}
                                      required 
                                    />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                 <div className="tp-contact-input mb-25">
                                    <label className="tp-label mb-5" htmlFor="phone">Phone Number*</label>
                                    <input 
                                      name="phone" 
                                      className="tp-input" 
                                      type="text" 
                                      id="phone" 
                                      placeholder="Phone Number"
                                      value={formData.phone}
                                      onChange={handleChange}
                                      required 
                                    />
                                 </div>
                              </div>
                              <div className="col-lg-12">
                                 <div className="tp-contact-input mb-25">
                                    <label className="tp-label mb-5" htmlFor="preferred_location">Preferred Location*</label>
                                    <select 
                                      name="preferred_location" 
                                      className="tp-input" 
                                      id="preferred_location" 
                                      required
                                      style={{ cursor: 'pointer' }}
                                      value={formData.preferred_location}
                                      onChange={handleChange}
                                    >
                                       <option value="" disabled>-- Select a Location --</option>
                                       <option value="Shyam Residency - Doddakammanahalli">Shyam Residency - Doddakammanahalli</option>
                                       <option value="Aragini Comforts - Bannerghatta Road">Aragini Comforts - Bannerghatta Road</option>
                                       <option value="JC Road Residency - JC Road">JC Road Residency - JC Road</option>
                                       <option value="Vaibhav Residency - Near CMS Jain University">Vaibhav Residency - Near CMS Jain University</option>
                                       <option value="Odyssey - Bannerghatta Road">Odyssey - Bannerghatta Road</option>
                                       <option value="VV Puram - Near JAIN College">VV Puram - Near JAIN College</option>
                                       <option value="Raj Inn - Minerva Circle">Raj Inn - Minerva Circle</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-lg-12">
                                 <div className="tp-contact-textarea mb-15">
                                    <label className="tp-label mb-5" htmlFor="message">Message*</label>
                                    <textarea 
                                      name="message" 
                                      className="tp-textarea" 
                                      id="message" 
                                      placeholder="Leave us a message..."
                                      value={formData.message}
                                      onChange={handleChange}
                                      required
                                    ></textarea>
                                 </div>
                              </div>
                              <div className="col-lg-12">
                                 <div className="tp-contact-agree mb-30 d-flex align-items-start mb-25">
                                    <input 
                                      name="agree" 
                                      className="tp-checkbox" 
                                      type="checkbox" 
                                      id="agree" 
                                      checked={formData.agree}
                                      onChange={handleChange}
                                      required 
                                    />
                                    <label className="tp-agree" htmlFor="agree">I agree to terms & conditions</label>
                                 </div>
                              </div>
                              <div className="col-lg-12 text-center">
                                 <button 
                                   className="tp-btn-large w-100" 
                                   type="submit"
                                   disabled={loading}
                                 >
                                   {loading ? 'Sending...' : 'Send Message'}
                                 </button>
                                 {status && <p className="mt-20" style={{ color: '#b7124d' }}>{status}</p>}
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </main>
  )
}
