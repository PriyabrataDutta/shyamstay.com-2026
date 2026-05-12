import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <div className="tp-about-area tp-bg-gray pt-50 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pb-40">
            <div className="tp-about-3-content" data-aos="fade-up">
              <h6 className="tp-section-title-pre tp-section-title-pre-2 mb-15" style={{ color: '#b7124d' }}>Best PG Accommodation in Bangalore</h6>
              <h2 className="tp-section-three-title mb-15">See Life From A<br /> Different Perspective.</h2>
              <p className="tp-about-3-para mb-40">At Shyam Stay, we offer comfortable and affordable paying guest (PG) accommodations in the heart of Bengaluru, specifically designed for students and working professionals.</p>
              <div className="tp-about-3-btn">
                <Link className="tp-btn-4" to="/contact">Register Now!</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 pb-40">
            <div className="tp-about-3-thumb-wrap p-relative" data-aos="fade-up" data-aos-delay="200">
              <img 
                className="tp-about-3-thumb" 
                src="/assets/images/About-Home-Page-1.webp" 
                alt="about"
                style={{ borderRadius: '16px', overflow: 'hidden' }}
              />
              <img 
                className="tp-about-3-thumb-2 d-none d-sm-block" 
                src="/assets/images/About-Home-Page-2.webp" 
                alt="about"
                style={{ borderRadius: '16px', overflow: 'hidden' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
