
export default function About(){
  return(
    <div>
      {/* Hero banner */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <h1>About the Project</h1>
          <p>Understanding how wireless signal analysis can revolutionize search and rescue operations.</p>
          <div className="accent-bar" />
        </div>
      </div>

      {/* Section Jump Nav */}
      <div className="section-jump-bar">
        <div className="section-inner-wide">
          <a href="#background">Background</a>
          <a href="#hypothesis">Hypothesis &amp; Goals</a>
          <a href="#preliminary">Preliminary Work</a>
          <a href="#standards">Standards &amp; Compliance</a>
        </div>
      </div>

      {/* Background */}
      <section className="section-white" id="background">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Background</h2>
            <div className="accent-bar" />
          </div>
          <div className="body-text">
            <p>
              Search and rescue operations often occur in environments where victims are
              hidden beneath debris, collapsed structures, or smoke, making detection
              difficult with traditional methods such as cameras or thermal sensors.
              Wireless signals offer an alternative sensing approach because they can
              propagate through certain obstacles.
            </p>
            <p>
              Channel State Information (CSI) from Wi-Fi communication provides detailed
              measurements of how signals travel between transmitters and receivers.
              Human movement alters these signals through reflection and absorption,
              creating detectable variations.
            </p>
            <p>
              By analyzing CSI using signal processing, it is possible to detect human
              presence without requiring direct line-of-sight.
            </p>
          </div>
          <div className="figure">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200"
              alt="Collapsed structure from natural disaster"
            />
            <p className="figure-caption">
              Fig. 1. Collapsed structures where traditional detection methods fail
            </p>
          </div>
        </div>
      </section>

      {/* Hypothesis & Goals */}
      <section className="section-gray" id="hypothesis">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Hypothesis &amp; Research Goals</h2>
            <div className="accent-bar" />
          </div>

          <div className="highlight-box">
            <p>
              &ldquo;We hypothesize that variations in Wi-Fi Channel State Information
              can be analyzed using signal processing to reliably detect human presence
              and motion in obstructed environments.&rdquo;
            </p>
          </div>

          <div className="goal-card">
            <div className="goal-icon">&#x2713;</div>
            <p>Achieve ≥80% detection accuracy in controlled indoor environments</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">&#x2713;</div>
            <p>Support detection within a 15–30 meter range</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">&#x2713;</div>
            <p>Maintain response time &lt; 120 seconds (target: &lt; 30 seconds in optimized system)</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">&#x2713;</div>
            <p>Maintain false positive/negative rate &lt; 15%</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">&#x2713;</div>
            <p>Design a system with total cost &lt; $450</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">&#x2713;</div>
            <p>Transmit CSI measurements to a central processing unit for analysis</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">&#x2713;</div>
            <p>Visualize detection results in a real-time heatmap interface</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">&#x2713;</div>
            <p>Demonstrate a portable RF-based sensing system for search and rescue operations</p>
          </div>
        </div>
      </section>

      {/* Preliminary Work */}
      <section className="section-white" id="preliminary">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Preliminary Work</h2>
            <div className="accent-bar" />
          </div>
          <div className="body-text">
            <p>
              Initial system development focused on establishing reliable CSI data
              acquisition and communication between sensing nodes and a central
              processing unit. Four ESP32-S3 perimeter modules were configured to enter
              Wi-Fi promiscuous mode and capture the I/Q samples that the chip&apos;s
              CSI driver delivers per OFDM subcarrier.
            </p>
            <p>
              To guarantee a steady CSI stream that did not depend on incidental
              traffic, each perimeter was modified to inject a 24-byte unicast Null
              Data Packet to its peers at 20&nbsp;Hz, providing a deterministic
              stimulus across all six links. A fifth ESP32-S3 was configured as a
              SoftAP coordinator to receive the resulting UDP datagrams and bridge
              them to the host over either USB (COBS-encoded) or a secondary Wi-Fi
              hop.
            </p>
            <p>
              Early experiments confirmed measurable CSI variations when a person
              moved within the sensing area. Crucially, they also revealed that slow
              ambient drift and starved links could overwhelm naive thresholding,
              which motivated the move toward SVD drift cancellation, breathing-band
              spectral analysis, and soft endpoint attribution &mdash; the
              deterministic pipeline used in the final system.
            </p>
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="section-gray" id="standards">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Standards &amp; Compliance</h2>
            <p>Industry standards and codes governing the design and operation of this system.</p>
            <div className="accent-bar" />
          </div>

          <div className="content-card" style={{marginBottom: '16px'}}>
            <h3 style={{fontSize: '14pt', color: 'var(--blue)', margin: '0 0 8px', fontWeight: 'bold'}}>IEEE 802.11-2020 &mdash; Wi-Fi Standard</h3>
            <p style={{fontSize: '11pt', lineHeight: '1.8', color: 'var(--text)', margin: 0}}>
              The system operates within the 2.4 GHz ISM (Industrial, Scientific, and Medical) band as defined by the IEEE 802.11-2020 wireless networking standard. All CSI data extraction and wireless communication between sensing nodes conforms to this standard.
            </p>
          </div>

          <div className="content-card" style={{marginBottom: '16px'}}>
            <h3 style={{fontSize: '14pt', color: 'var(--blue)', margin: '0 0 8px', fontWeight: 'bold'}}>IEEE C95.1-2019 / FCC Title 47 / FCC OET-65 &mdash; RF Exposure Safety</h3>
            <p style={{fontSize: '11pt', lineHeight: '1.8', color: 'var(--text)', margin: 0}}>
              Safety standards for radio frequency exposure ensuring that 2.4 GHz signal density remains safe for trapped survivors and central device users. FCC OET-65 provides the methods for evaluating compliance with RF exposure limits. The system&apos;s low-power Wi-Fi transmissions operate well within permissible exposure limits defined by these standards.
            </p>
          </div>

          <div className="content-card">
            <h3 style={{fontSize: '14pt', color: 'var(--blue)', margin: '0 0 8px', fontWeight: 'bold'}}>IEEE Code of Ethics &mdash; Public Safety &amp; Welfare</h3>
            <p style={{fontSize: '11pt', lineHeight: '1.8', color: 'var(--text)', margin: 0}}>
              This project adheres to the IEEE Code of Ethics, prioritizing public safety and welfare in all design decisions. The system is designed to aid first responders in locating trapped individuals without introducing additional risk to survivors or rescue personnel.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
