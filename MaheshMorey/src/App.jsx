import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Schemes from './pages/Schemes';
import Notifications from './pages/Notifications';
import Contact from './pages/Contact';
import AboutDepartment from './pages/AboutDepartment';
import AboutStatistics from './pages/AboutStatistics';
import NotificationsActs from './pages/NotificationsActs';
import NotificationsNotification from './pages/NotificationsNotification';
import SchemesCentral from './pages/SchemesCentral';
import SchemesState from './pages/SchemesState';
import Policies from './pages/Policies';
import MediaGallery from './pages/MediaGallery';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import RTI from './pages/RTI';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/department" element={<AboutDepartment />} />
      <Route path="/about/statistics" element={<AboutStatistics />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/schemes/central" element={<SchemesCentral />} />
      <Route path="/schemes/state" element={<SchemesState />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/notifications/acts" element={<NotificationsActs />} />
      <Route path="/notifications/notification" element={<NotificationsNotification />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/media" element={<MediaGallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/rti" element={<RTI />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
        </>
  );
}

export default App;