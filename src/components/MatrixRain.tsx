import { useEffect, useRef } from 'react';

const CHARS = 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01アイウエオカキクケコサシスセソタチツテトナニヌネノ';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const fontSize = 15;
    // cols[i] = { x, y } — full-width dense rain
    let drops: number[] = [];

    function resize() {
      canvas!.width  = window.innerWidth;
      canvas!.height = window.innerHeight;
      const numCols = Math.floor(canvas!.width / (fontSize + 2));
      drops = Array.from({ length: numCols }, () =>
        Math.floor(Math.random() * -(canvas!.height / fontSize))
      );
    }

    function draw() {
      // Fade trail — black with alpha for green streak
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, canvas!.width, canvas!.height);

      const colWidth = Math.floor(canvas!.width / drops.length);

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * colWidth;

        // Lead character: bright white-green
        ctx.fillStyle = `rgba(200, 255, 200, ${Math.random() > 0.85 ? 0.95 : 0.5})`;
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, x, y * fontSize);

        // Slightly dimmer random char one step behind
        ctx.fillStyle = 'rgba(0,255,65,0.3)';
        ctx.fillText(
          CHARS[Math.floor(Math.random() * CHARS.length)],
          x,
          (y - 1) * fontSize
        );

        // Reset when off-screen
        if (y * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] = y + 1;
        }
      });
    }

    resize();
    window.addEventListener('resize', resize);
    const interval = setInterval(draw, 45);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />;
}
