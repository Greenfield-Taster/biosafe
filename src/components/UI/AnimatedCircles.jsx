import React, { memo } from "react";
import "./AnimatedCircles.scss";

const AnimatedCircles = memo(() => {
  const circles = [
    { id: 1, size: 700, color: "blue", top: "10%", left: "15%" },
    { id: 2, size: 480, color: "teal", top: "20%", right: "10%" },
    { id: 3, size: 620, color: "green", bottom: "15%", left: "20%" },
    { id: 4, size: 760, color: "purple", bottom: "20%", right: "15%" },
    { id: 5, size: 600, color: "orange", top: "30%", left: "60%" },
  ];

  return (
    <div className="animated-circles">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={`circle circle-${circle.id}`}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            ...(circle.top && { top: circle.top }),
            ...(circle.bottom && { bottom: circle.bottom }),
            ...(circle.left && { left: circle.left }),
            ...(circle.right && { right: circle.right }),
          }}
        />
      ))}
    </div>
  );
});

AnimatedCircles.displayName = "AnimatedCircles";

export default AnimatedCircles;
