import React, { useState } from 'react';
import Star from './Star';
import StarConnections from './StarConnections';
import Background from './Background';
import Footer from './Footer';

const initialStarPositions = [
  { x: 50, y: 30 },  // Top center
  { x: 20, y: 40 },  // Upper left
  { x: 80, y: 40 },  // Upper right
  { x: 35, y: 60 },  // Middle left
  { x: 65, y: 60 },  // Middle right
  { x: 30, y: 80 },  // Lower left
  { x: 70, y: 80 }   // Lower right
];

const initialIPs = [
  '0.0.0.0',
  '32.0.0.0',
  '64.0.0.0',
  '96.0.0.0',
  '128.0.0.0',
  '160.0.0.0',
  '192.0.0.0'
];

const StarNetwork: React.FC = () => {
  const [ipAddresses, setIpAddresses] = useState<string[]>(initialIPs);

  const handleIpChange = (index: number, newIp: string) => {
    const newIps = [...ipAddresses];
    newIps[index] = newIp;
    setIpAddresses(newIps);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-blue-950 to-purple-950 overflow-hidden">
      <Background />
      <StarConnections positions={initialStarPositions} />
      
      {initialStarPositions.map((pos, index) => (
        <Star
          key={index}
          x={pos.x}
          y={pos.y}
          ip={ipAddresses[index]}
          number={index + 1}
        />
      ))}
      
      <Footer 
        ipAddresses={ipAddresses}
        onIpChange={handleIpChange}
      />
    </div>
  );
};

export default StarNetwork;