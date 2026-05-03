
import Link from 'next/link'

export default function Home(){
  return(
    <div>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <h1>
            CSI-Based <span>Search and Rescue</span> System Using WiFi Signals
          </h1>
          <p className="hero-subtitle">
            Leveraging Wi-Fi Channel State Information and signal processing to detect
            human presence through walls, debris, and collapsed structures — enabling
            faster, safer rescue operations.
          </p>
          <div className="hero-buttons">
            <Link href="/about" className="btn-primary">
              Learn More &rarr;
            </Link>
            <Link href="/project" className="btn-secondary">
              View Project Details
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-gray">
        <div className="section-inner-wide">
          <div className="section-heading" style={{textAlign: 'center'}}>
            <h2>How It Works</h2>
            <p style={{margin: '0 auto'}}>
              Our system uses off-the-shelf Wi-Fi hardware to sense human presence
              in obstructed environments.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">&#x25CE;</div>
              <h3>RF Sensing</h3>
              <p>Wi-Fi CSI captured at ~50&nbsp;Hz on every perimeter penetrates debris and obstacles where cameras cannot reach.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#x2699;</div>
              <h3>Deterministic Detection</h3>
              <p>SVD drift cancellation plus a Welch periodogram in the 0.15&ndash;0.40&nbsp;Hz breathing band &mdash; no machine learning, no calibration.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#x25A3;</div>
              <h3>Real-Time Localization</h3>
              <p>An HMM-smoothed quadrant estimate plus optional continuous (x,&nbsp;y) tracking pinpoints victim locations for rescue teams.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#x25C6;</div>
              <h3>Non-Contact Detection</h3>
              <p>No wearable devices required &mdash; detection works through walls and rubble.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-blue">
        <div className="section-inner-wide">
          <h2>Department of Electrical and Computer Engineering</h2>
          <p>Faculty Mentor: Dr. Seungmo Kim</p>
          <Link href="/team" className="btn-primary">
            Meet the Team &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
