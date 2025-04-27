import "./Contributors.css"

function Contributors() {
  const contributors = [
    { name: "SUPCOM", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/supcom-300x93.png" },
    { name: "GRSS Tunisia Chapter", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/04/chapter-logo.png" },
    { name: "AGEOS", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/AGEOS.png" },
    { name: "COSIM", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/COSIM.png" },
    { name: "Innov'COM", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/INNOVCOM.png" },
    { name: "GRESCOM", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/GRESCOM.png" },
    { name: "EDTIC", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/EDTIC.png" },
    { name: "GRSS", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2025/02/GRSS-300x220.png" },
    { name: "Université de Carthage", logo: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/01/UNIVERSITE-CARTHAGE.png" },
  ]

  return (
    <div className="contributors-section">
      <div className="contributors-grid">
        {contributors.map((contributor, index) => (
          <div key={index} className="contributor-item">
            <img src={contributor.logo || "/placeholder.svg"} alt={contributor.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contributors
