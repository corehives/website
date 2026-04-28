import Header from './components/layout/header.jsx'
import Hero from './components/hero.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
