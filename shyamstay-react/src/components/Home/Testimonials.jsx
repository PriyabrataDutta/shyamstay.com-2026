import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Akshat Jain",
      location: "Chhattisgarh",
      text: "Emotionally attached to Shyam Stay, praised the genuine owners, vibrant atmosphere, food, and facilities like gym & study room.",
      title: "Home Away from Home",
      img: "/assets/images/testimonial/testimonial-1.webp"
    },
    {
      name: "Vidhi Malpani",
      location: "Chennai",
      text: "\"Felt at home instantly, impressed by cleanliness, cozy ambiance, and nutritious meals. Recommends for comfort and safety.\"",
      title: "Warm Welcome & Healthy Living",
      img: "/assets/images/testimonial/testimonial-2.webp"
    },
    {
      name: "Vaishnavi Bhagat",
      location: "Banaras",
      text: "Loved the peaceful vibe, clean and spacious rooms, and variety of tasty food. Misses the helpful staff dearly.",
      title: "Peaceful, Homely & Delicious Food",
      img: "/assets/images/testimonial/testimonial-3.webp"
    },
    {
      name: "Tapashwi Rayamajhi",
      location: "Kathmandu",
      text: "\"Best first-year PG experience. Highlighted cleanliness, well-maintained amenities, and amazing food. Rated 10/10.\"",
      title: "Perfect Start to College Life",
      img: "/assets/images/testimonial/testimonial-4.webp"
    }
  ]

  return (
    <div className="tp-testimonial-area">
       <div className="container">
          <div className="row">
             <div className="col-lg-12">
                <div className="tp-bg-gray pt-95 pb-105">
                   <div className="row justify-content-center">
                      <div className="col-xl-8 col-lg-10">
                        <Swiper
                          modules={[Pagination, Autoplay]}
                          pagination={{ clickable: true, el: '.tp-testimonial-pagination' }}
                          autoplay={{ delay: 5000 }}
                          className="tp-testimonial-active"
                        >
                          {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="tp-testimonial-wrapper text-center">
                                 <div className="tp-testimonial-title-wrap">
                                    <div className="tp-testimonial-ratings mb-15">
                                       <span style={{ color: '#FF9E0D' }}><i className="fa-sharp fa-solid fa-star"></i></span>
                                       <span style={{ color: '#FF9E0D' }}><i className="fa-sharp fa-solid fa-star"></i></span>
                                       <span style={{ color: '#FF9E0D' }}><i className="fa-sharp fa-solid fa-star"></i></span>
                                       <span style={{ color: '#FF9E0D' }}><i className="fa-sharp fa-solid fa-star"></i></span>
                                       <span style={{ color: '#FF9E0D' }}><i className="fa-sharp fa-solid fa-star"></i></span>
                                    </div>
                                    <h2 className="tp-testimonial-title mb-25">{item.title}</h2>
                                 </div>
                                 <div className="tp-testimonial-content mb-30">
                                    <p>{item.text}</p>
                                 </div>
                                 <div className="tp-testimonial-clients">
                                    <img src={item.img} alt="testimonial" />
                                    <span className="tp-testimonial-clients-name">{item.name}</span>
                                    <span className="tp-testimonial-clients-lucation">{item.location}</span>
                                 </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div className="tp-testimonial-pagination text-center mt-40"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
