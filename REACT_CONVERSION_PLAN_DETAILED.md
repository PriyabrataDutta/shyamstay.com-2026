# ShyamStay Website → React Conversion Plan (Detailed)

**Analysis of Current Website:**
- Bootstrap-based multi-page website
- 8 HTML pages (index, accommodation, blog, contact, gallery, about, booking, thank-you)
- jQuery for DOM manipulation
- Multiple plugins: Swiper, Flatpicker, Isotope, Parallax, WOW animations
- Custom CSS (~300KB main.css)
- Form submissions using mail.php backend
- Google Analytics & Facebook Pixel tracking

---

## 📋 QUICK OVERVIEW

| Aspect | Current | React Version |
|--------|---------|---------------|
| **Pages** | 8 HTML files | 6 Route pages |
| **Framework** | Bootstrap + jQuery | React + React Router |
| **Styling** | CSS + Bootstrap | CSS Modules + Tailwind (optional) |
| **State** | None (static) | Context API for forms |
| **Forms** | PHP backend (mail.php) | localStorage + API ready |
| **Build** | Static HTML files | Vite |
| **Timeline** | 2-3 weeks | ~3-4 weeks |

---

## 1. PROJECT SETUP

### Step 1: Create React Project with Vite

```bash
npm create vite@latest shyamstay-react -- --template react
cd shyamstay-react
npm install
npm run dev
```

### Step 2: Install Essential Dependencies

```bash
# Routing
npm install react-router-dom

# Date picker (replaces flatpicker)
npm install react-datepicker

# Slider (replaces Swiper)
npm install swiper

# Animations
npm install aos animate.css

# Form handling & validation
npm install react-hook-form

# Icons
npm install react-icons

# Utility
npm install classnames

# State management
npm install zustand  # (alternative to Context API, optional)
```

### Step 3: Keep Bootstrap CSS or Switch to Tailwind

**Option A: Keep Bootstrap (Faster migration)**
```bash
npm install bootstrap
# Import in src/main.jsx: import 'bootstrap/dist/css/bootstrap.min.css'
```

**Option B: Tailwind CSS (Modern approach)**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Recommendation:** Keep Bootstrap for Phase 1, migrate to Tailwind in Phase 2.

---

## 2. FOLDER STRUCTURE (Based on Your Website)

