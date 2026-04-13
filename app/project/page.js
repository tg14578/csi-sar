
export default function Project(){
  return(
    <div>
      {/* Hero banner */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <h1>Project Implementation</h1>
          <p>Detailed information about the system design, methodology, results, and key accomplishments.</p>
          <div className="accent-bar" />
        </div>
      </div>

      {/* Section Jump Nav */}
      <div className="section-jump-bar">
        <div className="section-inner-wide">
          <a href="#methodology">Methodology</a>
          <a href="#results">Results</a>
          <a href="#failed-works">Failed Works</a>
          <a href="#discussion">Discussion</a>
          <a href="#accomplishments">Accomplishments</a>
        </div>
      </div>

      {/* Methodology */}
      <section className="section-white" id="methodology">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Methodology</h2>
            <p>Click each section to expand for detailed information.</p>
            <div className="accent-bar" />
          </div>

          {/* Hardware Design - Expandable */}
          <details className="expandable-section">
            <summary className="expandable-header">
              <span className="expandable-icon">&#x2699;</span>
              <span>Hardware Design</span>
              <span className="expand-arrow">&#x25BC;</span>
            </summary>
            <div className="expandable-content">
              <h4>Sensing Nodes (ESP32 Microcontrollers)</h4>
              <ul className="detail-list">
                <li><span className="bullet-dot" /> Multiple ESP32-S3 microcontrollers serve as both transmitter and receiver nodes</li>
                <li><span className="bullet-dot" /> Each node is equipped with external 2.4 GHz Wi-Fi antennas for improved signal range</li>
                <li><span className="bullet-dot" /> Nodes capture Channel State Information (CSI) from wireless packets at the PHY layer</li>
                <li><span className="bullet-dot" /> On-chip edge processing performs initial signal filtering, phase unwrapping, and variance analysis before transmitting results</li>
                <li><span className="bullet-dot" /> Each sensing node is powered by a rechargeable LiPo battery for portable, wireless field deployment</li>
              </ul>

              <h4>Coordinator Node</h4>
              <ul className="detail-list">
                <li><span className="bullet-dot" /> A dedicated ESP32 operates in SoftAP (Access Point) mode, creating a local WiFi network</li>
                <li><span className="bullet-dot" /> All sensing nodes connect to the coordinator and stream processed data via UDP</li>
                <li><span className="bullet-dot" /> The coordinator bridges aggregated data over USB serial to the Raspberry Pi</li>
              </ul>

              <h4>Central Processing Unit (Raspberry Pi)</h4>
              <ul className="detail-list">
                <li><span className="bullet-dot" /> Raspberry Pi receives serial data from the coordinator and runs the Python-based processing pipeline</li>
                <li><span className="bullet-dot" /> Performs link aggregation across all node pairs and zone detection algorithms</li>
                <li><span className="bullet-dot" /> Powers the real-time heatmap visualization via LCD/GUI display</li>
                <li><span className="bullet-dot" /> Portable operation via USB power bank for field deployment without wall power</li>
              </ul>

              <h4>System Cost</h4>
              <p className="body-text">
                Total system cost is under $450 using off-the-shelf components, making it accessible for emergency response teams and scalable for larger deployments.
              </p>
            </div>
          </details>

          {/* Signal Processing - Expandable */}
          <details className="expandable-section">
            <summary className="expandable-header">
              <span className="expandable-icon">&#x1D6BA;</span>
              <span>Signal Processing &amp; Mathematics</span>
              <span className="expand-arrow">&#x25BC;</span>
            </summary>
            <div className="expandable-content">
              <h4>CSI Data Extraction</h4>
              <p className="body-text">
                Channel State Information captures the frequency response of the wireless channel across multiple OFDM subcarriers. Each CSI measurement contains amplitude and phase information for each subcarrier, providing a detailed picture of how the signal propagates through the environment.
              </p>

              <h4>Mathematical Framework</h4>
              <div className="math-block">
                <p><strong>CSI Representation:</strong></p>
                <p className="math-formula">H(f, t) = |H(f, t)| &middot; e<sup>j&angle;H(f,t)</sup></p>
                <p className="math-desc">where |H(f,t)| is the amplitude and &angle;H(f,t) is the phase for subcarrier frequency f at time t.</p>
              </div>

              <div className="math-block">
                <p><strong>Amplitude Variance (Motion Detection):</strong></p>
                <p className="math-formula">&sigma;&sup2;(f) = (1/N) &middot; &Sigma;(|H(f, t<sub>i</sub>)| - &mu;(f))&sup2;</p>
                <p className="math-desc">Variance of CSI amplitude across N time samples for each subcarrier. High variance indicates human motion disturbing the signal path.</p>
              </div>

              <div className="math-block">
                <p><strong>Moving Average Filter:</strong></p>
                <p className="math-formula">H&#x0305;(f, t) = (1/W) &middot; &Sigma; |H(f, t-k)| &nbsp; for k = 0 to W-1</p>
                <p className="math-desc">Smooths CSI amplitude over a sliding window of W samples to remove high-frequency noise while preserving motion-induced variations.</p>
              </div>

              <div className="math-block">
                <p><strong>Threshold-Based Detection:</strong></p>
                <p className="math-formula">Detection = 1 &nbsp;if&nbsp; &sigma;&sup2;(f) &gt; &tau;, &nbsp;else 0</p>
                <p className="math-desc">A subcarrier signals human presence when its variance exceeds threshold &tau;, calibrated during an empty-room baseline period.</p>
              </div>

              <h4>Processing Pipeline</h4>
              <ul className="detail-list">
                <li><span className="bullet-dot" /> <strong>Step 1:</strong> Raw CSI packets captured at each receiver node (amplitude + phase per subcarrier)</li>
                <li><span className="bullet-dot" /> <strong>Step 2:</strong> Phase sanitization and unwrapping to correct for hardware imperfections</li>
                <li><span className="bullet-dot" /> <strong>Step 3:</strong> Moving average filter applied to smooth amplitude over time</li>
                <li><span className="bullet-dot" /> <strong>Step 4:</strong> Temporal variance computed across sliding window for each subcarrier</li>
                <li><span className="bullet-dot" /> <strong>Step 5:</strong> Threshold comparison to classify presence vs. no presence per link</li>
                <li><span className="bullet-dot" /> <strong>Step 6:</strong> Link-level results aggregated for zone detection</li>
              </ul>

              <div className="figure" style={{marginTop: '24px'}}>
                <div style={{width: '100%', height: '200px', background: 'var(--platinum)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cerulean)', fontSize: '11pt'}}>
                  Signal Processing Pipeline Diagram — Coming Soon
                </div>
                <p className="figure-caption">
                  Fig. 2. Signal Processing Pipeline
                </p>
              </div>
            </div>
          </details>

          {/* System Architecture - Expandable */}
          <details className="expandable-section">
            <summary className="expandable-header">
              <span className="expandable-icon">&#x25A3;</span>
              <span>System Architecture</span>
              <span className="expand-arrow">&#x25BC;</span>
            </summary>
            <div className="expandable-content">
              <h4>End-to-End Data Flow</h4>
              <ol className="numbered-list">
                <li>Multiple ESP32 sensing nodes equipped with Wi-Fi antennas transmit and receive RF signals continuously</li>
                <li>CSI data from the wireless communication channel is captured at each receiver node at the PHY layer</li>
                <li>On-chip edge processing on each ESP32 performs signal filtering, variance analysis, and noise removal</li>
                <li>Processed data streams from each node to the coordinator ESP32 via UDP over the local SoftAP network</li>
                <li>The coordinator aggregates all node data and bridges it over USB serial to the Raspberry Pi</li>
                <li>The Raspberry Pi runs link aggregation and zone detection algorithms across all node pairs</li>
                <li>Results are displayed as a 2D heatmap showing detected human presence by quadrant (Q1–Q4)</li>
              </ol>

              <h4>Zone Detection</h4>
              <p className="body-text">
                The sensing area is divided into 4 spatial quadrants (Q1–Q4). Each quadrant is monitored by one or more transmitter-receiver link pairs. The zone detection algorithm uses link variance weighting — if a link crossing a particular quadrant shows high CSI variance, that quadrant is marked as having detected human presence. Multiple overlapping links provide redundancy and reduce false positives.
              </p>

              <h4>Real-Time Visualization</h4>
              <p className="body-text">
                A Pygame-based interface renders the zone detection state as a color-coded 2D heatmap. Quadrants with detected presence are highlighted, giving first responders an immediate visual indication of where survivors may be located. The display updates in real time as new CSI measurements are processed.
              </p>

              <div className="figure" style={{marginTop: '24px'}}>
                <div style={{width: '100%', height: '200px', background: 'var(--platinum)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cerulean)', fontSize: '11pt'}}>
                  System Architecture Diagram — Coming Soon
                </div>
                <p className="figure-caption">
                  Fig. 3. System Architecture Block Diagram
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Results */}
      <section className="section-gray" id="results">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Results</h2>
            <div className="accent-bar" />
          </div>
          <p className="body-text" style={{marginBottom: '24px'}}>
            The prototype system successfully demonstrated the feasibility of CSI-based human detection.
          </p>

          <div className="content-card" style={{marginBottom: '40px'}}>
            <h3 style={{fontSize: '14pt', color: 'var(--blue)', margin: '0 0 16px', fontWeight: 'bold'}}>Key Findings</h3>
            <ul className="check-list">
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> Human motion creates detectable disturbances in wireless signals</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> Low-cost Wi-Fi hardware can capture these signal variations</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> Signal processing methods alone are sufficient for detecting human presence</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> System performance is influenced by environmental noise and multipath effects</li>
            </ul>
          </div>

          <div className="content-card">
            <h3 style={{fontSize: '14pt', color: 'var(--blue)', margin: '0 0 16px', fontWeight: 'bold'}}>Performance Metrics</h3>
            <ul className="check-list">
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x25CF;</span> Detection Accuracy: 80-90% in controlled indoor testing</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x25CF;</span> Detection Range: Up to 15 meters (target: 15-30 meters)</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x25CF;</span> Response Time: 120 seconds (target: 30 seconds)</li>
            </ul>
          </div>

          <div className="figure">
            <div style={{width: '100%', height: '256px', background: 'var(--platinum)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cerulean)', fontSize: '11pt'}}>
              Image Coming Soon
            </div>
            <p className="figure-caption">
              Fig. 4. Human Localization with Heatmap Visualization
            </p>
          </div>
        </div>
      </section>

      {/* Failed Works */}
      <section className="section-white" id="failed-works">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Failed Works</h2>
            <p>Approaches that were explored but did not yield the desired results.</p>
            <div className="accent-bar" />
          </div>

          <div className="failed-card">
            <h4>Machine Learning Classification</h4>
            <p>
              Early iterations of the system attempted to use machine learning models (SVM, neural networks) to classify CSI patterns as &ldquo;human present&rdquo; vs. &ldquo;empty room.&rdquo; While ML models showed promise in controlled training environments, they failed to generalize reliably to new room configurations and furniture layouts. The models required retraining for each new environment, making them impractical for search and rescue scenarios where the environment is unknown and dynamic.
            </p>
            <p className="failed-lesson">
              <strong>Lesson learned:</strong> Signal processing with threshold-based detection proved more robust and environment-agnostic than ML classification for this application.
            </p>
          </div>

          <div className="failed-card">
            <h4>Phase-Based Detection</h4>
            <p>
              Initial experiments attempted to use CSI phase information as the primary detection feature. However, raw phase measurements from ESP32 hardware contained significant random offsets and noise due to unsynchronized clocks between transmitter and receiver. Phase unwrapping and sanitization techniques improved consistency but still produced unreliable detection compared to amplitude-based approaches.
            </p>
            <p className="failed-lesson">
              <strong>Lesson learned:</strong> CSI amplitude variance proved to be a more stable and reliable indicator of human presence than phase-based features with the available hardware.
            </p>
          </div>

          <div className="failed-card">
            <h4>Single-Node Detection</h4>
            <p>
              Early prototypes used a single transmitter-receiver pair to detect human presence. While motion could be detected along the direct signal path, the system could not determine location or distinguish between motion in different areas. Coverage was limited to the narrow corridor between the two nodes.
            </p>
            <p className="failed-lesson">
              <strong>Lesson learned:</strong> Multi-node mesh deployment with overlapping links is necessary for spatial zone detection and practical coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Discussion */}
      <section className="section-gray" id="discussion">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Discussion</h2>
            <div className="accent-bar" />
          </div>
          <p className="body-text" style={{marginBottom: '32px'}}>
            CSI-based sensing provides several advantages for search and rescue applications:
          </p>

          <div className="discussion-grid">
            <div className="discussion-card advantages">
              <h3>Advantages</h3>
              <ul>
                <li><span className="check-icon">&#x2713;</span> Does not require line-of-sight visibility</li>
                <li><span className="check-icon">&#x2713;</span> Low-cost, portable, and scalable hardware</li>
                <li><span className="check-icon">&#x2713;</span> No wearable devices required for detection</li>
                <li><span className="check-icon">&#x2713;</span> Real-time detection capability</li>
              </ul>
            </div>
            <div className="discussion-card challenges">
              <h3>Challenges</h3>
              <ul>
                <li><span className="warn-icon">&#x26A0;</span> Environmental noise and signal reflections can affect accuracy</li>
                <li><span className="warn-icon">&#x26A0;</span> Interference from other wireless devices may impact measurements</li>
                <li><span className="warn-icon">&#x26A0;</span> Performance decreases in highly dynamic or cluttered environments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="section-white" id="accomplishments">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Accomplishments</h2>
            <div className="accent-bar" />
          </div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Designed and implemented a multi-node RF sensing system using ESP32 microcontrollers</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Developed a CSI data acquisition pipeline to a Raspberry Pi processing unit</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Implemented signal preprocessing techniques for filtering and variance analysis</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Built a fully-functional prototype capable of detecting human-induced signal disturbances</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Created a real-time visualization interface to display detection results</p></div>

          <div className="section-heading" style={{marginTop: '56px'}}>
            <h2>Significance</h2>
            <div className="accent-bar" />
          </div>
          <div className="goal-card"><div className="goal-icon" style={{background: 'rgba(255,103,0,0.1)'}}>&#x25CF;</div><p>Demonstrates the feasibility of using wireless CSI measurements for human detection in obstructed environments</p></div>
          <div className="goal-card"><div className="goal-icon" style={{background: 'rgba(255,103,0,0.1)'}}>&#x25CF;</div><p>Provides a non-contact sensing method that does not require wearable devices or line-of-sight visibility</p></div>
          <div className="goal-card"><div className="goal-icon" style={{background: 'rgba(255,103,0,0.1)'}}>&#x25CF;</div><p>Utilizes low-cost (&lt;$450) and widely available Wi-Fi hardware, making the system scalable and portable</p></div>
          <div className="goal-card"><div className="goal-icon" style={{background: 'rgba(255,103,0,0.1)'}}>&#x25CF;</div><p>Shows strong potential for search and rescue applications where victims may be hidden beneath debris or structural barriers</p></div>
          <div className="goal-card"><div className="goal-icon" style={{background: 'rgba(255,103,0,0.1)'}}>&#x25CF;</div><p>Establishes a foundation for future improvements such as enhanced localization accuracy, expanded sensing networks, and 3D mapping capabilities</p></div>
        </div>
      </section>
    </div>
  )
}
