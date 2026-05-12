import { Link } from 'react-router-dom';

export default function Breadcrumb({ title, subtitle }) {
  return (
    <div className="tp-breadcrumb-area p-relative pt-100 pb-100 mt-90">
      <div 
        className="tp-breadcrumb-bg" 
        style={{ 
          backgroundImage: "url(/assets/images/breadcrumb-bg.webp)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-breadcrumb-content text-center">
              <h2 className="tp-breadcrumb-title mb-20">{title}</h2>
              <div className="tp-breadcrumb-list">
                <span><Link to="/">Home</Link></span>
                <span className="dvdr mx-2">/</span>
                <span className="current-page">{subtitle || title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