```
shyamstay-react/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── rooms/
│   │   ├── gallery/
│   │   ├── testimonials/
│   │   ├── team/
│   │   └── favicon.ico
│   └── logo.png
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/      (copy from your assets/images)
│   │   ├── fonts/       (copy from your assets/fonts)
│   │   └── icons/
│   │
│   ├── components/      (Reusable pieces)
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── Header.css
│   │   │   └── OffCanvas.jsx     (mobile menu)
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── HeroSearch.jsx     (booking search form)
│   │   │   └── Hero.css
│   │   │
│   │   ├── RoomCard/
│   │   │   ├── RoomCard.jsx
│   │   │   └── RoomCard.css
│   │   │
│   │   ├── RoomGrid/
│   │   │   ├── RoomGrid.jsx       (Isotope masonry)
│   │   │   ├── RoomFilter.jsx
│   │   │   └── RoomGrid.css
│   │   │
│   │   ├── Gallery/
│   │   │   ├── Gallery.jsx
│   │   │   ├── GalleryFilter.jsx
│   │   │   └── Gallery.css
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   ├── TestimonialSlider.jsx  (Swiper)
│   │   │   └── Testimonials.css
│   │   │
│   │   ├── Amenities/
│   │   │   ├── AmenitiesGrid.jsx
│   │   │   ├── AmenityCard.jsx
│   │   │   └── Amenities.css
│   │   │
│   │   ├── BlogCard/
│   │   │   ├── BlogCard.jsx
│   │   │   └── BlogCard.css
│   │   │
│   │   ├── BlogSlider/
│   │   │   ├── BlogSlider.jsx
│   │   │   └── BlogSlider.css
│   │   │
│   │   ├── Forms/
│   │   │   ├── BookingForm.jsx         (contact sheet)
│   │   │   ├── ContactForm.jsx
│   │   │   └── Forms.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── Animations/
│   │   │   ├── FadeInOnScroll.jsx      (WOW replacement)
│   │   │   ├── Parallax.jsx
│   │   │   └── AnimatedCounter.jsx     (PureCounter)
│   │   │
│   │   ├── BackToTop/
│   │   │   ├── BackToTop.jsx
│   │   │   └── BackToTop.css
│   │   │
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── Modal.jsx
│   │       ├── Container.jsx
│   │       └── common.css
│   │
│   ├── pages/          (Full page views)
│   │   ├── Home.jsx              (index.html)
│   │   ├── Accommodation.jsx     (accomodation.html)
│   │   ├── Gallery.jsx           (gallery.html)
│   │   ├── Blog.jsx              (blog.html)
│   │   ├── BlogDetails.jsx       (blog-details.html)
│   │   ├── About.jsx             (about.html)
│   │   ├── Contact.jsx           (contact.html)
│   │   ├── Booking.jsx           (booking.html)
│   │   ├── ThankYou.jsx          (thank-you.html)
│   │   ├── PrivacyPolicy.jsx     (privacy-policy.html)
│   │   ├── RefundPolicy.jsx      (refund-policy.html)
│   │   └── NotFound.jsx
│   │
│   ├── context/        (State management)
│   │   ├── BookingContext.jsx
│   │   ├── FormContext.jsx
│   │   ├── FilterContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/          (Custom hooks)
│   │   ├── useBooking.js
│   │   ├── useForm.js
│   │   ├── useScroll.js
│   │   ├── useAnimation.js
│   │   └── useLocalStorage.js
│   │
│   ├── data/           (Mock/static data - convert from HTML)
│   │   ├── rooms.json
│   │   ├── amenities.json
│   │   ├── testimonials.json
│   │   ├── blogs.json
│   │   ├── gallery.json
│   │   └── team.json
│   │
│   ├── utils/
│   │   ├── dateUtils.js        (flatpicker logic)
│   │   ├── api.js              (for backend calls)
│   │   ├── validators.js
│   │   └── constants.js
│   │
│   ├── styles/
│   │   ├── global.css          (from main.css)
│   │   ├── variables.css        (color palette)
│   │   ├── bootstrap-override.css
│   │   ├── animations.css       (WOW, parallax replacements)
│   │   └── responsive.css
│   │
│   ├── App.jsx                 (Main app with routing)
│   ├── App.css
│   ├── main.jsx                (Entry point)
│   └── index.css
│
├── .env.example
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
```

---

## 3. PAGE MAPPING (HTML → React)

| HTML File | React Page | Complexity | Dependencies |
|-----------|-----------|-----------|--------------|
| `index.html` | `Home.jsx` | HIGH | Hero, RoomCard, Testimonials, Blog |
| `accomodation.html` | `Accommodation.jsx` | HIGH | RoomGrid, Filter, Gallery |
| `gallery.html` | `Gallery.jsx` | MEDIUM | Gallery, Filter, Lightbox |
| `blog.html` | `Blog.jsx` | MEDIUM | BlogCard, Pagination |
| `blog-details.html` | `BlogDetails.jsx` | MEDIUM | BlogContent, RelatedBlogs |
| `about.html` | `About.jsx` | MEDIUM | Team, WhyChooseUs, Stats |
| `contact.html` | `Contact.jsx` | MEDIUM | ContactForm, Map, Info |
| `booking.html` | `Booking.jsx` | MEDIUM | BookingForm, DatePicker |

---

## 4. COMPONENT BREAKDOWN WITH CONVERSION NOTES

### A. Header Component

**Current (HTML):**
```html
<header class="tp-header-height">
  <div class="tp-offcanvas-area">...</div>
  <nav class="tp-main-menu">...</nav>
</header>
```

