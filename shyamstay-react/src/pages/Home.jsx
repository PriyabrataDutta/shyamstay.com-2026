import Hero from '../components/Home/Hero'
import Facilities from '../components/Home/Facilities'
import AboutSection from '../components/Home/AboutSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import BranchGrid from '../components/Home/BranchGrid'
import Testimonials from '../components/Home/Testimonials'
import BlogSection from '../components/Home/BlogSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Facilities />
      <AboutSection />
      <WhyChooseUs />
      <BranchGrid limit={3} />
      <Testimonials />
      <BlogSection />
    </main>
  )
}
