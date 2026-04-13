
import Link from 'next/link'

export default function Navbar(){
  return(
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <div className="nav-icon">&#x25C8;</div>
          <span>CSI Search &amp; Rescue</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/documents">Documents</Link>
          <Link href="/team">Team</Link>
        </div>
      </div>
    </nav>
  )
}