**React Version:**
```jsx
// src/components/Header/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import OffCanvas from './OffCanvas';
import './Header.css';

export default function Header() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <header className="tp-header-height">
      <OffCanvas isOpen={isOffCanvasOpen} onClose={() => setIsOffCanvasOpen(false)} />
      <div className="body-overlay" onClick={() => setIsOffCanvasOpen(false)} />
      
      <div className="tp-header-area">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Shyam Stay" />
          </Link>
          <Navigation />
          <button 
            className="tp-offcanvas-open-btn"
            onClick={() => setIsOffCanvasOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
```

### B. Hero with Search Form

**Current (HTML + jQuery):**
```html
<div class="tp-hero-section">
  <input name="datetime-local" type="date" />
  <button type="button">Search</button>
</div>

<script>
flatpickr("input[name='datetime-local']", {
  dateFormat: "Y-m-d"
});
</script>
```

**React Version (using react-datepicker):**
```jsx
// src/components/Hero/HeroSearch.jsx
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './HeroSearch.css';

export default function HeroSearch({ onSearch }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    onSearch({ checkIn, checkOut, guests });
  };

  return (
    <div className="tp-hero-search-wrapper">
      <div className="search-form">
        <div className="form-group">
          <label>Check In</label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
          />
        </div>

        <div className="form-group">
          <label>Check Out</label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            dateFormat="yyyy-MM-dd"
            minDate={checkIn || new Date()}
          />
        </div>

        <div className="form-group">
          <label>Guests</label>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
        </div>

        <button className="btn-search" onClick={handleSearch}>
          Search Rooms
        </button>
      </div>
    </div>
  );
}
```

### C. Room Grid with Isotope Filter

**Current (HTML + jQuery):**
```html
<div class="masonary-menu">
  <button data-filter="*">All</button>
  <button data-filter=".private">Private</button>
</div>
<div class="grid">
  <div class="grid-item private">...</div>
</div>

<script>
$('.grid').isotope({
  itemSelector: '.grid-item',
  filter: value
});
</script>
```

**React Version (using custom state):**
```jsx
// src/components/RoomGrid/RoomGrid.jsx
import { useState, useMemo } from 'react';
import RoomCard from '../RoomCard/RoomCard';
import roomsData from '../../data/rooms.json';
import './RoomGrid.css';

export default function RoomGrid() {
  const [activeFilter, setActiveFilter] = useState('*');

  const filteredRooms = useMemo(() => {
    if (activeFilter === '*') return roomsData;
    return roomsData.filter(room => room.type === activeFilter);
  }, [activeFilter]);

  const filters = ['*', ...new Set(roomsData.map(r => r.type))];

  return (
    <section className="tp-room-section">
      <div className="masonary-menu">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            data-filter={filter}
          >
            {filter === '*' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredRooms.map(room => (
          <div key={room.id} className={`grid-item ${room.type}`}>
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </section>
  );
}
```

### D. Swiper Slider (Testimonials/Blog)

**Current (HTML + jQuery):**
```html
<div class="swiper testimonial-slider">
  <div class="swiper-wrapper">
    <div class="swiper-slide">...</div>
  </div>
</div>

<script>
new Swiper('.testimonial-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
});
</script>
```

**React Version:**
```jsx
// src/components/Testimonials/TestimonialSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import testimonialData from '../../data/testimonials.json';
import 'swiper/css';
import 'swiper/css/navigation';
import './TestimonialSlider.css';

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={30}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {testimonialData.map(testimonial => (
        <SwiperSlide key={testimonial.id}>
          <div className="testimonial-card">
            <div className="quote">"{testimonial.text}"</div>
            <div className="author">— {testimonial.author}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
```

### E. WOW Animations → AOS or Framer Motion

**Current (HTML + JavaScript):**
```html
<div class="wow fadeInUp" data-wow-duration="1s">Content</div>

<script>
new WOW().init();
</script>
```

