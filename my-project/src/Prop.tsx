import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  length: number;
  speed: number;
  brightness: number;
}

const Prop: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Check if canvas is null
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Check if ctx is null

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 3 + 2,
      speed: Math.random() * 2 + 1,
      brightness: Math.random() * 0.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(255, 255, 255, 1)';

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y + star.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed;

        if (star.x > canvas.width || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = 0;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="relative w-full h-full bg-black">
      <canvas ref={canvasRef} className="absolute w-full h-full"></canvas>
    </div>
  );
};

export default  Prop;
