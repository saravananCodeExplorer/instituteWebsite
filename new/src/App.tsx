import Navbar from './Navbar/Navbar';
import TopBar from './Navbar/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './Component/pages/Home';
import Courses from './Component/CoursesPage/Courses';
import LanguageSchool from './Component/pages/LanguageSchool ';
import PlacementStudents from './Component/pages/PlacementStudents';
import Testimonials from './Component/pages/Testimonials';
import Review from './Component/pages/Review';
import Gallery from './Component/pages/Gallery';
import Contact from './Component/pages/Contact';
import Footer from './Footer/Footer';
import PlacementPartners from './Component/pages/PlacementPartners';



function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
     
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/language-school" element={<LanguageSchool />} />
        <Route path="/placement-students" element={<PlacementStudents />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/review" element={<Review />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placement-partners" element={<PlacementPartners />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
