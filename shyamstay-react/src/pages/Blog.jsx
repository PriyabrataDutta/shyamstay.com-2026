import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Common/Breadcrumb'
import blogData from '../data/blog.json'

export default function Blog() {
  return (
    <main>
      <Breadcrumb title="Our Blog" subtitle="Blog" />
      
      <div className="tp-blog-area pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-section-title-wrapper text-center">
                     <h6 className="tp-section-title-pre-red tp-section-title-pre">Looking for PG in Bangalore</h6>
                     <h2 className="tp-section-title mb-60">Explore Our Blog</h2>
                  </div>
               </div>
      
               {blogData.map((post) => (
                  <div key={post.id} className="col-lg-4 col-md-6 mb-50">
                     <div className="tp-blog-wrapper bg-white shadow-sm rounded-4 overflow-hidden h-100 d-flex flex-column">
                        <div className="tp-blog-thumb">
                           <Link to={`/blog/${post.slug}`}>
                              <img className="w-100" src={post.image} alt={post.title} />
                           </Link>
                        </div>
                        <div className="tp-blog-content p-4 pb-30 mb-10 flex-grow-1">
                           <span className="tp-blog-date mb-10 d-block">{post.date}</span>
                           <h3 className="tp-blog-title mb-15">
                              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                           </h3>
                           <p className="text-muted">{post.excerpt}</p>
                        </div>
                        <div className="tp-blog-user-wrap p-4 pt-0 d-flex align-items-center justify-content-between mt-auto">
                           <div className="tp-blog-user">
                              <img src="assets/images/blog/Author.webp" alt="author" className="rounded-circle mr-10" width="40" height="40" />
                              <span>Shyam Stay</span>
                           </div>
                           <div className="tp-blog-read text-muted">
                              <span><i className="fa-regular fa-clock mr-5"></i> {post.readTime}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </main>
  )
}
