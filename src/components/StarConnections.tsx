import React from 'react';

interface StarPosition {
  x: number;
  y: number;
}

interface StarConnectionsProps {
  positions: StarPosition[];
}

const StarConnections: React.FC<StarConnectionsProps> = ({ positions }) => {
  return (
    <svg className="absolute inset-0 w-full h-full">
      {positions.map((start, i) => 
        positions.slice(i + 1).map((end, j) => (
          <line
            key={`${i}-${j}`}
            x1={`${start.x}%`}
            y1={`${start.y}%`}
            x2={`${end.x}%`}
            y2={`${end.y}%`}
            className="stroke-blue-400/30"
            strokeWidth="1"
          />
        ))
      )}
    </svg>
  );
};

export default StarConnections;