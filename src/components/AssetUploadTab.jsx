import { useState, useRef } from 'react';
import { Card, SectionHeader, Badge, T } from './ui';

export default function AssetUploadTab() {
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const [notes, setNotes] = useState('');
  const fileInput = useRef(null);

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).map(f => ({
      name: f.name,
      size: (f.size / 1024 / 1024).toFixed(2) + ' MB',
      type: f.type.split('/')[1]?.toUpperCase() || 'FILE',
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  return (
    <div className="fade-in">
      <SectionHeader
        label="Asset Upload"
        title="Submit Your Files"
        subtitle="Upload brand assets, photos, videos, logos, and credentials securely. Your AM will be notified automatically."
      />

      {/* Drop Zone */}
      <div
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => fileInput.current?.click()}
        style={{
          background: dragOver ? `${T.teal}08` : 'rgba(30,41,59,0.3)',
          borderRadius: '16px',
          border: `2px dashed ${dragOver ? T.teal : T.border}`,
          textAlign: 'center',
          padding: '60px 40px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          marginBottom: '20px',
        }}
      >
        <input
          ref={fileInput}
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={e => handleFiles(e.target.files)}
        />
        <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.6 }}>📁</div>
        <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
          {dragOver ? 'Drop files here' : 'Drag & drop files here'}
        </div>
        <div style={{ fontSize: '13px', color: T.textMuted, marginBottom: '16px' }}>or click to browse</div>
        <div style={{ fontSize: '11px', color: T.textMuted }}>
          Accepts images, videos, documents, and ZIP files up to 500MB
        </div>
      </div>

      {/* Queued Files */}
      {files.length > 0 && (
        <Card style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>
            Queued Files ({files.length})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {files.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 16px', borderRadius: '10px', background: 'rgba(0,0,0,0.15)',
                border: `1px solid ${T.border}30`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Badge color={T.teal}>{f.type}</Badge>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{f.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '12px', color: T.textMuted }}>{f.size}</span>
                  <button
                    onClick={e => { e.stopPropagation(); setFiles(prev => prev.filter((_, j) => j !== i)); }}
                    style={{
                      background: 'none', border: 'none', color: T.danger,
                      cursor: 'pointer', fontSize: '16px', padding: '4px',
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Notes */}
      <Card style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>Notes for Your AM</div>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Add any context about these files — what they're for, how to use them, any preferences..."
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '14px',
            borderRadius: '10px',
            border: `1px solid ${T.border}`,
            background: 'rgba(0,0,0,0.2)',
            color: T.text,
            fontSize: '14px',
            fontFamily: 'inherit',
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={e => (e.target.style.borderColor = T.teal)}
          onBlur={e => (e.target.style.borderColor = T.border)}
        />
      </Card>

      {/* Submit */}
      <button
        disabled={files.length === 0}
        style={{
          padding: '16px 40px',
          borderRadius: '12px',
          border: 'none',
          background: `linear-gradient(135deg, ${T.teal}, #0EA5E9)`,
          color: T.navy,
          fontSize: '15px',
          fontWeight: 800,
          cursor: files.length === 0 ? 'not-allowed' : 'pointer',
          fontFamily: 'inherit',
          transition: 'all 0.2s ease',
          opacity: files.length === 0 ? 0.4 : 1,
          marginBottom: '24px',
        }}
      >
        Submit {files.length > 0 ? `${files.length} File${files.length > 1 ? 's' : ''}` : 'Files'}
      </button>

      {/* File Requirements */}
      <Card>
        <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>📋 File Requirements</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[
            { type: 'Photos', req: 'JPG/PNG, min 1080×1080, max 50MB' },
            { type: 'Videos', req: 'MP4/MOV, max 500MB, 1080p preferred' },
            { type: 'Logos', req: 'SVG/PNG with transparent background' },
            { type: 'Documents', req: 'PDF/DOCX, max 25MB' },
            { type: 'Brand Guidelines', req: 'PDF preferred, any format accepted' },
            { type: 'Login Credentials', req: 'Use the secure form below (never email)' },
          ].map((r, i) => (
            <div key={i} style={{ padding: '10px 0', borderBottom: `1px solid ${T.border}20` }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: T.teal }}>{r.type}: </span>
              <span style={{ fontSize: '13px', color: T.textDim }}>{r.req}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
