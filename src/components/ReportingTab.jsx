import { useState } from 'react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { KPI_DATA, PLATFORM_COLORS, PLATFORM_ICONS } from '../data/clientData';
import { Card, SectionHeader, StatCard, T } from './ui';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: T.dark, border: `1px solid ${T.border}`, borderRadius: '10px',
      padding: '12px 16px', fontSize: '12px',
    }}>
      <div style={{ fontWeight: 700, marginBottom: '6px' }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color, display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
          <span style={{ color: T.textDim }}>{p.name}</span>
          <span style={{ fontWeight: 700 }}>
            {typeof p.value === 'number' && p.value > 100 ? p.value.toLocaleString() : p.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ReportingTab() {
  const [platform, setPlatform] = useState('Facebook');
  const data = KPI_DATA[platform];
  const color = PLATFORM_COLORS[platform];

  return (
    <div className="fade-in">
      <SectionHeader
        label="Analytics & Reporting"
        title="Platform Performance"
        subtitle="Real-time KPIs across all your active platforms. Select a platform to dive deeper."
      />

      {/* Platform Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
        {Object.keys(PLATFORM_COLORS).map(p => (
          <button
            key={p}
            onClick={() => setPlatform(p)}
            style={{
              padding: '10px 18px',
              borderRadius: '10px',
              border: platform === p ? `2px solid ${PLATFORM_COLORS[p]}` : `1px solid ${T.border}`,
              background: platform === p ? `${PLATFORM_COLORS[p]}15` : 'transparent',
              color: platform === p ? PLATFORM_COLORS[p] : T.textDim,
              fontWeight: platform === p ? 700 : 500,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'inherit',
            }}
          >
            <span style={{ fontWeight: 900, fontSize: '14px' }}>{PLATFORM_ICONS[p]}</span> {p}
          </button>
        ))}
      </div>

      {/* KPI Overview */}
      <div className="grid-4 stagger" style={{ gap: '14px', marginBottom: '24px' }}>
        <StatCard label="Followers" value={data.followers} growth={data.followerGrowth} />
        <StatCard label="Total Reach" value={data.reach} />
        <StatCard label="Engagement Rate" value={data.engagement} suffix="%" />
        <StatCard label="Impressions" value={data.impressions} />
      </div>

      {/* Charts */}
      <div className="grid-2" style={{ gap: '20px', marginBottom: '24px' }}>
        <Card>
          <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>Reach Over Time</div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={data.monthly}>
              <defs>
                <linearGradient id={`grad-${platform}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fill: T.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: T.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="reach" stroke={color} strokeWidth={2.5} fill={`url(#grad-${platform})`} name="Reach" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>Engagement Rate (%)</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data.monthly}>
              <XAxis dataKey="month" tick={{ fill: T.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: T.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="engagement" fill={color} radius={[6, 6, 0, 0]} name="Eng. Rate" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Top Posts */}
      <Card style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Top Performing Content</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {data.topPosts.map((post, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 16px',
              borderRadius: '10px', background: 'rgba(0,0,0,0.15)', border: `1px solid ${T.border}30`,
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: `${color}20`, color: color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '16px',
              }}>
                {i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{post.title}</div>
                <div style={{ fontSize: '12px', color: T.textMuted }}>{post.type}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>
                  {post.reach.toLocaleString()} <span style={{ fontSize: '11px', color: T.textMuted }}>reach</span>
                </div>
                <div style={{ fontSize: '12px', color: T.success, fontWeight: 600 }}>{post.eng}% eng.</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* KPI Glossary */}
      <Card>
        <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>📖 KPI Glossary</div>
        <div className="grid-2" style={{ gap: '12px' }}>
          {[
            { term: 'Reach', def: 'Unique accounts that saw your content' },
            { term: 'Impressions', def: 'Total times content was displayed (includes repeats)' },
            { term: 'Engagement Rate', def: 'Interactions (likes, comments, shares, saves) ÷ reach × 100' },
            { term: 'Click-Through Rate', def: 'Link clicks ÷ impressions × 100' },
            { term: 'Follower Growth', def: 'Net new followers over the reporting period' },
            { term: 'Video Views', def: '3+ seconds watched (varies by platform)' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '10px 0', borderBottom: `1px solid ${T.border}20` }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: T.teal }}>{item.term}: </span>
              <span style={{ fontSize: '13px', color: T.textDim }}>{item.def}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