**React Version (using AOS):**
```jsx
// src/components/Animations/FadeInOnScroll.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FadeInOnScroll({ children, animation = 'fade-in-up' }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos={animation} data-aos-duration="1000">
      {children}
    </div>
  );
}

// Usage in Home.jsx:
<FadeInOnScroll animation="fade-in-up">
  <h2>Featured Rooms</h2>
</FadeInOnScroll>
```

### F. Form Submission (PHP mail.php → API ready)

**Current (HTML + PHP):**
```php
// assets/mail.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    mail("info@shyamstay.com", "Booking", $email);
}
```

**React Version (localStorage for now, API ready):**
```jsx
// src/components/Forms/ContactForm.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState('idle');

  const onSubmit = async (data) => {
    setStatus('submitting');
    
    try {
      // For now, save to localStorage
      const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
      submissions.push({ ...data, timestamp: new Date().toISOString() });
      localStorage.setItem('submissions', JSON.stringify(submissions));

      // When backend is ready:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <input
        {...register('name', { required: true })}
        placeholder="Your Name"
        type="text"
      />
      <input
        {...register('email', { required: true })}
        placeholder="Your Email"
        type="email"
      />
      <textarea
        {...register('message', { required: true })}
        placeholder="Your Message"
      />
      
      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="success">Message sent!</p>}
      {status === 'error' && <p className="error">Error sending message</p>}
    </form>
  );
}
```

---

## 5. DATA STRUCTURE (JSON FILES)

### rooms.json
```json
[
  {
    "id": 1,
    "name": "Private Double Room",
    "type": "private",
    "description": "Spacious room with double bed and modern amenities",
    "image": "/images/rooms/room1.jpg",
    "images": ["/images/rooms/room1.jpg", "/images/rooms/room1-2.jpg"],
    "price": 4500,
    "capacity": 2,
    "size": 250,
    "amenities": ["WiFi", "AC", "Bathroom", "TV", "Bed"],
    "featured": true,
    "rating": 4.8,
    "reviews": 24
  }
]
```

### testimonials.json
```json
[
  {
    "id": 1,
    "author": "John Doe",
    "text": "Excellent stay at Shyam Stay!",
    "image": "/images/testimonials/person1.jpg",
    "rating": 5
  }
]
```

---

## 6. ROUTING SETUP

```jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}
```

---

## 7. STEP-BY-STEP IMPLEMENTATION PLAN

### **Phase 1: Foundation (Days 1-3)**

**Day 1: Setup & Structure**
- [ ] Create Vite project
- [ ] Install all dependencies
- [ ] Create folder structure
- [ ] Setup Router basics
- [ ] Create layout (Header, Footer, BackToTop)

**Day 2: Styling**
- [ ] Copy assets/images to public/
- [ ] Copy main.css and customize
- [ ] Setup Bootstrap or Tailwind
- [ ] Create CSS variables file
- [ ] Make responsive adjustments

**Day 3: Data Files**
- [ ] Create rooms.json from accommodation data
- [ ] Create testimonials.json
- [ ] Create blogs.json from blog data
- [ ] Create amenities.json
- [ ] Create team.json from about page

**Deliverable:** Styled layout with working navigation and footer

---

### **Phase 2: Core Components (Days 4-7)**

**Day 4: Hero & Search**
- [ ] Hero.jsx component
- [ ] HeroSearch.jsx with DatePicker
- [ ] Parallax effects using AOS

**Day 5: Room Components**
- [ ] RoomCard.jsx
- [ ] RoomGrid.jsx with filtering
- [ ] RoomFilter.jsx with price slider

**Day 6: Testimonials & Blog**
- [ ] TestimonialSlider.jsx (Swiper)
- [ ] BlogCard.jsx
- [ ] BlogSlider.jsx

**Day 7: Gallery & Animations**
- [ ] Gallery.jsx with lightbox
- [ ] AnimatedCounter.jsx
- [ ] FadeInOnScroll.jsx (AOS)
- [ ] ParallaxSection.jsx

