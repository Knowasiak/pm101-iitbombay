import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MatrixRain } from './components/MatrixRain';
import { SlideNav } from './components/SlideNav';
import { SLIDES } from './slides/index';
import { getSlideMetadata, TOTAL_SLIDES } from './data/slides';
import './styles/globals.css';

export default function App() {
  const initialSlide = Math.max(1, Math.min(TOTAL_SLIDES, parseInt(window.location.hash.replace('#','')) || 1));
  const [current, setCurrent] = useState(initialSlide);
  const meta = getSlideMetadata(current);
  const SlideComponent = SLIDES[current];

  const goNext = useCallback(() => {
    if (current < TOTAL_SLIDES) setCurrent(n => n + 1);
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 1) setCurrent(n => n - 1);
  }, [current]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  return (
    <div className="scanlines" style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>
      <MatrixRain />
      <AnimatePresence mode="wait">
        {SlideComponent ? (
          <SlideComponent key={current} meta={meta} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--matrix-green)', fontFamily: 'Minecraft' }}>
            SLIDE {current} NOT FOUND
          </div>
        )}
      </AnimatePresence>
      <SlideNav
        current={current}
        total={TOTAL_SLIDES}
        actName={meta.actName}
        actColor={meta.actColor}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}
