import './App.css'
import Navbar from './components/Navbar/Navbar'
import ContactInformation from './components/Contact Information/ContactInformation'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PropertyDetails from './Pages/PropertyDetails'
import ContactUs from './Pages/ContactUs'
import PropertiesPage from './Pages/PropertiesPage'
function App() {
  return (
    <>
    <ContactInformation />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/propertyDetails" element={<PropertyDetails />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
