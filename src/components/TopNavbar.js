import "./TopNavbar.css"
import { Search } from "lucide-react"

function TopNavbar() {
  return (
    <div className="header-section">
      <div className="top-navbar">
        <div className="top-links">
          <a href="#" className="top-link">
            IEEE.org
          </a>
          <a href="#" className="top-link">
            IEEE <span className="xplore">Xplore</span> Digital Library
          </a>
          <a href="#" className="top-link">
            IEEE Standards
          </a>
          <a href="#" className="top-link">
            IEEE Spectrum
          </a>
          <a href="#" className="top-link">
            More Sites
          </a>
        </div>
      </div>

      <div className="main-header">
        <div className="header-container">
          <div className="logo-container">
            <a href="/">
              <img src="	https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/04/small-jurse2025.png" alt="JURSE 2025" className="jurse-logo" />
            </a>
          </div>

          <div className="right-section">
            <div className="search-icon">
              <Search size={24} color="#005a9c" />
            </div>
            <div className="ieee-logo-container">
              <img src="https://2025.ieee-jurse.org/wp-content/themes/ieee-dci/images/logo-ieee.svg" alt="IEEE" className="ieee-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
