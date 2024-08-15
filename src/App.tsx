import './App.css'
import styled from 'styled-components'
import { Header } from './LayOut/header/Header'
import { Main } from './LayOut/sections/main/Main'
import { Projects } from './LayOut/sections/projects/Projects'
import { Learning } from './LayOut/sections/learning/Learning'
import { Contacts } from './LayOut/sections/contact/Contacts'
import { Footer } from './LayOut/footer/Footer'
import { Services } from './LayOut/sections/services/Services'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <Services />
      <Learning />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
