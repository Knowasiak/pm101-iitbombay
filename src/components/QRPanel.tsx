interface QRPanelProps {
  name: string;   // filename without extension, e.g. "knowasiak"
  label?: string;
  size?: number;
}

export function QRPanel({ name, label, size = 90 }: QRPanelProps) {
  return (
    <div className="qr-panel">
      <img
        src={`${import.meta.env.BASE_URL}assets/qr/${name}.png`}
        alt={label ?? name}
        style={{ width: size, height: size, imageRendering: 'pixelated' }}
      />
      {label && <span>{label}</span>}
    </div>
  );
}
