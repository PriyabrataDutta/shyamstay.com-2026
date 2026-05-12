import { Link } from 'react-router-dom'

export default function Hero() {
  const images = [
    '/assets/images/hero/1.webp',
    '/assets/images/hero/room-1.webp',
    '/assets/images/hero/room-2.webp',
    '/assets/images/hero/stu-1.webp',
    '/assets/images/hero/stu-2.webp',
    '/assets/images/hero/stu-3.webp',
    '/assets/images/hero/stu-4.webp',
    '/assets/images/hero/stu-5.webp',
  ]

  return (
    <section className="tp-hero-new">
      <div className="container text-center" style={{ position: 'relative', zIndex: 20 }}>
        <h1 className="tp-hero-new-title">It Starts Where You Stay</h1>
        <p className="tp-hero-new-subtitle">
          From comfort to community everything you need,<br />right where you live.
        </p>
        <div className="mb-50">
          <Link to="/contact" className="tp-hero-new-btn">
            Register yourself Now!
            <span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="hero-image-scroller-wrap">
        <div className="hero-marquee-container">
          <div className="hero-marquee-track">
            {images.map((img, i) => <img key={i} src={img} alt={`hero-${i}`} />)}
          </div>
          {/* Duplicated track for seamless scroll */}
          <div className="hero-marquee-track">
            {images.map((img, i) => <img key={`dup-${i}`} src={img} alt={`hero-dup-${i}`} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
