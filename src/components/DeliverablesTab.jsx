import { useState } from 'react';
import { CLIENT, DELIVERABLES, SLA } from '../data/clientData';
import { Card, PackageBadge, SectionHeader, T, TIER_COLORS } from './ui';

export default function DeliverablesTab() {
  const [selectedTier, setSelectedTier] = useState(CLIENT.package);
  const tiers = ['Gold', 'Emerald', 'Diamond'];

  return (
    <div className="fade-in">
      <SectionHeader
        label="Deliverables"
        title="What's Included"
        subtitle={`Your ${CLIENT.package} package deliverables at a glance. Compare tiers below.`}
      />

      {/* Tier Selector */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
        {tiers.map(t => (
          <button
            key={t}
            onClick={() => setSelectedTier(t)}
            style={{
              padding: '10px 18px',
              borderRadius: '10px',
              border: selectedTier === t ? `2px solid ${TIER_COLORS[t]}` : `1px solid ${T.border}`,
              background: selectedTier === t ? `${TIER_COLORS[t]}15` : 'transparent',
              color: selectedTier === t ? TIER_COLORS[t] : T.textDim,
              fontWeight: selectedTier === t ? 700 : 500,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'inherit',
            }}
          >
            <PackageBadge tier={t} /> {t}
            {t === CLIENT.package && (
              <span style={{ fontSize: '10px', opacity: 0.7 }}>(yours)</span>
            )}
          </button>
        ))}
      </div>

      {/* Deliverables Table */}
      <Card style={{ overflow: 'hidden', padding: 0, marginBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
              {['Deliverable', 'Quantity', 'Scope'].map(h => (
                <th
                  key={h}
                  style={{
                    padding: '14px 24px',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: T.textMuted,
                    background: 'rgba(0,0,0,0.2)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DELIVERABLES[selectedTier].map((d, i) => (
              <tr
                key={i}
                style={{
                  borderBottom:
                    i < DELIVERABLES[selectedTier].length - 1
                      ? `1px solid ${T.border}30`
                      : 'none',
                }}
              >
                <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600 }}>
                  {d.item}
                </td>
                <td style={{ padding: '16px 24px', fontSize: '14px', color: T.teal, fontWeight: 700 }}>
                  {d.qty}
                </td>
                <td style={{ padding: '16px 24px', fontSize: '13px', color: T.textDim }}>
                  {d.platforms}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* SLA */}
      <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: T.teal, marginBottom: '12px', marginTop: '32px' }}>
        Service Level Agreement
      </div>
      <div className="grid-3" style={{ gap: '16px' }}>
        {[
          { label: 'Response Time', value: SLA[selectedTier].response, icon: '⚡' },
          { label: 'Revision Turnaround', value: SLA[selectedTier].revision, icon: '🔄' },
          { label: 'Report Delivery', value: SLA[selectedTier].report, icon: '📊' },
        ].map((s, i) => (
          <Card key={i} style={{ textAlign: 'center', borderColor: `${TIER_COLORS[selectedTier]}30` }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: T.textMuted, marginBottom: '8px' }}>
              {s.label}
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: TIER_COLORS[selectedTier] }}>
              {s.value}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
