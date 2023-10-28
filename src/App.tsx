import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {


  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;