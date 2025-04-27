"use client"

import { useState, useEffect } from "react"
import "./MainNavbar.css"
import { Menu } from "lucide-react"

function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleDropdownToggle = (dropdown) => {
    if (window.innerWidth < 781) {
      // For mobile, toggle the dropdown
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }
  }

  const handleMouseEnter = (dropdown) => {
    if (window.innerWidth >= 781) {
      setActiveDropdown(dropdown)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 781) {
      setActiveDropdown(null)
    }
  }

  // Navigation data with dropdowns
  const navItems = [
    {
      name: "HOME",
      link: "#",
      active: true,
    },
    {
      name: "PARTICIPATION",
      link: "#",
      dropdown: [
        { name: "PROGRAM", link: "#" },
        { name: "FOR AUTHORS", link: "#" },
        { name: "CALL FOR PAPERS", link: "#" },
        { name: "REGISTRATION", link: "#" },
        { name: "SOCIAL EVENTS", link: "#" },
        { name: "CONTACT", link: "#" },
      ],
    },
    {
      name: "PRESENTATION",
      link: "#",
      dropdown: [
        { name: "GUIDELINES", link: "#" },
        { name: "SCHEDULE", link: "#" },
        { name: "POSTER SESSIONS", link: "#" },
      ],
    },
    {
      name: "COMMITTEES",
      link: "#",
    },
    {
      name: "SPONSORS",
      link: "#",
    },
    {
      name: "VENUE",
      link: "#",
    },
    {
      name: "VIDEOS & PHOTOS",
      link: "#",
    },
    {
      name: "SUMMER SCHOOL",
      link: "#",
    },
    {
      name: "PROGRAM AT A GLANCE",
      link: "#",
    },
  ]

  return (
    <nav className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        <Menu size={24} color="white" />
      </div>

      <div className="nav-container">
        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${item.dropdown ? "has-dropdown" : ""}`}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.link}
                className={`nav-link ${item.active ? "active" : ""}`}
                onClick={() => item.dropdown && handleDropdownToggle(item.name)}
              >
                {item.name}
                {item.dropdown && <span className="dropdown-arrow">▼</span>}
              </a>

              {item.dropdown && (
                <div className={`dropdown-menu ${activeDropdown === item.name ? "active" : ""}`}>
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <a key={dropdownIndex} href={dropdownItem.link} className="dropdown-item">
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar
