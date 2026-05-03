
export default function Documents(){
  return(
    <div>
      {/* Hero banner */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <h1>Documents &amp; References</h1>
          <p>Important documents, publications, and references related to this project.</p>
          <div className="accent-bar" />
        </div>
      </div>

      {/* Documents */}
      <section className="section-white">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Project Documents</h2>
            <p>Key documents and deliverables from the project are listed below.</p>
            <div className="accent-bar" />
          </div>

          <div className="docs-grid">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x276E;/&#x276F;</div>
              <div>
                <h3>Source Code Repository <span className="badge-soon">Coming Soon</span></h3>
                <p>Complete firmware (ESP-IDF / C) and host pipeline (Python) on GitHub</p>
              </div>
            </a>
            <a href="https://docs.google.com/document/d/1lFY-GiSt1biiY5DBDqy2Rq7Xtk4BjK5_/edit?usp=drive_link&ouid=113625852303333448497&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Project Proposal</h3>
                <p>Initial project scope, goals, and timeline</p>
              </div>
            </a>
            <a href="https://docs.google.com/presentation/d/1YF6_Y1s7QaliNg1SS_vKjxZnIgh0xpLb/edit?usp=sharing&ouid=113625852303333448497&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Research Poster</h3>
                <p>Research poster for department showcase</p>
              </div>
            </a>
            <a href="https://docs.google.com/presentation/d/11l7VdAXhOc-jTKqMuDXCU43Rz068GhNM9zWigKU4qPE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Midterm Presentation</h3>
                <p>Milestone updates and preliminary results</p>
              </div>
            </a>
            <div className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Final Report <span className="badge-soon">Coming Soon</span></h3>
                <p>Complete project documentation and findings</p>
              </div>
            </div>
            <div className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Sustainability Report <span className="badge-soon">Coming Soon</span></h3>
                <p>Environmental and sustainability analysis</p>
              </div>
            </div>
            <div className="doc-card">
              <div className="doc-icon">&#x1F4D0;</div>
              <div>
                <h3>CAD Design — Central Unit <span className="badge-soon">Coming Soon</span></h3>
                <p>3D CAD model of the central processing unit enclosure</p>
              </div>
            </div>
            <div className="doc-card">
              <div className="doc-icon">&#x1F4D0;</div>
              <div>
                <h3>CAD Design — Sensing Node <span className="badge-soon">Coming Soon</span></h3>
                <p>3D CAD model of the ESP32 sensing node housing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="section-gray">
        <div className="section-inner">
          <div className="section-heading">
            <h2>References</h2>
            <div className="accent-bar" />
          </div>

          <div className="reference-card">
            <div className="ref-icon">&#x1F4D6;</div>
            <div>
              <p className="ref-number">[1]</p>
              <p className="ref-authors">
                C. Uysal and T. Filik, &ldquo;A new rf sensing framework for human detection through the wall,&rdquo;
              </p>
              <p className="ref-journal">
                IEEE Transactions on Vehicular Technology, vol. 72, no. 3, pp. 3600–3610, March 2023.
              </p>
            </div>
          </div>

          <div className="reference-card">
            <div className="ref-icon">&#x1F4D6;</div>
            <div>
              <p className="ref-number">[2]</p>
              <p className="ref-authors">
                N. Damodaran, E. Haruni, M. Kokhkharova et al., &ldquo;Device free human activity and fall recognition using wifi channel state information (csi),&rdquo;
              </p>
              <p className="ref-journal">
                CCF Transactions on Pervasive Computing and Interaction, vol. 2, p. 1–17, 2020.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
