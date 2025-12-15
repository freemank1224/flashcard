import React from 'react';
import { CardData } from '../types';

const themeStyles = {
  sage: {
    bg: 'bg-[#e8f5e9]',
    border: 'border-[#4a6b4a]',
    text: 'text-[#2e4a2e]',
    accent: 'bg-[#8cbf8c]',
    light: 'bg-[#c8e6c9]'
  },
  salmon: {
    bg: 'bg-[#ffebee]',
    border: 'border-[#c06c5c]',
    text: 'text-[#5c2b2b]',
    accent: 'bg-[#e89b8c]',
    light: 'bg-[#ffcdd2]'
  },
  sky: {
    bg: 'bg-[#e3f2fd]',
    border: 'border-[#4a7796]',
    text: 'text-[#1a3c54]',
    accent: 'bg-[#a2c2e8]',
    light: 'bg-[#bbdefb]'
  },
  gold: {
    bg: 'bg-[#fff8e1]',
    border: 'border-[#8d6e3f]',
    text: 'text-[#4d3b1f]',
    accent: 'bg-[#e6c15c]',
    light: 'bg-[#ffecb3]'
  }
};

interface GhibliCardProps {
  data: CardData;
  onClick?: () => void;
  isExpanded?: boolean;
  forceFullContent?: boolean;
}

export const GhibliCard: React.FC<GhibliCardProps> = ({ data, onClick, isExpanded = false, forceFullContent = false }) => {
  const theme = themeStyles[data.theme];
  const Icon = data.icon;

  // Determine which mode the card is in
  const isMobileCard = !isExpanded && !forceFullContent;

  // Dynamic classes based on state
  const containerClasses = isExpanded
    ? `w-full max-w-lg mx-auto h-auto max-h-[85vh] overflow-y-auto cursor-default shadow-2xl scale-100`
    : forceFullContent
      ? `relative w-full h-auto cursor-default shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)]`
      : `relative w-full aspect-[3/4] cursor-pointer overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]`;

  const contentClasses = isExpanded
    ? `flex-1 px-8 py-6 relative overflow-visible`
    : forceFullContent
      ? `flex-1 px-6 py-2 relative overflow-visible`
      : `flex-1 px-6 py-2 relative overflow-hidden`;

  const textSize = isExpanded ? 'text-base' : 'text-sm';
  const titleSize = isExpanded ? 'text-3xl' : 'text-2xl';

  return (
    <div 
      onClick={isMobileCard ? onClick : undefined}
      className={`
        ${containerClasses}
        ${theme.bg} 
        rounded-3xl 
        border-4 ${theme.border} 
        flex flex-col
      `}
    >
      {/* Decorative Holes/Binding look */}
      <div className="absolute top-4 left-0 w-full flex justify-center space-x-12 opacity-30 pointer-events-none">
        <div className={`w-3 h-3 rounded-full ${theme.border} bg-white border-2`}></div>
        <div className={`w-3 h-3 rounded-full ${theme.border} bg-white border-2`}></div>
      </div>

      {/* Header Section */}
      <div className={`pt-10 pb-4 px-6 flex flex-col items-center text-center relative z-10 shrink-0`}>
        <div className={`
          p-3 rounded-full border-2 ${theme.border} ${theme.accent} 
          mb-3 shadow-sm transform -rotate-3
        `}>
          <Icon size={isExpanded ? 40 : 32} className="text-white drop-shadow-md" />
        </div>
        
        <h2 className={`font-hand ${titleSize} font-bold tracking-wide ${theme.text} leading-tight mb-1`}>
          {data.title}
        </h2>
        {data.subtitle && (
          <span className={`text-xs uppercase tracking-widest font-bold opacity-60 ${theme.text}`}>
            {data.subtitle}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className={contentClasses}>
        {/* Background cloud/blob decoration */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] rounded-[2rem] bg-white/40 blur-xl -z-0 pointer-events-none`}></div>

        <ul className="space-y-3 relative z-10">
          {data.content.map((line, idx) => (
            <li key={idx} className={`flex items-start ${textSize} font-semibold ${theme.text} leading-relaxed`}>
              <span className={`mr-2 mt-1.5 min-w-[6px] min-h-[6px] rounded-full ${theme.border} bg-white border shrink-0`}></span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        
        {/* Gradient fade at bottom for non-expanded cards to indicate more content if truncated */}
        {isMobileCard && (
          <div className={`absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-${theme.bg.replace('bg-', '')} to-transparent pointer-events-none`}></div>
        )}
      </div>

      {/* Footer / Number */}
      <div className={`
        h-14 mt-auto shrink-0
        ${theme.light} border-t-2 ${theme.border} 
        flex items-center justify-between px-6
        relative
      `}>
        <span className={`font-hand font-bold text-lg ${theme.text} opacity-80`}>
          {data.footer}
        </span>
        <div className={`
          w-8 h-8 rounded-full border-2 ${theme.border} bg-white 
          flex items-center justify-center font-bold text-sm ${theme.text}
        `}>
          {data.id}
        </div>
      </div>

      {/* Organic Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-20"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
    </div>
  );
};