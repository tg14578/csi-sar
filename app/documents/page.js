
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
            <a href="https://github.com/jackjones1320/Project-Glass-House" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x276E;/&#x276F;</div>
              <div>
                <h3>Source Code Repository</h3>
                <p>Complete firmware (ESP-IDF / C) and host pipeline (Python) on GitHub</p>
              </div>
            </a>
            <a href="/docs/W1_Initial_Project_Proposal.pdf" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Project Proposal</h3>
                <p>Initial project scope, goals, and timeline</p>
              </div>
            </a>
            <a href="/docs/W3_Research_Poster.pdf" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Research Poster</h3>
                <p>Research poster for department showcase</p>
              </div>
            </a>
            <a href="/docs/W2_Midterm_Presentation.pdf" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Midterm Presentation</h3>
                <p>Milestone updates and preliminary results</p>
              </div>
            </a>
            <a href="/docs/Project_Glasshouse_Final_Report.pdf" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Final Report</h3>
                <p>Complete project documentation and findings</p>
              </div>
            </a>
            <a href="/docs/W4_Group8_Sustainability_Report.pdf" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Sustainability Report</h3>
                <p>Environmental and sustainability analysis</p>
              </div>
            </a>
            <a href="/docs/Group8_Sustainability_Presentation.pptx.pdf" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4C4;</div>
              <div>
                <h3>Sustainability Presentation</h3>
                <p>Slide deck summarizing the sustainability analysis</p>
              </div>
            </a>
            <a href="https://github.com/jackjones1320/Project-Glass-House" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4D0;</div>
              <div>
                <h3>CAD Design — Central Unit</h3>
                <p>3D CAD model of the central processing unit enclosure (in GitHub repo)</p>
              </div>
            </a>
            <a href="https://github.com/jackjones1320/Project-Glass-House" target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-icon">&#x1F4D0;</div>
              <div>
                <h3>CAD Design — Sensing Node</h3>
                <p>3D CAD model of the ESP32 sensing node housing (in GitHub repo)</p>
              </div>
            </a>
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
