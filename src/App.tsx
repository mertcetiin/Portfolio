import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

function App() {


  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactForm' element={<ContactForm />} />
      </Routes>
    </div>
  )
}

export default App;