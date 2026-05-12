import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Common/Breadcrumb'

export default function ThankYou() {
  return (
    <main>
      <Breadcrumb title="Thank You" subtitle="Success" />
      <div className="thank-you-area pt-120 pb-120 text-center">
        <div className="container">
          <div className="thank-you-content p-5 rounded-4 shadow-sm bg-white d-inline-block">
            <div className="thank-you-icon mb-30 d-flex justify-content-center">
               <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(46, 125, 50, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M33.3333 10L15 28.3333L6.66667 20" stroke="#2e7d32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </div>
            <h2 className="mb-20 deep-blue-text">Message Sent Successfully!</h2>
            <p className="mb-40 text-muted">Thank you for reaching out to Shyam Stay. Our team has received your information and will contact you within 24 hours to assist with your accommodation needs.</p>
            <Link to="/" className="tp-btn-4">Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
