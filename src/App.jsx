import { useState } from 'react';
import { CLIENT } from './data/clientData';
import { T } from './components/ui';
import ErrorBoundary from './components/ErrorBoundary';
import WelcomeTab from './components/WelcomeTab';
import DeliverablesTab from './components/DeliverablesTab';
import ReportingTab from './components/ReportingTab';
import CommunicationTab from './components/CommunicationTab';
import ResourcesTab from './components/ResourcesTab';
import AssetUploadTab from './components/AssetUploadTab';

const TABS = [
  { id: 'welcome', label: 'Welcome', icon: '🏠' },
  { id: 'deliverables', label: 'Deliverables', icon: '📋' },
  { id: 'reporting', label: 'Reporting', icon: '📊' },
  { id: 'communication', label: 'Communication', icon: '💬' },
  { id: 'resources', label: 'Resources', icon: '❓' },
  { id: 'upload', label: 'Asset Upload', icon: '📁' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('welcome');

  const renderTab = () => {
    switch (activeTab) {
      case 'welcome':       return <WelcomeTab onNavigate={setActiveTab} />;
      case 'deliverables':  return <DeliverablesTab />;
      case 'reporting':     return <ReportingTab />;
      case 'communication': return <CommunicationTab />;
      case 'resources':     return <ResourcesTab />;
      case 'upload':        return <AssetUploadTab />;
      default:              return <WelcomeTab onNavigate={setActiveTab} />;
    }
  };

  return (
    <div
      style={{
        background: `linear-gradient(180deg, ${T.navy} 0%, ${T.dark} 100%)`,
        minHeight: '100vh',
        color: T.text,
      }}
    >
      {/* ─── HEADER ───────────────────────────────────────────────────────── */}
      <header
        style={{
          padding: '24px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${T.border}`,
          backdropFilter: 'blur(20px)',
          background: 'rgba(11,17,32,0.85)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>FMO</span>
          <span style={{ fontWeight: 400, color: T.textDim }}>media</span>
          <span
            style={{
              color: T.teal,
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '4px 12px',
              border: `1px solid ${T.teal}40`,
              borderRadius: '100px',
            }}
          >
            Client Portal
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'right', marginRight: '12px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>{CLIENT.name}</div>
            <div style={{ fontSize: '11px', color: T.textMuted }}>{CLIENT.company}</div>
          </div>
          <div
            style={{
              width: '40px', height: '40px', borderRadius: '12px',
              background: `linear-gradient(135deg, ${T.teal}, #0EA5E9)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '15px', fontWeight: 800, color: T.navy,
            }}
          >
            {CLIENT.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </header>

      {/* ─── NAVIGATION ───────────────────────────────────────────────────── */}
      <div className="nav-wrapper" style={{ padding: '16px 40px 0', display: 'flex', justifyContent: 'center' }}>
        <nav
          role="tablist"
          aria-label="Portal sections"
          style={{
            display: 'flex',
            gap: '4px',
            padding: '4px',
            borderRadius: '14px',
            background: 'rgba(30,41,59,0.6)',
            border: `1px solid ${T.border}`,
          }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === tab.id ? T.teal : 'transparent',
                color: activeTab === tab.id ? T.navy : T.textDim,
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* ─── CONTENT ──────────────────────────────────────────────────────── */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px' }}>
        <ErrorBoundary key={activeTab}>
          {renderTab()}
        </ErrorBoundary>
      </main>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          padding: '24px 40px',
          borderTop: `1px solid ${T.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <div style={{ fontSize: '12px', color: T.textMuted }}>
          © 2026 FMO Media — Massapequa Park, NY
        </div>
        <div style={{ fontSize: '12px', color: T.textMuted }}>
          Need help? Contact <span style={{ color: T.teal }}>{CLIENT.am.email}</span>
        </div>
      </footer>
    </div>
  );
}
