export default function WhyChooseUs() {
  const reasons = [
    { title: "Prime Location Access", icon: "location" },
    { title: "Seamless Connectivity", icon: "connectivity" },
    { title: "Spotless & Safe", icon: "safe" },
    { title: "Affordable Comfort", icon: "comfort" },
    { title: "Caring Management Team", icon: "management" },
    { title: "Peaceful Living Space", icon: "peace" }
  ]

  return (
    <div className="tp-about-us-area tp-about-spacing tp-section-black p-relative pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="tp-section-title-wrapper" data-aos="fade-up">
              <h6 className="tp-section-title-pre-yellow tp-section-title-pre mb-5">A Few Words About Us</h6>
              <h2 className="tp-section-title-white tp-section-title mb-60">Why Choose Us</h2>
              <p className="tp-section-title-content mb-50">We redefine the PG experience by offering more than just a room.</p>
            </div>
            <div className="row">
              {reasons.map((item, index) => (
                <div key={index} className="col-md-6 col-sm-6 mb-20" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="tp-about-list">
                    <ul>
                      <li>
                        <span className="icon-placeholder">
                          {/* Icons will be inserted here or used as background */}
                          <i className="fa-solid fa-check-circle" style={{ color: '#ff9e0d', fontSize: '20px' }}></i>
                        </span>
                        <p className="text-white">{item.title}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 md-relative mt-50 mt-lg-0">
             <div className="p-relative" data-aos="zoom-in">
                <img className="tp-about-right-img w-100" src="/assets/images/video-background-homepage.webp" alt="about" style={{ borderRadius: '16px' }} />
                <div className="tp-about-video w-100 h-100 p-absolute d-flex align-items-center justify-content-center" style={{ top: 0, left: 0 }}>
                   <a className="tp-video-play popup-video tp-pulse-border" href="https://www.youtube.com/watch?v=nT-hBmYxDI4" target="_blank" rel="noreferrer">
                      <span className="p-relative z-index-11">
                         <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 13L0.5 25.9904V0.00961876L23 13Z" fill="currentColor" />
                         </svg>
                      </span>
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
