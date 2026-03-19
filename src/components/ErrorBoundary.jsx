import { Component } from 'react';
import { T } from './ui';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
          <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: T.text }}>
            Something went wrong
          </div>
          <div style={{ fontSize: '14px', color: T.textMuted, marginBottom: '24px' }}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </div>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '12px 28px', borderRadius: '10px', border: 'none',
              background: T.teal, color: T.navy, fontWeight: 700,
              cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
