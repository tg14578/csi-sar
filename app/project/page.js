
export default function Project(){
  return(
    <div className="container">
      <h1>System Implementation</h1>

      <h3>Wireless Sensing Nodes</h3>
      <p>
      ESP32 microcontrollers collect CSI measurements from WiFi signals.
      </p>

      <h3>Processing Unit</h3>
      <p>
      A Raspberry Pi performs signal processing and machine learning
      classification to identify human motion.
      </p>

      <h3>Visualization</h3>
      <p>
      Processed results are displayed as a heatmap showing the location
      of detected human presence.
      </p>
    </div>
  )
}
