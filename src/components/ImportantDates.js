import "./ImportantDates.css"

function ImportantDates() {
  return (
    <div className="important-dates">
      <h2>Important Dates</h2>

      <div className="date-item">
        <p>Submission Deadline:</p>
        <p className="date-value">Extended to 17 December 2024</p>
      </div>

      <div className="date-item">
        <p>Notification of Acceptance:</p>
        <p className="date-value">4 February 2025</p>
      </div>

      <div className="date-item">
        <p>Registration Open:</p>
        <p className="date-value">11 February 2025</p>
      </div>

      <div className="date-item">
        <p>Author Registration Deadline:</p>
        <p className="date-value">24 Mars 2025</p>
      </div>

      <div className="date-item">
        <p>Early Registration Deadline:</p>
        <p className="date-value">11 April 2025</p>
      </div>

      <div className="call-for-papers">
        <img src="	https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2024/12/JURSE25-Firm-Submission-Deadline-1.png" alt="Call for Papers" className="papers-image" />
      </div>
    </div>
  )
}

export default ImportantDates
