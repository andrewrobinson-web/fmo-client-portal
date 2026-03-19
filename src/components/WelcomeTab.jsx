import { CLIENT, PLATFORM_COLORS } from '../data/clientData';
import { Card, T } from './ui';

export default function WelcomeTab({ onNavigate }) {
  return (
    <div className="fade-in">
      <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: T.teal, marginBottom: '8px' }}>
        Welcome Back
      </div>
      <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
        Hello, {CLIENT.firstName} 👋
      </h2>
      <p style={{ fontSize: '15px', color: T.textDim, lineHeight: 1.6, marginBottom: '32px' }}>
        Here's your personalized portal for {CLIENT.company}. Everything you need — deliverables, reports, and resources — all in one place.
      </p>

      <div className="grid-2 stagger" style={{ gap: '20px', marginBottom: '28px' }}>
        {/* AM Card */}
        <Card style={{ background: `linear-gradient(135deg, ${T.card} 0%, #1a2744 100%)` }}>
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: T.teal, marginBottom: '16px' }}>
            Your Account Manager
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '14px',
              background: `linear-gradient(135deg, ${T.teal}, #0EA5E9)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', fontWeight: 800, color: T.navy,
            }}>
              {CLIENT.am.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700 }}>{CLIENT.am.name}</div>
              <div style={{ fontSize: '13px', color: T.textDim }}>{CLIENT.am.role}</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: T.textDim }}>
              <span style={{ color: T.teal }}>✉</span> {CLIENT.am.email}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: T.textDim }}>
              <span style={{ color: T.teal }}>☎</span> {CLIENT.am.phone}
            </div>
          </div>
        </Card>

        {/* Package Card */}
        <Card>
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: T.teal, marginBottom: '16px' }}>
            Your Package
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '24px',
            }}>◆</div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700 }}>{CLIENT.package} Package</div>
              <div style={{ fontSize: '13px', color: T.textDim }}>Client since {CLIENT.since}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
            {Object.keys(PLATFORM_COLORS).map(p => (
              <span key={p} style={{
                padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600,
                background: `${PLATFORM_COLORS[p]}20`, color: PLATFORM_COLORS[p],
              }}>{p}</span>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Links */}
      <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: T.teal, marginBottom: '12px' }}>
        Quick Links
      </div>
      <div className="grid-4 stagger" style={{ gap: '12px' }}>
        {[
          { icon: '📊', label: 'View Reports', desc: 'Latest analytics', tab: 'reporting' },
          { icon: '📋', label: 'Deliverables', desc: "What's included", tab: 'deliverables' },
          { icon: '📁', label: 'Upload Assets', desc: 'Submit files', tab: 'upload' },
          { icon: '💬', label: 'Contact AM', desc: 'Get in touch', tab: 'communication' },
        ].map((link, i) => (
          <Card key={i} hoverable style={{ textAlign: 'center', padding: '24px 16px', cursor: 'pointer' }} onClick={() => onNavigate(link.tab)}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>{link.icon}</div>
            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{link.label}</div>
            <div style={{ fontSize: '12px', color: T.textMuted }}>{link.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
