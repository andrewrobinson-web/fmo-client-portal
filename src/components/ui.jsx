import { useState, useEffect } from 'react';

// ─── DESIGN TOKENS (inline for portability) ──────────────────────────────────

export const T = {
  teal: '#2DD4BF',
  navy: '#0B1120',
  dark: '#0F172A',
  card: '#1E293B',
  cardHover: '#263548',
  border: '#334155',
  text: '#F8FAFC',
  textDim: '#94A3B8',
  textMuted: '#64748B',
  gold: '#F59E0B',
  emerald: '#10B981',
  diamond: '#6366F1',
  success: '#10B981', // intentionally same hex as emerald — different semantic role
  warning: '#F59E0B',
  danger: '#EF4444',
};

export const TIER_COLORS = {
  Gold: T.gold,
  Emerald: T.emerald,
  Diamond: T.diamond,
};

// ─── ANIMATED NUMBER ─────────────────────────────────────────────────────────

export function AnimatedNumber({ value, suffix = '' }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const end = typeof value === 'number' ? value : parseFloat(value);
    const duration = 800;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(end * eased);
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  const formatted =
    typeof value === 'number' && value > 100
      ? Math.round(display).toLocaleString()
      : display.toFixed(1);

  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

// ─── PACKAGE BADGE ───────────────────────────────────────────────────────────

export function PackageBadge({ tier }) {
  const color = TIER_COLORS[tier] || T.teal;
  const icon = tier === 'Diamond' ? '◆' : tier === 'Emerald' ? '●' : '★';
  return <Badge color={color}>{icon} {tier}</Badge>;
}

// ─── BADGE ───────────────────────────────────────────────────────────────────

export function Badge({ color, children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 10px',
        borderRadius: '100px',
        fontSize: '12px',
        fontWeight: 700,
        background: `${color}18`,
        color: color,
      }}
    >
      {children}
    </span>
  );
}

// ─── CARD ────────────────────────────────────────────────────────────────────

export function Card({ children, style = {}, hoverable = false, ...props }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: T.card,
        borderRadius: '16px',
        border: `1px solid ${hovered && hoverable ? T.teal : T.border}`,
        padding: '28px',
        transition: 'all 0.2s ease',
        transform: hovered && hoverable ? 'translateY(-2px)' : 'none',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────

export function SectionHeader({ label, title, subtitle }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <div
        style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: T.teal,
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 800,
          letterSpacing: '-0.5px',
          marginBottom: '8px',
          color: T.text,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: '15px', color: T.textDim, lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── STAT CARD ───────────────────────────────────────────────────────────────

export function StatCard({ label, value, suffix, growth }) {
  return (
    <div
      style={{
        background: T.card,
        borderRadius: '14px',
        border: `1px solid ${T.border}`,
        padding: '20px 24px',
        flex: 1,
        minWidth: '160px',
      }}
    >
      <div
        style={{
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: T.textMuted,
          marginBottom: '4px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: '32px',
          fontWeight: 800,
          letterSpacing: '-1px',
          color: T.text,
        }}
      >
        <AnimatedNumber value={value} suffix={suffix || ''} />
      </div>
      {growth && <Badge color={T.success}>▲ {growth}%</Badge>}
    </div>
  );
}
