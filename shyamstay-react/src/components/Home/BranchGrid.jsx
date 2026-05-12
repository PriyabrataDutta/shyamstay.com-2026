import { Link } from 'react-router-dom'
import branchesData from '../../data/branches.json'

export default function BranchGrid({ limit, hideTitle, showAll }) {
  const displayBranches = limit ? branchesData.slice(0, limit) : branchesData;

  return (
    <div className={`tp-place-area ${hideTitle ? '' : 'tp-bg-gray-2 pb-110 pt-115'}`}>
      <div className="container">
        {!hideTitle && (
          <div className="row">
            <div className="col-12">
              <div className="tp-place-title-wrap mb-30" data-aos="fade-up">
                <h6 className="tp-section-title-pre tp-section-title-pre-2 m-0" style={{ color: '#b7124d' }}>
                  Affordable Accommodation in Bangalore</h6>
                <h2 className="tp-section-title-two">Recommended places to Stay</h2>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {displayBranches.map((branch, index) => (
            <div key={branch.id} className="col-xl-4 col-lg-6 col-md-6 pb-25" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="tp-place-wrap">
                <div className="tp-place-thumb fix p-relative">
                  <img className="w-100" src={branch.img} alt={branch.title} />
                  {branch.offer && <span className="tp-place-offer">{branch.offer}</span>}
                  <button type="button" className="tp-place-wishlist">
                    <svg className="black-heart" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fillRule="evenodd" clipRule="evenodd" d="M1.79362 8.18821C0.946388 5.58241 1.93654 2.60402 4.71354 1.72272C6.17429 1.25834 7.78664 1.53214 9.00104 2.43212C10.1499 1.55703 11.8215 1.26145 13.2806 1.72272C16.0576 2.60402 17.0541 5.58241 16.2077 8.18821C14.889 12.3186 9.00104 15.5 9.00104 15.5C9.00104 15.5 3.15646 12.3668 1.79362 8.18821Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                       <path d="M12.1597 4.39062C13.0045 4.66096 13.6015 5.40713 13.6733 6.28299" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="tp-place-content p-relative">
                  <div className="tp-place-meta-wrap">
                    <h4 className="tp-place-title deep-blue-text">
                      <Link to={branch.detailsLink}>{branch.title}</Link>
                    </h4>
                    <div className="tp-place-meta">
                      <ul>
                        <li>
                          <span>
                             <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.08912 6.83376C9.08912 5.75943 8.18378 4.88892 7.06731 4.88892C5.95002 4.88892 5.04468 5.75943 5.04468 6.83376C5.04468 7.90729 5.95002 8.7778 7.06731 8.7778C8.18378 8.7778 9.08912 7.90729 9.08912 6.83376Z" stroke="#5A5859" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.06627 15C6.09684 15 1 11.0321 1 6.88256C1 3.63405 3.71552 1 7.06627 1C10.417 1 13.1333 3.63405 13.1333 6.88256C13.1333 11.0321 8.03571 15 7.06627 15Z" stroke="#5A5859" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                          </span>
                          <a href={branch.mapLink} target="_blank" rel="noreferrer">{branch.location}</a>
                        </li>
                        <li>
                          <span>
                             <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 14.5C11.0899 14.5 14 11.5899 14 8C14 4.41015 11.0899 1.5 7.5 1.5C3.91015 1.5 1 4.41015 1 8C1 11.5899 3.91015 14.5 7.5 14.5Z" stroke="#5A5859" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.5 4.1001V8.0001L10.1 9.3001" stroke="#5A5859" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                          </span>
                          <Link to="/contact"> Register Now</Link>
                        </li>
                        <li>
                          <span className="ratings">
                             <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.86681 0L10.174 4.60778L15.3335 5.35121L11.6001 8.93586L12.4812 14L7.86681 11.6078L3.25241 14L4.13348 8.93586L0.400146 5.35121L5.55961 4.60778L7.86681 0Z" fill="#FF9E0D" />
                             </svg>
                          </span>
                          {branch.type}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tp-place-price-wrap">
                    <div className="tp-place-btn">
                      <Link to={branch.detailsLink}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.53564 10.4642L10.4642 1.53564" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1.53564 1.53564H10.4642V10.4642" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!hideTitle && !showAll && (
          <div className="row">
             <div className="col-12 text-center mt-30">
                <Link to="/branches" className="tp-btn-4">View All Branches</Link>
             </div>
          </div>
        )}
      </div>
    </div>
  )
}
