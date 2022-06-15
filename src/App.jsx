import Investiment from "./pages/Investiment"
import "./app.css"

function App() {
  return (
    <>
      <header>
        <a href="" className="brand">My Invest</a>
      </header>
      <main className="invest-container">
        <Investiment />
      </main>
      <footer>
        <a href="https://github.com/AntonioLuisP">Antônio</a>
      </footer>
    </>
  )
}

export default App
