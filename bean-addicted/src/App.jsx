// App.jsx
import './App.css'
import Navbar from './components/Navbar_Footer/Navbar'
import Home from './components/Body/Home/Home'
import Footer from './components/Navbar_Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App