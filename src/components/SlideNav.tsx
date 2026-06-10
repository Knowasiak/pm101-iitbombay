interface NavProps {
  current: number;
  total: number;
  actName: string;
  actColor: string;
  onPrev: () => void;
  onNext: () => void;
}

export function SlideNav({ current, total, actName, onPrev, onNext }: Omit<NavProps, 'actColor'> & { actColor?: string }) {
  const pct = ((current - 1) / (total - 1)) * 100;

  return (
    <div className="nav-bar">
      <button className="btn90" onClick={onPrev} disabled={current <= 1}
        style={{ minWidth: 80 }}>
        ◄ PREV
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, gap: 3 }}>
        {/* Progress bar */}
        <div className="prog90" style={{ width: '100%', maxWidth: 500, height: 10 }}>
          <div className="prog90-fill" style={{ width: `${pct}%` }} />
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span className="nav-slide-counter">
            {String(current).padStart(2, '0')} / {total}
          </span>
          <span className="nav-act-label" style={{ color: 'var(--matrix-green)' }}>
            {actName}
          </span>
        </div>
      </div>

      <button className="btn90 ok" onClick={onNext} disabled={current >= total}
        style={{ minWidth: 80 }}>
        NEXT ►
      </button>
    </div>
  );
}
