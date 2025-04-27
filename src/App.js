import "./App.css"
import TopNavbar from "./components/TopNavbar"
import MainNavbar from "./components/MainNavbar"
import ImageCarousel from "./components/ImageCarousel"
import WelcomeSection from "./components/WelcomeSection"
import ImportantDates from "./components/ImportantDates"
import Contributors from "./components/Contributors"
import Footer from "./components/Footer"
import PaperSubmission from "./components/PaperSubmission"

function App() {
  return (
    <div className="app">
      <header>
        <TopNavbar />
        <MainNavbar />
      </header>

      <div className="main-content">
        <ImageCarousel />

        <div className="content-wrapper">
          <div className="desktop-container">
            <div className="left-column">
              <WelcomeSection />
            </div>
            <div className="right-column">
              <PaperSubmission />
              <ImportantDates />
            </div>
          </div>

          <div className="mobile-container">
            <WelcomeSection />
            <PaperSubmission />
            <ImportantDates />
          </div>

          <div className="divider"></div>

          <div className="contributors-container">
            <h2 className="contributors-title">List of Contributors:</h2>
            <Contributors />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
