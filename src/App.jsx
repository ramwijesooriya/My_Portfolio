import { useState } from 'react'
import MainPage from './components/MainPage'
import Work from './components/Work'
import Contact from './components/Contact '
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'


function App() {

  return (
   <div>
<MainPage/>
<Work/>
<Projects/>
<Contact/>
<Sidenav/>
   </div>
  )
}

export default App
