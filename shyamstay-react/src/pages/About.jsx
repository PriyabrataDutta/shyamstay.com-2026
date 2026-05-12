import Breadcrumb from '../components/Common/Breadcrumb'

export default function About() {
  return (
    <main>
      <Breadcrumb title="About Us" subtitle="About" />

      {/* About Top Area */}
      <div className="tp-about-top-area pt-125">
         <div className="container">
            <div className="tp-about-top-inner pb-60">
               <div className="row align-items-end">
                  <div className="col-lg-8">
                     <div className="tp-about-top-content mb-50" data-aos="fade-right">
                        <h6 className="tp-about-top-subtitle"><span></span> About Us</h6>
                        <h2 className="tp-about-top-title">Creating Exceptional Stays with a <span>Purpose.</span></h2>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="tp-about-top-logo-content" data-aos="fade-left">
                        <div className="tp-about-top-logo mb-30 p-relative">
                           <img className="rotate-infinite-2" src="/assets/images/About-Rotate.webp" alt="" />
                        </div>
                        <p>At Shyam Stay, we believe that comfortable living fuels personal growth. </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* About Big Image */}
      <div className="tp-about-big-thumb fix p-relative mb-100">
         <img className="w-100" src="/assets/images/About-Main.webp" alt="About Shyam Stay" />
      </div>

      {/* About Description Area */}
      <div className="tp-about-area pt-115 fix pb-60">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-10">
                  <div className="tp-about-top-content mb-70" data-aos="fade-up">
                     <h6 className="tp-about-top-subtitle"><span></span> A few words about us</h6>
                     <h2 className="tp-about-top-title tp-about-top-title-2">Symphony of luxury <span>awaits<br />
                           you</span> at our PG.!</h2>
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="tp-about-4-thumb p-relative mb-40" data-aos="fade-right">
                     <img className="w-100 rounded-4" src="/assets/images/About-3.webp" alt="Experience" />
                     <div className="tp-about-4-expreance">
                        <div className="p-relative text-center bg-white p-4 rounded-circle shadow-sm" style={{ width: '150px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto' }}>
                           <h3 className="m-0" style={{ color: '#b7124d' }}>10+</h3>
                           <span className="tp-about-4-expreance-year" style={{ fontSize: '12px', lineHeight: '1.2' }}>Years of<br /> Experience</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="tp-about-4-content mb-40" data-aos="fade-left">
                     <p className="mb-40">Welcome to Shyam Stay PG, the ultimate home away from home in the vibrant heart of
                        Bangalore. At Shyam Stay, we are dedicated to
                        providing premium accommodation designed for your comfort, safety, and convenience. With modern
                        amenities and a serene environment, we create the perfect setting to empower your academic and
                        professional journey.</p>
                     <p className="mb-50">Experience the confidence of staying in a space tailored just for you. Our pure veg meals and high-standard maintenance ensure a healthy and peaceful stay.</p>
                     
                     <div className="tp-about-4-client-wrap d-flex align-items-center">
                        <div className="tp-about-4-client-img mb-10 mr-20">
                           <img src="/assets/images/client-review.webp" alt="reviews" style={{ width: '120px' }} />
                        </div>
                        <div className="tp-about-4-client-review mb-10">
                           <p><span>5256+</span><br /> Happy Residents</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Counter Area */}
      <div className="tp-counter-area pb-120">
         <div className="container">
            <div className="row gx-0">
               <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="tp-counter-item text-center">
                     <h3 className="tp-counter-number">10</h3>
                     <span className="tp-counter-title">Properties in Bangalore</span>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="tp-counter-item text-center">
                     <h3 className="tp-counter-number">6000+</h3>
                     <span className="tp-counter-title">Happy Customers</span>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="tp-counter-item text-center">
                     <h3 className="tp-counter-number">50+</h3>
                     <span className="tp-counter-title">Professional Staff</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </main>
  )
}
