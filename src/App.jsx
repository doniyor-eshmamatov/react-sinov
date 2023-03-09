import { Choose } from "./components/Choose/Choose";
import { Clients } from "./components/Clients/Clients";
import { Contact } from "./components/Contact/Contact";
import { Dream } from "./components/Dream/Dream";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Dream/>
      <Choose/>
      <Gallery/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
