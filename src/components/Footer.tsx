import React from 'react';

interface FooterProps {
  ipAddresses: string[];
  onIpChange: (index: number, newIp: string) => void;
}

const Footer: React.FC<FooterProps> = ({ ipAddresses, onIpChange }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-4">
      <div className="max-w-4xl mx-auto grid grid-cols-7 gap-4">
        {ipAddresses.map((ip, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-white/90 text-sm mb-1 font-mono">Star {index + 1}</div>
            <input
              type="text"
              value={ip}
              onChange={(e) => onIpChange(index, e.target.value)}
              className="w-full px-2 py-1 bg-black/40 border border-blue-400/30 rounded text-sm text-white
                       focus:outline-none focus:border-blue-500 focus:bg-black/60
                       transition-all duration-300"
              placeholder="Enter IP address"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;