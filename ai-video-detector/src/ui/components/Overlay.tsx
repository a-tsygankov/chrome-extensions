export const Overlay = ({ label, confidence }: { label: string; confidence: number }) => (
  <div style={{
      position: 'absolute', top: '12px', left: '12px',
      zIndex: 99999, background: confidence > 0.7 ? 'red' : 'orange',
      color: 'white', padding: '6px 10px', borderRadius: '6px',
      fontWeight: 600, fontSize: '12px'
  }}>
      {label} ({Math.round(confidence * 100)}%)
  </div>
);
