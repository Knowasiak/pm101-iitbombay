import React from 'react';
import { motion } from 'framer-motion';
import { Window90s, Dialog90s } from './Window90s';
import { LogoGrid, Logo } from './LogoGrid';
import { QRPanel } from './QRPanel';
import { ChestIcon } from './ChestIcon';
import type { SlideMetadata } from '../data/slides';

// ── Shared slide wrapper ──────────────────────────────────────
export function SlideWrapper({ children, meta }: { children: React.ReactNode; meta: SlideMetadata }) {
  return (
    <motion.div
      key={meta.id}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="slide-stage"
    >
      {children}
    </motion.div>
  );
}

// ── Pixel icon (for heading prefix) ──────────────────────────
export function PxIcon({ src, size = 24 }: { src: string; size?: number }) {
  return (
    <img
      src={src}
      alt=""
      width={size} height={size}
      style={{ imageRendering: 'pixelated', verticalAlign: 'middle', marginRight: 8,
        filter: 'drop-shadow(0 0 4px rgba(0,255,65,0.5))' }}
    />
  );
}

// ── Bullet list ───────────────────────────────────────────────
export function Bullets({ items, color = 'var(--text-primary)' }: { items: string[]; color?: string }) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
          fontSize: 'var(--font-base)', fontFamily: 'ShareTechMono, monospace', color, lineHeight: 1.5 }}>
          <img src={`${import.meta.env.BASE_URL}assets/icons/pixel/pixel_arrow.svg`} alt="" width={18} height={18}
            style={{ imageRendering: 'pixelated', flexShrink: 0, marginTop: 2,
              filter: 'drop-shadow(0 0 3px rgba(0,255,65,0.6))' }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ── Big stat block ────────────────────────────────────────────
export function StatBlock({ num, label, color }: { num: string; label: string; color?: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="stat-big" style={color ? { color } : undefined}>{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ── Section divider (between acts) ───────────────────────────
export function SectionDivider({ act, title, color }: { act: number; title: string; color: string }) {
  return (
    <div className="section-divider" style={{ position: 'relative', width: '100%' }}>
      <div className="section-num">ACT {act}</div>
      <Dialog90s title={`ACT_${act}.exe`} style={{ zIndex: 2, minWidth: 360 }}>
        <div style={{ padding: '16px 28px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'clamp(20px, 2.8vw, 32px)',
            color, marginBottom: 12, textShadow: '0 0 16px currentColor' }}>{title}</div>
          <div className="divider90" />
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)',
            color: 'var(--text-muted)', letterSpacing: 4 }}>
            LOADING MODULE...
          </div>
        </div>
      </Dialog90s>
    </div>
  );
}

// ── Tool pill ─────────────────────────────────────────────────
export function ToolPill({ logo, name, desc }: { logo: string; name: string; desc: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 14px',
      background: 'var(--panel-bg-dark)',
      border: '1px solid var(--panel-border)',
    }}>
      <Logo name={logo} size={28} />
      <div>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)',
          color: 'var(--matrix-green)', letterSpacing: 1 }}>{name}</div>
        <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)',
          color: 'var(--text-muted)', marginTop: 2 }}>{desc}</div>
      </div>
    </div>
  );
}

// ── Flow arrow ────────────────────────────────────────────────
export function FlowArrow({ steps, color = 'var(--matrix-green)' }: { steps: string[]; color?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div style={{
            padding: '8px 16px',
            background: 'var(--panel-bg)',
            border: '2px solid var(--panel-border)',
            fontFamily: 'ShareTechMono, monospace',
            fontSize: 'var(--font-xs)',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}>
            {step}
          </div>
          {i < steps.length - 1 && (
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-md)', color, padding: '0 8px' }}>►</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Error dialog ──────────────────────────────────────────────
export function ErrorDialog({ message, detail }: { message: string; detail?: string }) {
  return (
    <Dialog90s title="SYSTEM_FAILURE.exe">
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
        <img src={`${import.meta.env.BASE_URL}assets/icons/pixel/shield.svg`} alt="error" width={40} height={40}
          style={{ imageRendering: 'pixelated', filter: 'hue-rotate(300deg) saturate(2) brightness(1.5)' }} />
        <div>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-md)',
            color: 'var(--btn-red)', marginBottom: 6, textShadow: '0 0 12px rgba(255,34,34,0.6)' }}>
            {message}
          </div>
          {detail && <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)',
            color: 'var(--text-muted)' }}>{detail}</div>}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn90 ok">OK</button>
      </div>
    </Dialog90s>
  );
}

// ── Re-export all sub-components for slide use ────────────────
export { Window90s, Dialog90s, LogoGrid, Logo, QRPanel, ChestIcon };
