
export default function Home(){
  return(
    <div className="container">
      <h1>Machine Learning Optimized Search & Rescue System</h1>
      <h2>Using Channel State Information (CSI)</h2>

      <p>
      Search and rescue missions often require detecting individuals trapped behind
      debris or walls. This project uses wireless Channel State Information (CSI)
      collected from WiFi signals to detect human presence without cameras
      or line‑of‑sight sensors.
      </p>

      <p>
      By analyzing changes in signal propagation with machine learning,
      the system can identify human motion and display results as a
      2D heatmap representing possible survivor locations.
      </p>
    </div>
  )
}
