type ChestType = 'gold' | 'diamond' | 'iron';

interface ChestProps {
  type?: ChestType;
  label: string;
  size?: number;
  floating?: boolean;
  tip?: string;
}

const CHEST_COLORS: Record<ChestType, string> = {
  gold:    '#F5C518',
  diamond: '#7FF4FF',
  iron:    '#C8C8C8',
};

export function ChestIcon({ type = 'gold', label, size = 32, floating = false, tip }: ChestProps) {
  if (floating) {
    return (
      <div className="chest-float">
        <img
          src={`/assets/icons/pixel/chest_${type}.svg`}
          alt={`${type} chest`}
          style={{ width: size, height: size }}
        />
        <div className="chest-float-body">
          <span className="chest-float-label" style={{ color: CHEST_COLORS[type] }}>{label}</span>
          {tip && <span className="chest-float-tip">{tip}</span>}
        </div>
      </div>
    );
  }
  return (
    <div className="chest-marker">
      <img
        src={`/assets/icons/pixel/chest_${type}.svg`}
        alt={`${type} chest`}
        style={{ width: size, height: size, imageRendering: 'pixelated' }}
      />
      <span style={{ color: CHEST_COLORS[type] }}>{label}</span>
    </div>
  );
}
