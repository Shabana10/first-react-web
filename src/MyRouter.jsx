import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './Component/MyNav';


export default function MyRouter() {
    return (
        <>
        
        <Router>
              <MyNav />  
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/**/*' element={<ErrorPage />} />
            </Routes>
        </div>
        </Router>
        </>
    )
}
