import { useState } from 'react'
import MainPage from './components/MainPage'
import Work from './components/Work'
import Contact from './components/Contact '
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Certifications from './components/Certifications'
import Header from './components/Header'



function App() {

  return (
    <div>
  <Header/>
<MainPage/>
<Work/>
<Certifications/>
<Projects/>
<Contact/>
      <Sidenav />
      


   </div>
  )
}

export default App
