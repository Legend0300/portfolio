import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import Nav from './Components/nav'
import About from './Components/about'
import NotFound from './Components/NotFound'
import Skills from './Components/skills'
import Projects from './Components/projects'
import Contact from './Components/contact'
import Certifications from './Components/certifications'
import LandingPage from './Components/landingpage'
import AboutStatic from './Components/aboutstatic'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Nav />}>
      <Route  index element={<LandingPage  />} />
      <Route path="about" element={<AboutStatic />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects  />} /> 
      <Route path="contact" element={<Contact  />} />
      <Route path="certifications" element={<Certifications />} />
    </Route>
    <Route path="*" element={<NotFound />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App