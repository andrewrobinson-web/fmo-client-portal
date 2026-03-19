import { CLIENT } from '../data/clientData';
import { Card, PackageBadge, SectionHeader, Badge, T } from './ui';

export default function CommunicationTab() {
  return (
    <div className="fade-in">
      <SectionHeader
        label="Communication"
        title="How We Work Together"
        subtitle="Clear expectations on response times, meeting cadence, and how to reach us when you need something."
      />

      {/* Response Times */}
      <div className="grid-3 stagger" style={{ gap: '16px', marginBottom: '28px' }}>
        {[
          { tier: 'Gold', time: '24 hours', color: T.gold },
          { tier: 'Emerald', time: '12 hours', color: T.emerald },
          { tier: 'Diamond', time: '4 hours', color: T.diamond },
        ].map((t, i) => (
          <Card
            key={i}
            style={{
              textAlign: 'center',
              borderColor: t.tier === CLIENT.package ? `${t.color}60` : T.border,
              background: t.tier === CLIENT.package ? `${t.color}08` : T.card,
              position: 'relative',
            }}
          >
            {t.tier === CLIENT.package && (
              <div style={{
                position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                background: t.color, color: T.navy, fontSize: '10px', fontWeight: 800,
                padding: '2px 12px', borderRadius: '0 0 8px 8px', letterSpacing: '1px',
              }}>YOUR TIER</div>
            )}
            <PackageBadge tier={t.tier} />
            <div style={{ fontSize: '32px', fontWeight: 800, margin: '12px 0 4px', color: t.color }}>
              {t.time}
            </div>
            <div style={{ fontSize: '12px', color: T.textMuted }}>Response Window</div>
          </Card>
        ))}
      </div>

      {/* Meeting Cadence */}
      <Card style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>📅 Meeting Cadence</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            {
              type: 'Strategy Call',
              freq: CLIENT.package === 'Diamond' ? 'Weekly' : CLIENT.package === 'Emerald' ? 'Bi-weekly' : 'Monthly',
              dur: CLIENT.package === 'Diamond' ? '45 min' : '30 min',
              desc: 'Review performance, plan upcoming content, discuss goals',
            },
            { type: 'Content Review', freq: 'As needed', dur: '15 min', desc: 'Walk through pending content for approval' },
            { type: 'Quarterly Review', freq: 'Every 3 months', dur: '60 min', desc: 'Deep dive into results, strategy pivot discussion, goal setting' },
          ].map((m, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
              borderRadius: '12px', background: 'rgba(0,0,0,0.15)', border: `1px solid ${T.border}30`,
            }}>
              <div style={{ minWidth: '100px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>{m.type}</div>
                <div style={{ fontSize: '12px', color: T.textMuted }}>{m.dur}</div>
              </div>
              <div style={{ flex: 1, fontSize: '13px', color: T.textDim }}>{m.desc}</div>
              <Badge color={T.teal}>{m.freq}</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Escalation Path */}
      <Card style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>🔺 Escalation Path</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {[
            { step: '1', label: 'Your AM', detail: CLIENT.am.name, color: T.teal },
            { step: '2', label: 'Client Services', detail: 'Jess Rothermel', color: T.warning },
            { step: '3', label: 'Operations', detail: 'Rebecca — VP', color: T.danger },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%', margin: '0 auto 8px',
                  background: `${s.color}20`, border: `2px solid ${s.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: 800, color: s.color,
                }}>{s.step}</div>
                <div style={{ fontSize: '13px', fontWeight: 700 }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: T.textMuted }}>{s.detail}</div>
              </div>
              {i < 2 && (
                <div style={{
                  width: '60px', height: '2px',
                  background: `linear-gradient(90deg, ${s.color}40, ${[T.warning, T.danger][i]}40)`,
                }} />
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Business Hours */}
      <Card style={{ background: `linear-gradient(135deg, ${T.card} 0%, #1a2744 100%)` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>🕐 Business Hours</div>
            <div style={{ fontSize: '13px', color: T.textDim }}>Monday – Friday, 9:00 AM – 6:00 PM ET</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '13px', color: T.textDim }}>Emergency requests</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: T.danger }}>Diamond clients only — 24/48hr turnaround</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
