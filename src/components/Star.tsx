import React from 'react';
import { Star as StarIcon } from 'lucide-react';

interface StarProps {
  x: number;
  y: number;
  ip: string;
  number: number;
}

const Star: React.FC<StarProps> = ({ x, y, ip, number }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <StarIcon 
            className="w-8 h-8 text-yellow-300 animate-pulse cursor-pointer
                       transform transition-transform duration-300 group-hover:scale-125"
            fill="currentColor"
          />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         text-black font-bold text-xs">
            {number}
          </span>
        </div>
        <div className="mt-2 text-center">
          <div className="text-white/90 text-sm mb-1 font-mono">{ip}</div>
        </div>
      </div>
    </div>
  );
};

export default Star;