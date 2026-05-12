import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Facilities() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const facilities = [
    {
      title: "Furnished Rooms",
      desc: "Move into fully equipped rooms with cozy beds, study desks & stylish interiors - all ready for you.",
      img: "/assets/images/Facility/FurnishedRooms.webp"
    },
    {
      title: "Pure Veg Meals",
      desc: "Relish wholesome, hygienic vegetarian meals freshly prepared each day.",
      img: "/assets/images/Facility/Pure-Veg-Meal.webp"
    },
    {
      title: "24x7 Security",
      desc: "Rest easy with CCTV surveillance, trained security staff & controlled access - day and night.",
      img: "/assets/images/Facility/24X7-Camera.webp"
    },
    {
      title: "Housekeeping",
      desc: "Sparkling clean spaces, maintained daily so you can focus on what matters most.",
      img: "/assets/images/Facility/Housekeeping.webp"
    }
  ]

  return (
    <div className="tp-feature-area tp-bg-gray pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-feature-title-wrap mb-60 text-center">
              <h2 className="tp-about-top-title tp-about-top-title-2 m-0" data-aos="fade-up">Facilities</h2>
              <p className="tp-section-title-para" data-aos="fade-up" data-aos-delay="200">Enjoy the luxury of time and convenience!</p>
            </div>
          </div>
          {facilities.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-30 tp-feature-border" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="tp-feature-wrapper text-center">
                <div className="tp-feature-thumb mb-15">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="tp-feature-content">
                  <h3 className="tp-feature-title"><a href="#">{item.title}</a></h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
