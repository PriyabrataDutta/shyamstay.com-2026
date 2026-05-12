import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="tp-footer-area tp-footer-style-2 tp-footer-style-5 pt-100 pb-50">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-6 mb-60">
                  <div className="tp-footer-widget pr-30">
                     <div className="tp-footer-logo mb-30">
                        <Link to="/"><img width="138" src="/assets/images/logo/LOGO-FINAL.webp" alt="logo" /></Link>
                     </div>
                     <div className="tp-footer-widget-content">
                        <div className="tp-footer-info">
                           <div className="tp-footer-info-item d-flex align-items-start mb-20">
                              <div className="tp-footer-info-icon mr-15">
                                 <span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M15 7.5C15 12.5 9 17 9 17C9 17 3 12.5 3 7.5C3 5.9087 3.63214 4.38258 4.75736 3.25736C5.88258 2.13214 7.4087 1.5 9 1.5C10.5913 1.5 12.1174 2.13214 13.2426 3.25736C14.3679 4.38258 15 5.9087 15 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </span>
                              </div>
                              <div className="tp-footer-info-text">
                                 <a href="#">SS Arcade, 29/1, 6th Floor, 1st Cross, JC Road, Bangalore</a>
                              </div>
                           </div>
                           <div className="tp-footer-info-item d-flex align-items-start mb-20">
                              <div className="tp-footer-info-icon mr-15">
                                 <span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M16.234 13.1945V15.4925C16.2349 15.7058 16.1912 15.9169 16.1057 16.1124C16.0203 16.3079 15.8949 16.4833 15.7377 16.6275C15.5805 16.7718 15.3949 16.8816 15.1928 16.9499C14.9908 17.0182 14.7766 17.0436 14.5642 17.0244C12.2071 16.7683 9.94297 15.9629 7.95371 14.6728C6.10295 13.4968 4.53384 11.9277 3.35779 10.0769C2.06326 8.07863 1.25765 5.80349 1.00622 3.43583C0.987076 3.22401 1.01225 3.01053 1.08014 2.80897C1.14802 2.60741 1.25713 2.4222 1.40052 2.26512C1.54391 2.10804 1.71843 1.98254 1.91298 1.8966C2.10753 1.81067 2.31785 1.76619 2.53053 1.76599H4.82849C5.20022 1.76233 5.56061 1.89397 5.84247 2.13636C6.12433 2.37876 6.30843 2.71538 6.36046 3.08348C6.45745 3.81888 6.63732 4.54094 6.89665 5.2359C6.99971 5.51007 7.02201 5.80803 6.96092 6.09448C6.89983 6.38093 6.7579 6.64387 6.55195 6.85213L5.57915 7.82493C6.66958 9.74261 8.25739 11.3304 10.1751 12.4208L11.1479 11.448C11.3561 11.2421 11.6191 11.1002 11.9055 11.0391C12.192 10.978 12.4899 11.0003 12.7641 11.1034C13.4591 11.3627 14.1811 11.5426 14.9165 11.6395C15.2886 11.692 15.6284 11.8795 15.8713 12.1662C16.1143 12.4529 16.2433 12.8188 16.234 13.1945Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </span>
                              </div>
                              <div className="tp-footer-info-text">
                                 <a href="tel:+91-9036112244">(+91) 9036112244</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mb-60">
                  <div className="tp-footer-widget pl-30">
                     <h3 className="tp-footer-widget-title mb-15">Quick Links</h3>
                     <div className="row">
                        <div className="col-lg-6 col-md-6">
                           <div className="tp-footer-widget-content">
                              <ul>
                                 <li><Link to="/branches">Accommodations</Link></li>
                                 <li><Link to="/about">About Us</Link></li>
                                 <li><Link to="/contact">Contact</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                           <div className="tp-footer-widget-content">
                              <ul>
                                 <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                 <li><Link to="/refund-policy">Refund Policy</Link></li>
                                 <li><Link to="/gallery">Gallery</Link></li>
                                 <li><Link to="/booking">Book With Us</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mb-60">
                  <div className="tp-footer-widget pl-65">
                     <h3 className="tp-footer-widget-title mb-15">Don't miss<br /> Our Latest Updates</h3>
                     <p className="tp-footer-widget-para mb-10">Sign up to our newsletter for exclusive offers.</p>
                     <div className="tp-footer-form mb-20">
                        <form action="#">
                           <div className="tp-footer-input p-relative">
                              <input type="email" placeholder="E-mail" />
                              <button type="button" className="tp-footer-input-btn p-absolute">Subscribe</button>
                           </div>
                        </form>
                     </div>
                     <div className="tp-footer-social">
                        <a href="https://www.facebook.com/TheShyamStay/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/shyamstayofficial" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://youtube.com/@shyamstay" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-footer-botom">
            <div className="container">
               <div className="tp-footer-bottom-inner">
                  <div className="row">
                     <div className="col-sm-6">
                        <div className="tp-footer-copyright">
                           <p>Copyright &copy; 2025. All Rights Reserved. Shyam Stay India (P) Ltd.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </footer>
  )
}
