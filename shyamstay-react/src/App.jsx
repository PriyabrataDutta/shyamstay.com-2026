import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Branches from './pages/Branches'
import About from './pages/About'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  )
}

export default App
