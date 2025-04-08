import './App.css'
import { Navbar } from './components/navbar'
import { Sidebar } from './components/sidebar'
import Header from './components/header'
import {Clients, CommunityManage} from './components/clients'
import LearnMore from './components/learnmore'
import Stats from './components/stats'
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
    </div>
  )
}

export default App
