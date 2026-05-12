import { Link } from 'react-router-dom'

export default function BlogSection() {
  const blogs = [
    {
      title: "Home AWAY From Home - Best Girls PG",
      date: "March 12, 2026",
      img: "/assets/images/blog/Blog-02.webp",
      link: "/blog/home-away-from-home"
    },
    {
       title: "Why Shyam Stay is the Best PG in Bangalore",
       date: "March 15, 2026",
       img: "/assets/images/blog/Blog-01.webp",
       link: "/blog/best-pg-in-bangalore"
    },
    {
       title: "Top Amenities to Look for in a PG",
       date: "March 18, 2026",
       img: "/assets/images/blog/Blog-02.webp",
       link: "/blog/top-amenities"
    }
  ]

  return (
    <div className="tp-blog-area pt-95 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-section-title-wrapper text-center">
              <h6 className="tp-section-title-pre-red tp-section-title-pre" data-aos="fade-up">Looking for PG in Bangalore</h6>
              <h2 className="tp-section-title mb-60" data-aos="fade-up" data-aos-delay="100">Explore our Blogs</h2>
            </div>
          </div>

          {blogs.map((blog, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-50" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="tp-blog-wrapper">
                <div className="tp-blog-thumb mb-25 fix">
                   <img className="w-100" src={blog.img} alt="blog" />
                </div>
                <div className="tp-blog-content pb-30 mb-10">
                  <span className="tp-blog-date mb-10">{blog.date}</span>
                  <h3 className="tp-blog-title mb-15">
                    <Link to={blog.link}>{blog.title}</Link>
                  </h3>
                  <div className="tp-blog-btn">
                    <Link to={blog.link}>Read More 
                      <span className="ml-10">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
