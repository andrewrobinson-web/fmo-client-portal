import { useState, useRef } from 'react';

const ACCEPTED_TYPES = new Set([
  'image/jpeg', 'image/png', 'image/svg+xml', 'image/gif', 'image/webp',
  'video/mp4', 'video/quicktime', 'video/webm',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/zip', 'application/x-zip-compressed',
]);
const MAX_SIZE_MB = 500;
import { Card, SectionHeader, Badge, T } from './ui';

export default function AssetUploadTab() {
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const [rejections, setRejections] = useState([]);
  const [notes, setNotes] = useState('');
  const [notesFocused, setNotesFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInput = useRef(null);

  const handleFiles = (fileList) => {
    const accepted = [];
    const rejected = [];

    Array.from(fileList).forEach(f => {
      const sizeMB = f.size / 1024 / 1024;
      if (!ACCEPTED_TYPES.has(f.type)) {
        rejected.push(`${f.name} — unsupported file type`);
      } else if (sizeMB > MAX_SIZE_MB) {
        rejected.push(`${f.name} — exceeds ${MAX_SIZE_MB}MB limit`);
      } else {
        accepted.push({
          name: f.name,
          size: sizeMB.toFixed(2) + ' MB',
          type: f.type.split('/')[1]?.toUpperCase() || 'FILE',
        });
      }
    });

    setFiles(prev => [...prev, ...accepted]);
    setRejections(rejected);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    // TODO: replace with real API call (e.g. POST to /api/assets)
    setFiles([]);
    setNotes('');
    setSubmitted(true);
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
          accept="image/jpeg,image/png,image/svg+xml,image/gif,image/webp,video/mp4,video/quicktime,video/webm,application/pdf,.docx,application/zip"
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

      {/* Rejected Files */}
      {rejections.length > 0 && (
        <div style={{
          marginBottom: '16px', padding: '14px 20px', borderRadius: '12px',
          background: `${T.danger}10`, border: `1px solid ${T.danger}40`,
        }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: T.danger, marginBottom: '6px' }}>
            {rejections.length} file{rejections.length > 1 ? 's' : ''} could not be added:
          </div>
          {rejections.map((msg, i) => (
            <div key={i} style={{ fontSize: '13px', color: T.danger, opacity: 0.8 }}>{msg}</div>
          ))}
        </div>
      )}

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
            border: `1px solid ${notesFocused ? T.teal : T.border}`,
            background: 'rgba(0,0,0,0.2)',
            color: T.text,
            fontSize: '14px',
            fontFamily: 'inherit',
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={() => setNotesFocused(true)}
          onBlur={() => setNotesFocused(false)}
        />
      </Card>

      {/* Submit */}
      {submitted && (
        <div style={{
          marginBottom: '16px',
          padding: '14px 20px',
          borderRadius: '12px',
          background: `${T.success}15`,
          border: `1px solid ${T.success}40`,
          color: T.success,
          fontSize: '14px',
          fontWeight: 600,
        }}>
          Files submitted successfully. Your AM has been notified.
        </div>
      )}
      <button
        disabled={files.length === 0}
        onClick={handleSubmit}
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
        <div className="grid-2" style={{ gap: '10px' }}>
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
