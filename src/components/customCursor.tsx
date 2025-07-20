import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 shadow-[0_0_400px_200px] shadow-[#10275cad] rounded-full pointer-events-none z-50 opacity-70"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}
