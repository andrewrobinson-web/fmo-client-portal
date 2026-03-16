import { useState } from 'react';
import { FAQ_DATA, TURNAROUND } from '../data/clientData';
import { Card, Badge, SectionHeader, T } from './ui';

export default function ResourcesTab() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Content', 'Reporting', 'Assets', 'Account', 'Support'];

  const filtered = FAQ_DATA.filter(f => {
    const matchCat = activeCategory === 'All' || f.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="fade-in">
      <SectionHeader
        label="Resources & FAQ"
        title="Frequently Asked Questions"
        subtitle="Quick answers to the most common questions. Can't find what you need? Reach out to your AM."
      />

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 20px 14px 48px',
            borderRadius: '12px',
            border: `1px solid ${T.border}`,
            background: T.card,
            color: T.text,
            fontSize: '14px',
            outline: 'none',
            fontFamily: 'inherit',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={e => (e.target.style.borderColor = T.teal)}
          onBlur={e => (e.target.style.borderColor = T.border)}
        />
        <span style={{
          position: 'absolute', left: '18px', top: '50%',
          transform: 'translateY(-50%)', fontSize: '18px', color: T.textMuted,
        }}>
          🔍
        </span>
      </div>

      {/* Category Filters */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: activeCategory === c ? `1px solid ${T.teal}` : `1px solid ${T.border}`,
              background: activeCategory === c ? `${T.teal}15` : 'transparent',
              color: activeCategory === c ? T.teal : T.textDim,
              fontWeight: 600,
              fontSize: '12px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.15s ease',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '36px' }}>
        {filtered.map((faq, i) => (
          <div
            key={i}
            style={{
              background: T.card,
              borderRadius: '16px',
              border: `1px solid ${openFAQ === i ? `${T.teal}40` : T.border}`,
              cursor: 'pointer',
              transition: 'border-color 0.2s ease',
              overflow: 'hidden',
            }}
            onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
          >
            <div style={{
              padding: '18px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Badge color={T.teal}>{faq.category}</Badge>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>{faq.q}</span>
              </div>
              <span style={{
                fontSize: '18px',
                color: T.textMuted,
                transition: 'transform 0.2s ease',
                transform: openFAQ === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }}>
                ▾
              </span>
            </div>
            {openFAQ === i && (
              <div style={{
                padding: '0 24px 18px 24px',
                fontSize: '14px',
                color: T.textDim,
                lineHeight: 1.7,
                borderTop: `1px solid ${T.border}30`,
                paddingTop: '16px',
              }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: T.textMuted, fontSize: '14px' }}>
            No matching questions found. Try a different search term or category.
          </div>
        )}
      </div>

      {/* Turnaround Guide */}
      <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: T.teal, marginBottom: '12px' }}>
        Turnaround Time Guide
      </div>
      <Card style={{ overflow: 'hidden', padding: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
              <th style={{
                padding: '14px 24px', textAlign: 'left', fontSize: '11px', fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase', color: T.textMuted, background: 'rgba(0,0,0,0.2)',
              }}>Task</th>
              <th style={{
                padding: '14px 24px', textAlign: 'right', fontSize: '11px', fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase', color: T.textMuted, background: 'rgba(0,0,0,0.2)',
              }}>Expected Turnaround</th>
            </tr>
          </thead>
          <tbody>
            {TURNAROUND.map((t, i) => (
              <tr key={i} style={{ borderBottom: i < TURNAROUND.length - 1 ? `1px solid ${T.border}20` : 'none' }}>
                <td style={{ padding: '14px 24px', fontSize: '14px', fontWeight: 500 }}>{t.task}</td>
                <td style={{ padding: '14px 24px', fontSize: '14px', fontWeight: 700, color: T.teal, textAlign: 'right' }}>
                  {t.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