**Deliverable:** All reusable components working

---

### **Phase 3: Pages (Days 8-11)**

**Day 8: Home Page**
- [ ] Home.jsx combining Hero + Rooms + Testimonials + Blog
- [ ] All animations working
- [ ] Responsive on mobile/tablet

**Day 9: Accommodation & Gallery Pages**
- [ ] Accommodation.jsx (with filters)
- [ ] Gallery.jsx with masonry
- [ ] Lightbox functionality

**Day 10: Blog & About Pages**
- [ ] Blog.jsx with pagination
- [ ] BlogDetails.jsx (dynamic based on URL)
- [ ] About.jsx with team section

**Day 11: Contact & Booking Pages**
- [ ] Contact.jsx with form + map
- [ ] Booking.jsx with form + DatePicker
- [ ] ThankYou.jsx page

**Deliverable:** All pages working with navigation

---

### **Phase 4: Forms & State (Days 12-13)**

**Day 12: Form Handling**
- [ ] Setup React Hook Form
- [ ] ContactForm validation
- [ ] BookingForm with localStorage
- [ ] Form submission states

**Day 13: Context API Setup**
- [ ] BookingContext for search state
- [ ] FormContext for submissions
- [ ] FilterContext for room filters

**Deliverable:** Forms save data to localStorage

---

### **Phase 5: Polish & Optimization (Days 14-16)**

**Day 14: Mobile Responsiveness**
- [ ] Test all pages on mobile
- [ ] Fix breakpoints
- [ ] Adjust header/navigation
- [ ] Test touch interactions

**Day 15: Performance**
- [ ] Image optimization
- [ ] Lazy loading images
- [ ] Code splitting (React.lazy)
- [ ] Remove unused CSS

**Day 16: Testing & Fixes**
- [ ] Test all links
- [ ] Test forms
- [ ] Test animations
- [ ] Browser compatibility
- [ ] Fix any bugs

**Deliverable:** Fully functional React app

---

### **Phase 6: Deployment (Day 17)**

- [ ] Build for production: `npm run build`
- [ ] Deploy to Vercel
- [ ] Setup custom domain
- [ ] Setup analytics (Google, Facebook Pixel)
- [ ] Test deployed version

**Deliverable:** Live React website

---

## 8. CSS MIGRATION STRATEGY

### From main.css to React modules

**Original (main.css - 300KB):**
```css
.tp-header-area { ... }
.tp-hero-section { ... }
.tp-room-card { ... }
```

**React approach (CSS Modules):**
```
components/
  Header/
    Header.css      (only .tp-header-area styles)
  Hero/
    Hero.css        (only .tp-hero-section styles)
  RoomCard/
    RoomCard.css    (only .tp-room-card styles)
```

**Benefits:**
- Scoped styles (no conflicts)
- Tree-shakeable (unused styles removed)
- Faster loading (~70KB instead of 300KB)

---

## 9. MIGRATION CHECKLIST

### HTML Elements to React Components

- [x] Header with offcanvas menu → `<Header /> <OffCanvas />`
- [x] Hero section → `<Hero /> <HeroSearch />`
- [x] Room cards → `<RoomCard /> <RoomGrid />`
- [x] Testimonial slider → `<TestimonialSlider />`
- [x] Blog cards → `<BlogCard /> <BlogSlider />`
- [x] Gallery with filter → `<Gallery /> <GalleryFilter />`
- [x] Contact form → `<ContactForm />`
- [x] Footer → `<Footer />`
- [x] Back to top → `<BackToTop />`

### JavaScript to React Hooks

- [x] jQuery event handlers → React event handlers
- [x] Swiper initialization → Swiper React component
- [x] Flatpickr date → React DatePicker
- [x] Isotope filter → useState + useMemo
- [x] WOW animations → AOS library
- [x] Custom animations → CSS animations + AOS
- [x] localStorage handling → custom useLocalStorage hook

