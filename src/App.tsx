import './App.css'
import { Navbar } from './components/navbar'
import { Sidebar } from './components/sidebar'
import Header from './components/header'
import {Clients, CommunityManage} from './components/clients'
import LearnMore from './components/learnmore'
import Stats from './components/stats'
import { HowToDesign, HowToDesign2 } from './components/howtodesign'
import { Marketing } from './components/marketing'
function App() {

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Header/>
      <Clients/>
      <CommunityManage/>
      <LearnMore/>
      <Stats/>
      <HowToDesign/>
      <HowToDesign2/>
      <Marketing/>
    </div>
  )
}

export default App
