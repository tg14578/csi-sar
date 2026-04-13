
const teamMembers = [
  { name: 'Tamera Gilmore', initials: 'TG', role: 'Team Lead / Hardware Lead', program: 'Electrical and Computer Engineering', email: 'tg14578@georgiasouthern.edu', bg: '#004e98', text: '#ebebeb' },
  { name: 'Jack Jones', initials: 'JJ', role: 'Software Lead', program: 'Computer Engineering', email: 'jj25347@georgiasouthern.edu', bg: '#ff6700', text: '#ffffff' },
  { name: 'Cole Freeman', initials: 'CF', role: 'Debugging Lead', program: 'Computer Engineering', email: 'pf06373@georgiasouthern.edu', bg: '#3a6ea5', text: '#ffffff' },
  { name: 'Bryan Bosely', initials: 'BB', role: 'Antenna Lead / CAD Designer', program: 'Electrical Engineering', email: 'bb28359@georgiasouthern.edu', bg: '#c0c0c0', text: '#004e98' },
];

export default function Team(){
  return(
    <div>
      {/* Hero banner */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <h1>Meet the Team</h1>
          <p>The people behind the CSI Search and Rescue System.</p>
          <div className="accent-bar" />
        </div>
      </div>

      {/* Team members */}
      <section className="section-white">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Team Members</h2>
            <div className="accent-bar" />
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-avatar" style={{background: member.bg, color: member.text}}>
                  {member.initials}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-program">{member.program}</p>
                <p className="team-dept">Dept. of Electrical and Computer Engineering</p>
                <p style={{fontSize: '9pt', color: 'var(--cerulean)', margin: '8px 0 0'}}>{member.email}</p>
                <div className="team-contact">
                  <a href={`mailto:${member.email}`}>
                    &#x2709; Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Mentor */}
      <section className="section-gray">
        <div className="section-inner">
          <div className="section-heading" style={{textAlign: 'center'}}>
            <h2>Faculty Mentor</h2>
            <div className="accent-bar" style={{margin: '16px auto 0'}} />
          </div>

          <div className="mentor-card">
            <div className="mentor-avatar">
              &#x1F393;
            </div>
            <h3>Dr. Seungmo Kim</h3>
            <p className="mentor-title">Faculty Mentor</p>
            <p className="mentor-dept">Dept. of Electrical and Computer Engineering</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-white">
        <div className="section-inner" style={{textAlign: 'center'}}>
          <div className="section-heading" style={{textAlign: 'center'}}>
            <h2>Get in Touch</h2>
            <p style={{margin: '0 auto'}}>Have questions about our project? We&apos;d love to hear from you.</p>
            <div className="accent-bar" style={{margin: '16px auto 0'}} />
          </div>
          <div className="contact-box">
            <p><strong>Department:</strong> Electrical and Computer Engineering</p>
            <p><strong>Faculty Mentor:</strong> Dr. Seungmo Kim</p>
            <p className="contact-note">For inquiries, please reach out to any team member via email.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