---

## 10. DETAILED CODE EXAMPLES

### Example 1: Home Page

```jsx
// src/pages/Home.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import Hero from '../components/Hero/Hero';
import RoomGrid from '../components/RoomGrid/RoomGrid';
import TestimonialSlider from '../components/Testimonials/TestimonialSlider';
import BlogSlider from '../components/BlogSlider/BlogSlider';
import Amenities from '../components/Amenities/Amenities';
import './Home.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="home">
      <Hero />

      <section className="featured-rooms" data-aos="fade-up">
        <div className="container">
          <h2>Featured Rooms</h2>
          <RoomGrid featured={true} />
        </div>
      </section>

      <Amenities />

      <section className="testimonials" data-aos="fade-up">
        <div className="container">
          <h2>What Guests Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      <section className="blog-section" data-aos="fade-up">
        <div className="container">
          <h2>Latest Blog Posts</h2>
          <BlogSlider />
        </div>
      </section>
    </main>
  );
}
```

### Example 2: Accommodation Page with Filters

```jsx
// src/pages/Accommodation.jsx
import { useState, useMemo } from 'react';
import RoomGrid from '../components/RoomGrid/RoomGrid';
import RoomFilter from '../components/RoomGrid/RoomFilter';
import roomsData from '../data/rooms.json';
import './Accommodation.css';

export default function Accommodation() {
  const [filters, setFilters] = useState({
    type: 'all',
    minPrice: 0,
    maxPrice: 50000,
    capacity: 0,
  });

  const filteredRooms = useMemo(() => {
    return roomsData.filter(room => {
      const typeMatch = filters.type === 'all' || room.type === filters.type;
      const priceMatch = room.price >= filters.minPrice && room.price <= filters.maxPrice;
      const capacityMatch = filters.capacity === 0 || room.capacity >= filters.capacity;
      return typeMatch && priceMatch && capacityMatch;
    });
  }, [filters]);

  return (
    <main className="accommodation-page">
      <div className="page-header">
        <h1>Our Accommodation</h1>
      </div>

      <div className="container">
        <div className="accommodation-layout">
          <aside className="filter-sidebar">
            <RoomFilter filters={filters} setFilters={setFilters} />
          </aside>

          <div className="rooms-content">
            <p className="results-count">
              Showing {filteredRooms.length} rooms
            </p>
            <div className="rooms-list">
              {filteredRooms.map(room => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
```

### Example 3: Custom Hook for Booking

```jsx
// src/hooks/useBooking.js
import { useState } from 'react';

export function useBooking() {
  const [booking, setBooking] = useState({
    checkIn: null,
    checkOut: null,
    guests: 1,
    roomType: '',
    phone: '',
    email: '',
  });

  const updateBooking = (field, value) => {
    setBooking(prev => ({ ...prev, [field]: value }));
  };

  const resetBooking = () => {
    setBooking({
      checkIn: null,
      checkOut: null,
      guests: 1,
      roomType: '',
      phone: '',
      email: '',
    });
  };

  const saveBooking = () => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({ ...booking, id: Date.now() });
    localStorage.setItem('bookings', JSON.stringify(bookings));
  };

  return { booking, updateBooking, resetBooking, saveBooking };
}

// Usage:
// const { booking, updateBooking } = useBooking();
// updateBooking('guests', 2);
```

---

## 11. PLUGIN MIGRATION REFERENCE

| jQuery Plugin | Current Use | React Alternative | NPM Package |
|--------------|-------------|-------------------|-------------|
| **Swiper** | Sliders | Swiper React | `swiper` |
| **Flatpickr** | Date picker | react-datepicker | `react-datepicker` |
| **Isotope** | Masonry filter | CSS Grid + useState | (built-in) |
| **WOW.js** | Scroll animations | AOS | `aos` |
| **Parallax** | Parallax effects | AOS + CSS | `aos` |
| **Magnific Popup** | Lightbox | PhotoSwipe React | `photoswipe` |
| **jQuery** | DOM manipulation | React state | (not needed) |
| **Bootstrap** | UI Framework | (keep or Tailwind) | `bootstrap` |

