
import Link from 'next/link'

export default function Navbar(){
  return(
    <div className="nav">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/project">Project</Link>
      <Link href="/documents">Documents</Link>
      <Link href="/team">Team</Link>
    </div>
  )
}
