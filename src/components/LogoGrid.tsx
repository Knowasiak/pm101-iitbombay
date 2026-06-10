interface LogoGridProps {
  items: { name: string; label: string; ext?: string }[];
  cols?: number;
}

export function LogoGrid({ items, cols = 6 }: LogoGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 8,
    }}>
      {items.map((item) => {
        const exts = item.ext ? [item.ext] : ['svg', 'png', 'ico'];
        // Try in order
        const src = `/assets/logos/${item.name}.${exts[0]}`;
        return (
          <div key={item.name} className="logo-cell">
            <img
              src={src}
              alt={item.label}
              onError={(e) => {
                const img = e.currentTarget;
                const tried = img.dataset.tried ? parseInt(img.dataset.tried) : 0;
                if (tried < exts.length - 1) {
                  img.dataset.tried = String(tried + 1);
                  img.src = `/assets/logos/${item.name}.${exts[tried + 1]}`;
                } else {
                  img.style.display = 'none';
                }
              }}
            />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ── Inline logo image ── */
export function Logo({ name, size = 32, ext }: { name: string; size?: number; ext?: string }) {
  const exts = ext ? [ext] : ['svg', 'png', 'ico'];
  return (
    <img
      src={`/assets/logos/${name}.${exts[0]}`}
      alt={name}
      style={{ width: size, height: size, objectFit: 'contain' }}
      onError={(e) => {
        const img = e.currentTarget;
        const tried = img.dataset.tried ? parseInt(img.dataset.tried) : 0;
        if (tried < exts.length - 1) {
          img.dataset.tried = String(tried + 1);
          img.src = `/assets/logos/${name}.${exts[tried + 1]}`;
        }
      }}
    />
  );
}
