import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pipeline from './components/Pipeline'
import Books from './components/Books'
import FocusAreas from './components/FocusAreas'
import HardestPhase from './components/HardestPhase'
import Deliverable from './components/Deliverable'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pipeline />
        <Books />
        <FocusAreas />
        <HardestPhase />
        <Deliverable />
      </main>
    </>
  )
}
