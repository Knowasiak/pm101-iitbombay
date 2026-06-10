import React from 'react';
import clsx from 'clsx';

interface WindowProps {
  title: string;
  icon?: string;      /* pixel SVG path e.g. /assets/icons/pixel/rocket.svg */
  menuItems?: string[];
  statusLeft?: string;
  statusRight?: string;
  controls?: boolean;
  className?: string;
  bodyClass?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  accentColor?: string;
}

export function Window90s({
  title, icon, menuItems, statusLeft, statusRight,
  controls = true, className, bodyClass, style, children, accentColor,
}: WindowProps) {
  return (
    <div className={clsx('win', className)} style={style}>
      {/* Title bar */}
      <div
        className="win-titlebar win-titlebar-gradient"
        style={accentColor
          ? { background: `linear-gradient(90deg, ${accentColor}44 0%, var(--title-bg-hi) 40%, var(--title-bg) 100%)` }
          : undefined}
      >
        {icon && (
          <img
            src={icon}
            alt=""
            width={14} height={14}
            style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 3px rgba(0,255,65,0.8))', flexShrink: 0 }}
          />
        )}
        <span className="win-title">{title}</span>
        {controls && (
          <div className="win-controls">
            <span className="win-ctrl">_</span>
            <span className="win-ctrl">□</span>
            <span className="win-ctrl">×</span>
          </div>
        )}
      </div>

      {/* Menu bar */}
      {menuItems && menuItems.length > 0 && (
        <div className="win-menubar">
          {menuItems.map((item) => (
            <span key={item} className="win-menubar-item">{item}</span>
          ))}
        </div>
      )}

      {/* Body */}
      <div className={clsx('win-body', bodyClass)}>{children}</div>

      {/* Status bar */}
      {(statusLeft || statusRight) && (
        <div className="win-statusbar">
          <span>{statusLeft ?? ''}</span>
          <span>{statusRight ?? ''}</span>
        </div>
      )}
    </div>
  );
}

/* ── Dialog variant (smaller, modal-style) ── */
interface DialogProps {
  title: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Dialog90s({ title, icon, className, style, children }: DialogProps) {
  return (
    <div className={clsx('win', className)} style={{ minWidth: 260, maxWidth: 420, ...style }}>
      <div className="win-titlebar win-titlebar-gradient">
        {icon && (
          <img
            src={icon}
            alt=""
            width={14} height={14}
            style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 3px rgba(0,255,65,0.8))', flexShrink: 0 }}
          />
        )}
        <span className="win-title">{title}</span>
        <div className="win-controls">
          <span className="win-ctrl">×</span>
        </div>
      </div>
      <div className="win-body" style={{ padding: 14 }}>{children}</div>
    </div>
  );
}
