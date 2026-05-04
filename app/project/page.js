
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
          <a href="#demonstration">Demonstration</a>
          <a href="#methodology">Methodology</a>
          <a href="#implementation">Implementation</a>
          <a href="#results">Results</a>
          <a href="#failed-works">Failed Works</a>
          <a href="#discussion">Discussion</a>
          <a href="#accomplishments">Accomplishments</a>
          <a href="#significance">Significance</a>
          <a href="#future-work">Future Work</a>
        </div>
      </div>

      {/* Demonstration */}
      <section className="section-white" id="demonstration">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Demonstration</h2>
            <p>A demonstration of the CSI Search and Rescue System.</p>
            <div className="accent-bar" />
          </div>
          <div className="figure">
            <div style={{
              width: '100%',
              aspectRatio: '16 / 9',
              maxWidth: '800px',
              margin: '0 auto',
              background: 'var(--platinum)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cerulean)',
              fontSize: '11pt',
              borderRadius: '8px',
              gap: '12px'
            }}>
              <span style={{fontSize: '48px'}}>&#x25B6;</span>
              <span>Video Coming Soon (3:00)</span>
            </div>
          </div>
        </div>
      </section>

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
              <h4>Perimeter Sensing Nodes (4&times; ESP32-S3)</h4>
              <ul className="detail-list">
                <li><span className="bullet-dot" /> Four ESP32-S3 microcontrollers are placed at the corners of the sensing area (Q1=NW, Q2=NE, Q3=SW, Q4=SE), each acting as both a CSI transmitter and a receiver</li>
                <li><span className="bullet-dot" /> Each node is equipped with an external 2.4 GHz Wi-Fi antenna for improved signal range and link reliability</li>
                <li><span className="bullet-dot" /> Nodes capture Channel State Information (CSI) from wireless packets at the PHY (physical) layer in promiscuous mode, with a peer-MAC whitelist to reject foreign traffic</li>
                <li><span className="bullet-dot" /> A 24-byte unicast Null Data Packet (NDP) is injected at 20 Hz to every other perimeter to give the receivers a deterministic CSI stimulus</li>
                <li><span className="bullet-dot" /> Optional on-device edge DSP performs phase extraction, unwrapping, Welford variance tracking, and breathing-band IIR filtering on a dedicated CPU core</li>
                <li><span className="bullet-dot" /> A software watchdog monitors the UDP send-success counter and self-recovers (Wi-Fi reconnect, then reboot) on prolonged silence</li>
                <li><span className="bullet-dot" /> Each sensing node is powered by a rechargeable LiPo battery for portable, wireless field deployment</li>
              </ul>

              <h4>Coordinator Node (1&times; ESP32-S3)</h4>
              <ul className="detail-list">
                <li><span className="bullet-dot" /> A dedicated ESP32-S3 runs in SoftAP mode (SSID <code>CSI_NET_V2</code>, OPEN auth, HT40, Channel 1), creating a local Wi-Fi network for the four perimeter nodes</li>
                <li><span className="bullet-dot" /> Receives raw I/Q frames from every perimeter on UDP port 4210 and re-broadcasts them to the host laptop / Raspberry Pi</li>
                <li><span className="bullet-dot" /> Selectable output: USB-only (COBS-encoded over USB-Serial/JTAG), Wi-Fi-only (raw UDP to operator hotspot), or both simultaneously for redundancy</li>
                <li><span className="bullet-dot" /> Logs throughput, drop, and lwIP MEMERR counters every 30 seconds for field diagnostics</li>
              </ul>

              <h4>Host Processing Unit (Laptop or Raspberry Pi)</h4>
              <ul className="detail-list">
                <li><span className="bullet-dot" /> Runs the Python <code>deterministic_detector</code> pipeline that aggregates per-link CSI, applies SVD drift cancellation, and runs breathing-band Welch periodograms</li>
                <li><span className="bullet-dot" /> Performs soft endpoint attribution across all six links and feeds an HMM forward filter that emits the lit quadrant once per second</li>
                <li><span className="bullet-dot" /> Drives a full-screen Pygame visualization showing the lit quadrant, continuous (x,&nbsp;y) body marker, per-link health bars, and reset diagnostics</li>
                <li><span className="bullet-dot" /> Portable operation via USB power bank for field deployment without wall power</li>
              </ul>

              <h4>System Cost</h4>
              <p className="body-text">
                Total system cost is under $450 using off-the-shelf components, making it accessible for emergency response teams and scalable for larger deployments.
              </p>

              <div className="arch-diagram" style={{marginTop: '24px'}}>
                <div className="arch-row">
                  <div className="arch-node">Node 2&nbsp;(NW)</div>
                  <div className="arch-node">Node 3&nbsp;(NE)</div>
                </div>
                <div className="arch-label">six bidirectional CSI links across the sensing area</div>
                <div className="arch-row">
                  <div className="arch-node">Node 1&nbsp;(SW)</div>
                  <div className="arch-node">Node 4&nbsp;(SE)</div>
                </div>
                <div className="arch-arrow">&#x25BC;&nbsp;UDP 4210 over SoftAP</div>
                <div className="arch-row">
                  <div className="arch-node coord">Coordinator (ESP32-S3 SoftAP)</div>
                </div>
                <div className="arch-arrow">&#x25BC;&nbsp;USB COBS&nbsp;/&nbsp;Wi-Fi UDP 4211</div>
                <div className="arch-row">
                  <div className="arch-node host">Host (Laptop / Raspberry Pi)</div>
                </div>
                <p className="figure-caption" style={{marginTop: '12px', background: 'transparent'}}>
                  Fig. 1. Five-board topology &mdash; four perimeter sensors, one coordinator, one host.
                </p>
              </div>
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
                Channel State Information captures the frequency response of the wireless channel across multiple OFDM (Orthogonal Frequency-Division Multiplexing) subcarriers. Each CSI measurement is delivered as a vector of int8 in-phase / quadrature (I/Q) pairs, one pair per subcarrier, encoding both the amplitude and phase of the channel response. The final firmware streams raw I/Q at roughly 50&nbsp;Hz per link so that all heavy frequency-domain analysis can run on the host.
              </p>

              <h4>Mathematical Framework</h4>
              <div className="math-block">
                <p><strong>CSI Representation:</strong></p>
                <p className="math-formula">H(f, t) = |H(f, t)| &middot; e<sup>j&theta;(f,t)</sup></p>
                <p className="math-desc">|H(f,t)| is the amplitude and &theta;(f,t) the phase for subcarrier frequency f at time t. Both are recovered from the I/Q pair via |H| = &radic;(I&sup2; + Q&sup2;) and &theta; = atan2(Q, I).</p>
              </div>

              <div className="math-block">
                <p><strong>SVD Drift Cancellation (CARM-style):</strong></p>
                <p className="math-formula">log&nbsp;|H| = U&nbsp;&Sigma;&nbsp;V<sup>T</sup>, &nbsp;&nbsp;&nbsp; H&#x0303; = U<sub>2:</sub>&nbsp;&Sigma;<sub>2:</sub>&nbsp;V<sup>T</sup><sub>2:</sub></p>
                <p className="math-desc">Working in the log-amplitude domain (where multiplicative drift becomes additive), the strongest temporal mode of the (packets &times; subcarriers) matrix is projected out. This removes slow thermal and ambient drift while preserving body-induced variation that is orthogonal to the common mode.</p>
              </div>

              <div className="math-block">
                <p><strong>Welch Periodogram &mdash; Breathing-Band Power Ratio:</strong></p>
                <p className="math-formula">r(f, L) = &Sigma;<sub>0.15&nbsp;&le;&nbsp;&fnof;&nbsp;&le;&nbsp;0.40&nbsp;Hz</sub> P<sub>L,f</sub>(&fnof;) &nbsp;/&nbsp; &Sigma;<sub>all&nbsp;&fnof;</sub> P<sub>L,f</sub>(&fnof;)</p>
                <p className="math-desc">Per link L and subcarrier f, P<sub>L,f</sub>(&fnof;) is the Welch power spectrum of the amplitude time series. A 90-second window yields ~0.011&nbsp;Hz frequency resolution, placing roughly 24 FFT bins inside the adult breathing band (12&ndash;24 breaths/min). The threshold r &gt; 0.10 marks a (link, subcarrier) pair as carrying a human-respiration signature.</p>
              </div>

              <div className="math-block">
                <p><strong>Soft Endpoint Attribution:</strong></p>
                <p className="math-formula">E<sub>n</sub> = &Sigma;<sub>L = (a, b), &nbsp;n &isin; &#123;a, b&#125;</sub> 0.5 &middot; w<sub>L</sub> &middot; s<sub>L</sub>, &nbsp;&nbsp; w<sub>L</sub> = &radic;(N<sub>L</sub> / N<sub>max</sub>)</p>
                <p className="math-desc">Each of the six links L = (a, b) contributes half of its signal score s<sub>L</sub> to each endpoint node. The reliability weight w<sub>L</sub> stabilizes Welch-periodogram variance (which scales as 1/N<sub>L</sub>) so that under-fed links are softly down-weighted rather than hard-rejected.</p>
              </div>

              <div className="math-block">
                <p><strong>HMM Forward Filter (Quadrant Smoother):</strong></p>
                <p className="math-formula">&alpha;<sub>t</sub>(q) = b<sub>q</sub>(E<sub>t</sub>) &middot; &Sigma;<sub>q&prime;</sub> a<sub>q&prime;,q</sub> &middot; &alpha;<sub>t-1</sub>(q&prime;), &nbsp;&nbsp; q&#x0302;<sub>t</sub> = argmax<sub>q</sub> &alpha;<sub>t</sub>(q)</p>
                <p className="math-desc">A 4-state Markov chain over &#123;Q1, Q2, Q3, Q4&#125; smooths the per-second node-energy vector. Transition probabilities a<sub>q&prime;,q</sub> favor wall-adjacent moves over diagonal jumps by a factor of four, encoding kinematic plausibility without per-room calibration.</p>
              </div>

              <h4>Processing Pipeline</h4>
              <ul className="detail-list">
                <li><span className="bullet-dot" /> <strong>Step 1:</strong> Each perimeter captures CSI in promiscuous mode with a peer-MAC whitelist; raw I/Q is serialized into a 0xC5110006 wire frame and sent over UDP at ~50&nbsp;Hz</li>
                <li><span className="bullet-dot" /> <strong>Step 2:</strong> The host accumulates packets into per-link buffers spanning a 6-second short window (variance gate) and a 90-second long window (Doppler/breathing analysis)</li>
                <li><span className="bullet-dot" /> <strong>Step 3:</strong> Hampel/MAD outlier rejection removes spikes; SVD drift cancellation projects out the dominant temporal mode in log-amplitude space</li>
                <li><span className="bullet-dot" /> <strong>Step 4:</strong> A Welch periodogram computes the spectral power ratio inside the 0.15&ndash;0.40&nbsp;Hz breathing band per (link, subcarrier)</li>
                <li><span className="bullet-dot" /> <strong>Step 5:</strong> Per-link signal scores are split 50/50 between the two endpoint nodes and weighted by the reliability factor &radic;(N<sub>L</sub> / N<sub>max</sub>)</li>
                <li><span className="bullet-dot" /> <strong>Step 6:</strong> An HMM forward filter with wall-adjacent kinematics emits the lit quadrant once per second; an optional 2D localizer converts wall-pair perturbation ratios into a continuous (x, y) position</li>
              </ul>

              <div className="figure" style={{marginTop: '24px'}}>
                <div style={{width: '100%', height: '200px', background: 'var(--platinum)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cerulean)', fontSize: '11pt'}}>
                  Signal Processing Pipeline Diagram &mdash; Coming Soon
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
                <li>Each perimeter ESP32 enters Wi-Fi promiscuous mode and registers a CSI receive callback. A peer-MAC whitelist filters frames so only the other three perimeters and the coordinator are processed.</li>
                <li>To guarantee a steady CSI stream, every perimeter injects a 24-byte unicast NDP (Null Data Packet) to each of its peers at 20&nbsp;Hz, producing a deterministic stimulus on top of background traffic.</li>
                <li>The CSI driver delivers raw I/Q samples (int8 pairs per subcarrier) through the callback. Each frame is wrapped in the project&apos;s 0xC5110001 / 0xC5110006 wire format together with the node ID, peer ID, channel, and a sequence number.</li>
                <li>A dedicated send task posts the frame over UDP port 4210 to the coordinator. The send-success counter is monitored by a software watchdog that triggers a soft Wi-Fi reconnect after 8&nbsp;s of silence and a hard reboot after two failed soft attempts.</li>
                <li>The coordinator runs as an open SoftAP on Channel 1 and bridges every received frame to the host. The output mode is configurable: COBS-encoded over USB-Serial/JTAG, raw UDP to an operator hotspot, or both simultaneously.</li>
                <li>On the host, the Python <code>frame_decoder</code> dispatches by magic number into typed records. The <code>deterministic_detector</code> aggregates 90 seconds of per-link history, applies SVD drift cancellation, and computes the Welch breathing-band power ratio per subcarrier.</li>
                <li>Per-link signal scores are split 50/50 between the two endpoint nodes, smoothed by a 4-state HMM, and rendered as the lit quadrant plus an optional continuous (x, y) body marker on a Pygame display.</li>
              </ol>

              <h4>Zone Detection &amp; Soft Attribution</h4>
              <p className="body-text">
                The sensing area is divided into four quadrants (Q1&ndash;Q4), one per perimeter node. Six bidirectional links connect the corners. Rather than thresholding a single link to a single quadrant, the detector uses <em>soft endpoint attribution</em>: each link contributes half of its signal score to each of its two endpoint nodes, weighted by a square-root reliability factor based on packet count. A body that perturbs only a single link still raises the score of both endpoints, which the HMM then resolves toward the quadrant that is most consistent with kinematic constraints (wall-adjacent transitions are four times more likely than diagonal jumps).
              </p>

              <h4>2D Localization (Optional)</h4>
              <p className="body-text">
                When the <code>--localize</code> flag is enabled, perpendicular wall-pair perturbations are converted into a continuous position via x = W &middot; E<sup>&alpha;</sup> / (W<sup>&alpha;</sup>&nbsp;+&nbsp;E<sup>&alpha;</sup>) and a symmetric expression for y, with &alpha;&nbsp;=&nbsp;1.5 sharpening the response near the corners. The result is rendered as an asterisk marker with a confidence ring overlaid on the room map.
              </p>

              <h4>Real-Time Visualization</h4>
              <p className="body-text">
                A full-screen Pygame interface highlights the lit quadrant, plots the body marker, draws per-link health bars (active fraction, starve warnings), and shows a diagnostic panel with the last reset reason and crash counter from each node. Pressing <kbd>R</kbd> resets the HMM state; <kbd>Q</kbd> or <kbd>Esc</kbd> exits.
              </p>

              <div className="figure" style={{marginTop: '24px'}}>
                <div style={{width: '100%', height: '200px', background: 'var(--platinum)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cerulean)', fontSize: '11pt'}}>
                  System Architecture Diagram &mdash; Coming Soon
                </div>
                <p className="figure-caption">
                  Fig. 3. System Architecture Block Diagram
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Implementation & Code */}
      <section className="section-white" id="implementation">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Implementation &amp; Code</h2>
            <p>Selected snippets from the firmware (ESP-IDF / C) and host pipeline (Python) that illustrate the most distinctive parts of the system.</p>
            <div className="accent-bar" />
          </div>

          {/* GitHub Repository */}
          <a
            href="https://github.com/jackjones1320/Project-Glass-House"
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
            style={{textDecoration: 'none'}}
          >
            <div className="repo-icon">&#x276E;/&#x276F;</div>
            <div>
              <h3>Source Code Repository</h3>
              <p>
                The complete firmware (ESP-IDF / C) and host pipeline (Python) are available on
                GitHub at github.com/jackjones1320/Project-Glass-House.
              </p>
            </div>
          </a>

          {/* Snippet 1: CSI Frame Serialization */}
          <div className="snippet-card">
            <div className="snippet-header">
              <p className="snippet-title">1. CSI Frame Serialization (Firmware)</p>
              <p className="snippet-path">firmware/perimeter/main/csi_collector.c</p>
            </div>
            <div className="snippet-explain">
              <strong>What it does:</strong> Converts a raw CSI callback from the ESP-IDF Wi-Fi driver into the project&apos;s 0xC5110001 wire frame. The 20-byte header packs the operating frequency, sequence number, RSSI, and subcarrier count; the payload is the raw int8 I/Q pairs ready for host-side FFT.
            </div>
            <pre className="snippet-code">{`size_t csi_serialize_frame(const wifi_csi_info_t *info,
                            uint8_t *buf, size_t buf_len)
{
    uint8_t  n_antennas    = 1;
    uint16_t iq_len        = (uint16_t)info->len;
    uint16_t n_subcarriers = iq_len / (2 * n_antennas);

    uint8_t  channel  = info->rx_ctrl.channel;
    uint32_t freq_mhz = (channel >= 1 && channel <= 13)
                        ? (2412 + (channel - 1) * 5) : 0;

    uint32_t magic = CSI_MAGIC;            /* 0xC5110001 */
    memcpy(&buf[0],  &magic, 4);
    buf[4] = g_nvs_config.node_id;
    buf[5] = n_antennas;
    memcpy(&buf[6],  &n_subcarriers, 2);
    memcpy(&buf[8],  &freq_mhz, 4);

    uint32_t seq = s_sequence++;
    memcpy(&buf[12], &seq, 4);
    buf[16] = (uint8_t)(int8_t)info->rx_ctrl.rssi;
    buf[17] = (uint8_t)(int8_t)info->rx_ctrl.noise_floor;

    memcpy(&buf[CSI_HEADER_SIZE], info->buf, iq_len);
    return CSI_HEADER_SIZE + iq_len;
}`}</pre>
          </div>

          {/* Snippet 2: NDP Frame Injection */}
          <div className="snippet-card">
            <div className="snippet-header">
              <p className="snippet-title">2. NDP Stimulus Injection (Firmware)</p>
              <p className="snippet-path">firmware/perimeter/main/csi_collector.c</p>
            </div>
            <div className="snippet-explain">
              <strong>Why it matters:</strong> A 24-byte unicast Null Data Packet sent to a known peer MAC tells the rate-control layer to use HT40 MCS rates, which is required for full-bandwidth CSI. Broadcasting at 20&nbsp;Hz to every other perimeter gives the receivers a deterministic CSI stimulus that does not depend on incidental traffic.
            </div>
            <pre className="snippet-code">{`esp_err_t csi_inject_ndp_frame_to(const uint8_t *peer_mac)
{
    uint8_t ndp_frame[24];
    memset(ndp_frame, 0, sizeof(ndp_frame));

    /* Frame Control: Data Null (0x0048) */
    ndp_frame[0] = 0x48;
    ndp_frame[1] = 0x00;

    /* Addr1: unicast to peer if provided, else broadcast */
    if (peer_mac != NULL) {
        memcpy(&ndp_frame[4], peer_mac, 6);
    } else {
        memset(&ndp_frame[4], 0xFF, 6);
    }

    /* Addr3 (BSSID): broadcast */
    memset(&ndp_frame[16], 0xFF, 6);

    return esp_wifi_80211_tx(WIFI_IF_STA, ndp_frame,
                             sizeof(ndp_frame), false);
}`}</pre>
          </div>

          {/* Snippet 3: Phase Extraction & Unwrapping */}
          <div className="snippet-card">
            <div className="snippet-header">
              <p className="snippet-title">3. Phase Extraction &amp; Unwrapping (Firmware DSP)</p>
              <p className="snippet-path">firmware/perimeter/main/edge_processing.c</p>
            </div>
            <div className="snippet-explain">
              <strong>Why it matters:</strong> Breathing modulates each subcarrier&apos;s phase at roughly 0.2&nbsp;Hz. Without continuous unwrapping, every 2&pi; wrap aliases that slow sinusoid into noise. This pair of inline functions keeps the phase trajectory monotonic so the breathing-band bandpass filter has something coherent to lock onto.
            </div>
            <pre className="snippet-code">{`static inline float extract_phase(const uint8_t *iq, uint16_t idx)
{
    int8_t i_val = (int8_t)iq[idx * 2];
    int8_t q_val = (int8_t)iq[idx * 2 + 1];
    return atan2f((float)q_val, (float)i_val);
}

static inline float unwrap_phase(float prev, float curr)
{
    float diff = curr - prev;
    if (diff >  M_PI) diff -= 2.0f * M_PI;
    else if (diff < -M_PI) diff += 2.0f * M_PI;
    return prev + diff;
}`}</pre>
          </div>

          {/* Snippet 4: Welch Periodogram */}
          <div className="snippet-card">
            <div className="snippet-header">
              <p className="snippet-title">4. Welch Periodogram &mdash; Breathing-Band Power Ratio (Host)</p>
              <p className="snippet-path">python/live/deterministic_detector.py</p>
            </div>
            <div className="snippet-explain">
              <strong>Why it matters:</strong> This is the deterministic core of the whole system. Static multipath shows up at 0&nbsp;Hz; breathing modulates the body&apos;s radar cross-section at 0.15&ndash;0.40&nbsp;Hz. A 90-second window gives ~24 FFT bins inside the breathing band, which is enough contrast that no machine learning, no per-room training, and no calibration are required.
            </div>
            <pre className="snippet-code">{`def per_link_doppler_power(window_records,
                           breathing_band=(0.15, 0.40),
                           min_packets=8,
                           min_duration_s=1.0,
                           detrend_order=2,
                           hampel_k=3.0,
                           use_hanning=True):
    """Per-(link, subcarrier) breathing-band spectral power ratio.

    Physics rationale:
      - Static multipath produces 0 Hz spectral content only.
      - Breathing modulates the body cross-section at ~0.2-0.33 Hz.
      - 6 s window  -> ~0.167 Hz FFT resolution (1-2 bins in band).
      - 90 s window -> ~0.011 Hz resolution (~24 bins in band).
      - Longer windows sharpen signal-vs-noise discrimination.
    """`}</pre>
          </div>

          {/* Snippet 5: Soft Endpoint Attribution + HMM */}
          <div className="snippet-card">
            <div className="snippet-header">
              <p className="snippet-title">5. Soft Endpoint Attribution (Host)</p>
              <p className="snippet-path">python/live/continuous_estimator.py</p>
            </div>
            <div className="snippet-explain">
              <strong>Why it matters:</strong> Hard quadrant assignments break when a link is starved or noisy. By splitting each link&apos;s score 50/50 between its two endpoints and weighting by a square-root reliability factor (which exactly stabilizes Welch periodogram variance), the HMM downstream can still resolve a quadrant even when only a subset of the six links are healthy.
            </div>
            <pre className="snippet-code">{`def continuous_node_estimator(per_link,
                              reliability_exp=0.5,
                              min_confidence=0.30):
    node_energy = {n: 0.0 for n in (1, 2, 3, 4)}
    if not per_link:
        return None, node_energy, 0.0

    pkt_counts = [per_link_n_packets(info) for info in per_link.values()]
    n_max = max(pkt_counts) if pkt_counts else 0

    for link, info in per_link.items():
        a, b = link
        n   = per_link_n_packets(info)
        rel = (n / n_max) ** reliability_exp
        s   = per_link_signal_score(info) * rel
        node_energy[a] += 0.5 * s
        node_energy[b] += 0.5 * s

    total = sum(node_energy.values())
    if total <= 0.0:
        return None, node_energy, 0.0

    best       = max(node_energy, key=node_energy.get)
    confidence = node_energy[best] / total
    if confidence < min_confidence:
        return None, node_energy, confidence
    return best, node_energy, confidence`}</pre>
          </div>

          {/* Snippet 6: Watchdog */}
          <div className="snippet-card">
            <div className="snippet-header">
              <p className="snippet-title">6. Software Watchdog &mdash; Self-Recovery (Firmware)</p>
              <p className="snippet-path">firmware/perimeter/main/send_watchdog.c</p>
            </div>
            <div className="snippet-explain">
              <strong>Why it matters:</strong> Field-deployed sensors must self-heal without operator intervention. The watchdog tracks the UDP send-success counter once per second; eight seconds of stagnation triggers a Wi-Fi reconnect, and two failed soft attempts trigger a hard reboot. Each node staggers its threshold by &plusmn;1&nbsp;s to avoid a four-station reassociation storm against the coordinator.
            </div>
            <pre className="snippet-code">{`static void watchdog_tick(void *arg)
{
    uint32_t now_send_ok = stream_sender_get_send_ok();

    /* Boot guard: don't arm until the first successful send. */
    if (!s_armed) {
        if (now_send_ok > 0) {
            s_armed = true;
            s_last_send_ok = now_send_ok;
        }
        return;
    }

    /* Counter advanced this tick - reset stall state. */
    if (now_send_ok > s_last_send_ok) {
        s_flat_seconds = 0;
        s_soft_attempts = 0;
        s_last_send_ok = now_send_ok;
        return;
    }

    /* Counter flat for another tick. */
    s_flat_seconds++;
    if (s_flat_seconds == s_stall_threshold) {
        ESP_LOGW(TAG, "stalled %lus: soft recovery #%u",
                 (unsigned long)s_flat_seconds,
                 (unsigned)(s_soft_attempts + 1));
        esp_wifi_disconnect();
    }
}`}</pre>
          </div>
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
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> Human breathing creates a detectable spectral signature in the 0.15&ndash;0.40&nbsp;Hz band of the CSI amplitude time series</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> Low-cost ESP32-S3 hardware can capture this signal at ~50&nbsp;Hz per link with no specialized RF front-end</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> A fully deterministic pipeline (Welch FFT + SVD drift cancellation + HMM smoother) is sufficient &mdash; no per-room calibration or training data is required</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> Soft endpoint attribution makes the detector resilient to starved or noisy individual links</li>
              <li><span style={{color: 'var(--orange)', flexShrink: 0}}>&#x2713;</span> System performance is influenced by environmental noise, multipath effects, and slow ambient drift (mitigated by SVD)</li>
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
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Designed and deployed a five-board ESP32-S3 mesh: four perimeter sensors at the room corners plus a SoftAP coordinator</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Built a complete CSI acquisition path with NDP stimulus injection, peer-MAC filtering, and a software watchdog that self-recovers on network silence</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Implemented a fully deterministic detector (SVD drift cancellation, breathing-band Welch periodogram, soft endpoint attribution, HMM smoother) with no training data</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Added optional 2D localization using wall-pair perturbation ratios for continuous (x,&nbsp;y) body tracking</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Built a full-screen Pygame visualization with quadrant lighting, body marker, per-link health bars, and per-node reset diagnostics</p></div>
          <div className="goal-card"><div className="goal-icon" style={{color: 'var(--orange)'}}>&#x2713;</div><p>Defined a typed wire-format family (CSI, IQ, telemetry, vitals, heartbeat, link-reporter) parsed by a single host-side decoder</p></div>

        </div>
      </section>

      {/* Significance */}
      <section className="section-gray" id="significance">
        <div className="section-inner">
          <div className="section-heading">
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

      {/* Future Work */}
      <section className="section-white" id="future-work">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Future Work</h2>
            <p>Planned improvements and research directions for the CSI Search and Rescue System.</p>
            <div className="accent-bar" />
          </div>
          <div className="goal-card"><div className="goal-icon">&#x2192;</div><p>Improve detection range beyond 15 meters by optimizing antenna placement and signal processing parameters</p></div>
          <div className="goal-card"><div className="goal-icon">&#x2192;</div><p>Reduce response time from 120 seconds toward the 30-second target through optimized processing pipelines and faster data aggregation</p></div>
          <div className="goal-card"><div className="goal-icon">&#x2192;</div><p>Expand the sensing network to support more nodes for finer-grained spatial resolution and larger coverage areas</p></div>
          <div className="goal-card"><div className="goal-icon">&#x2192;</div><p>Investigate 3D localization capabilities using multi-floor node arrangements for multi-story building scenarios</p></div>
          <div className="goal-card"><div className="goal-icon">&#x2192;</div><p>Conduct field testing in realistic disaster environments with debris, dust, and structural damage</p></div>
          <div className="goal-card"><div className="goal-icon">&#x2192;</div><p>Explore integration with existing emergency response communication systems and protocols</p></div>
        </div>
      </section>
    </div>
  )
}