---

## 12. ENVIRONMENT SETUP

### .env.example
```env
VITE_API_URL=http://localhost:3000/api
VITE_GOOGLE_MAPS_KEY=your_key_here
VITE_FACEBOOK_PIXEL_ID=1414047723852318
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
```

---

## 13. PERFORMANCE OPTIMIZATION

### Image Optimization
```jsx
// Use next-gen formats (WebP)
<img 
  src="/images/room.webp" 
  alt="room"
  loading="lazy"
  width={300}
  height={200}
/>
```

### Code Splitting
```jsx
import { lazy, Suspense } from 'react';

const BlogDetails = lazy(() => import('./pages/BlogDetails'));

// In App.jsx:
<Suspense fallback={<Loading />}>
  <Route path="/blog/:id" element={<BlogDetails />} />
</Suspense>
```

### Bundle Analysis
```bash
npm install --save-dev @vitejs/plugin-visualizer
```

---

## 14. TESTING CHECKLIST

### Functionality
- [ ] All pages load correctly
- [ ] Navigation works (desktop & mobile)
- [ ] Forms submit (save to localStorage)
- [ ] Date picker works
- [ ] Filters work correctly
- [ ] Sliders/carousels work
- [ ] Animations trigger on scroll
- [ ] Links are not broken
- [ ] Back button works

### Performance
- [ ] Page load < 3 seconds
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] No console errors

### Responsive Design
- [ ] Mobile (320px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)
- [ ] Touch interactions work

### Browser Compatibility
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## 15. MIGRATION TIMELINE

**Week 1:**
- Days 1-3: Setup & Foundation
- Days 4-5: Core Components

**Week 2:**
- Days 6-10: Pages & Routing
- Days 11-12: Forms & State

**Week 3:**
- Days 13-14: Polish & Responsive
- Days 15: Testing
- Day 16-17: Optimization & Deployment

**Total: 3-4 weeks**

---

## 16. AFTER MIGRATION

### Future Enhancements
1. **Backend API** - Replace localStorage with real API
2. **User Authentication** - Login/signup system
3. **Payment Gateway** - Stripe/PayPal integration
4. **Email Notifications** - SendGrid/Mailgun
5. **Admin Dashboard** - Manage bookings
6. **Analytics** - Advanced tracking
7. **Mobile App** - React Native

### SEO Optimization
- Use `react-helmet-async` for meta tags
- Generate sitemap
- Implement structured data
- Setup Google Search Console

---

## 17. USEFUL RESOURCES

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev)
- [Swiper React](https://swiperjs.com/react)
- [React Hook Form](https://react-hook-form.com)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [React DatePicker](https://reactdatepicker.com/)
- [Vercel Deployment](https://vercel.com/docs)

---

## 18. TROUBLESHOOTING COMMON ISSUES

### Issue: Styles not applying
**Solution:** Check CSS Modules import syntax and class names

### Issue: Swiper not working
**Solution:** Ensure `breakpoints` are properly configured

### Issue: State not persisting on page refresh
**Solution:** Use localStorage with a custom hook

### Issue: Forms not submitting
**Solution:** Check `preventDefault()` and validation

### Issue: Images not loading
**Solution:** Ensure paths are relative to `public/` folder

---

## 19. GIT WORKFLOW

```bash
# Initialize git (if not already)
git init

# Create feature branches
git checkout -b feature/header
git checkout -b feature/home-page
git checkout -b feature/accommodation

# Merge when complete
git checkout main
git merge feature/header
```

---

**Good luck with your React migration! 🚀**

This plan is comprehensive and beginner-friendly. Follow it phase by phase, and you'll have a modern React version of ShyamStay within 3-4 weeks.

**Questions or need clarification on any section?** Feel free to ask!
