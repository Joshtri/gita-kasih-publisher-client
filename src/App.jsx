// import { useState } from 'react'

// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Publish from './pages/Publishing/Publish'
// import LoginUser from './pages/LoginUser'
// import SignUpUser from './pages/SignUpUser'
// import ProtectedRoute from './components/Auth/ProtectedRoute'

import FormAuthorPublish from './pages/Publishing/FormAuthorPublish'
import ProgressCek from './pages/Service/ProgressCek'
import ScrollToTop from './components/ScrollToUp'; // Import the ScrollToTop component
import AboutPage from './pages/About/AboutPage'
import ProgressSection from './pages/Service/ProgressSection'
import TokoOnlinePage from './pages/TokoOnline/TokoOnlinePage'
import VisiMisiPage from './pages/About/VisiMisiPage'
import SejarahPage from './pages/About/SejarahPage'

function App() {
  // const user = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
      <ScrollToTop /> {/* Include ScrollToTop here */}

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/visi-misi' element={<VisiMisiPage/>} />
          <Route path='/sejarah' element={<SejarahPage/>} />


          {/* Protected routes */}
          <Route path='/daftar-penulis-buku' element={<Publish/>}/>
          <Route path='/toko-online-buku' element={<TokoOnlinePage/>}/>
          
          <Route path='/formulir-daftar' element={<FormAuthorPublish/>}/>
          <Route path='/cek-progress' element={<ProgressCek/>}/>

          <Route path='/section-cek-progress' element={<ProgressSection/>}/>


          {/* <Route path='/login' element={<LoginUser/>}/>
          <Route path='/sign-up' element={<SignUpUser/>}/> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
