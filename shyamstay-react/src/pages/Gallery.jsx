import Breadcrumb from '../components/Common/Breadcrumb'

const images = [
  "/assets/images/instagram/1.webp",
  "/assets/images/instagram/2.webp",
  "/assets/images/instagram/3.webp",
  "/assets/images/instagram/4.webp",
  "/assets/images/instagram/5.webp",
  "/assets/images/instagram/6.webp",
  "/assets/images/instagram/7.webp",
  "/assets/images/instagram/8.webp",
  "/assets/images/instagram/9.webp",
  "/assets/images/instagram/10.webp",
]

export default function Gallery() {
  return (
    <main>
      <Breadcrumb title="Gallery" subtitle="Gallery" />
      <div className="tp-instagram-area pt-120 pb-120">
        <div className="container">
          <div className="tp-section-title-wrapper text-center mb-60">
             <h6 className="tp-section-title-pre-red tp-section-title-pre">A Glimpse into Our Stays</h6>
             <h2 className="tp-section-title">Visual Tour</h2>
          </div>
          <div className="row g-4">
            {images.map((img, idx) => (
              <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-3">
                <div className="tp-instagram-thumb position-relative overflow-hidden rounded-4 shadow-sm h-100">
                  <a className="popup-image d-block h-100" href={img} target="_blank" rel="noreferrer">
                    <img className="img-fluid w-100 h-100 object-fit-cover transition-transform" src={img} alt={`gallery-${idx}`} style={{ transition: 'transform 0.3s ease' }} />
                    <div className="tp-instagram-icon position-absolute top-0 end-0 m-2">
                      <span className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm">
                        <i className="fa-brands fa-instagram text-primary"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
