import React, { useState, useEffect } from 'react';
import { cards } from './data';
import { CardData } from './types';
import { GhibliCard } from './components/GhibliCard';
import { Printer, Info, X, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    html2pdf: any;
  }
}

export default function App() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPrintingMode, setIsPrintingMode] = useState(false);

  const handlePrint = async () => {
    // Try to use html2pdf if available for a direct download experience
    if (typeof window !== 'undefined' && window.html2pdf) {
      setIsGenerating(true);
      setIsPrintingMode(true); // Switch layout for PDF capture
      
      // Allow time for React to render the 2-column expanded layout
      setTimeout(async () => {
        try {
          // We select the main element to print
          const element = document.querySelector('main');
          
          // Configuration for html2pdf
          const opt = {
            margin:       [10, 10, 10, 10], // top, left, bottom, right
            filename:     'cosmetic-compliance-cards.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { 
              scale: 2, 
              useCORS: true,
              letterRendering: true,
              scrollY: 0,
            },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
            // strict page breaking rules
            pagebreak:    { mode: ['css', 'legacy'] }
          };

          await window.html2pdf().set(opt).from(element).save();
        } catch (error) {
          console.error("PDF generation failed, falling back to browser print:", error);
          window.print();
        } finally {
          setIsGenerating(false);
          setIsPrintingMode(false); // Revert UI
        }
      }, 800);
      
    } else {
      // Fallback if library didn't load
      window.print();
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCard(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f3e8] p-4 md:p-12 relative">
      {/* Background Illustrations (CSS Shapes) */}
      <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-[#8cbf8c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-[#a2c2e8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

      {/* Header */}
      <header className="max-w-7xl mx-auto mb-12 text-center relative z-10">
        <div className="inline-block bg-white border-2 border-[#5A5A5A] rounded-full px-6 py-2 mb-4 shadow-[4px_4px_0px_0px_rgba(90,90,90,0.2)]">
          <span className="font-hand font-bold text-[#5A5A5A] tracking-wider uppercase">Market Compliance Guide</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#4a4a4a] font-sans mb-4 tracking-tight">
          Knowledge Flashcards
        </h1>
        <p className="max-w-2xl mx-auto text-[#6b6b6b] font-medium text-lg leading-relaxed mb-4">
          Summary of Cosmetic Platform Compliance & Market Strategy. 
          <br/>Designed in a whimsical style for easy learning.
        </p>
        <p className="text-[#c06c5c] font-hand text-xl animate-pulse cursor-default">
          ✨ Click any card to expand! ✨
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button 
            onClick={handlePrint}
            disabled={isGenerating}
            className={`
              flex items-center gap-2 bg-[#e89b8c] text-[#5c2b2b] px-6 py-3 rounded-2xl font-bold border-2 border-[#c06c5c] 
              shadow-[4px_4px_0px_0px_#c06c5c] active:translate-y-1 active:shadow-none transition-all 
              hover:bg-[#ffab9c] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[4px_4px_0px_0px_#c06c5c]
            `}
          >
            {isGenerating ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Printer size={20} />
                Print / Save to PDF
              </>
            )}
          </button>
        </div>
      </header>

      {/* Grid */}
      {/* 
         Logic: When isPrintingMode is true, use Flexbox with wrap to allow natural flow and page breaks.
         Set fixed width to ensure content fits.
      */}
      <main className={`
        mx-auto transition-all duration-300
        ${isPrintingMode 
          ? 'flex flex-wrap justify-center gap-8 max-w-[1024px] bg-[#f7f3e8]' 
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl'
        }
        print:block print:w-full
      `}>
        {cards.map((card) => (
          <div 
            key={card.id} 
            className={`
              flex justify-center
              ${isPrintingMode ? 'w-[45%] mb-4' : 'w-full'} 
              print:inline-block print:w-[45%] print:m-2 print:break-inside-avoid
            `}
            // Explicitly force break-inside avoid for html2pdf
            style={isPrintingMode ? { pageBreakInside: 'avoid', breakInside: 'avoid' } : {}}
          >
            <GhibliCard 
              data={card} 
              onClick={() => setSelectedCard(card)}
              forceFullContent={isPrintingMode}
            />
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-16 text-center text-[#8a8a8a] pb-8 relative z-10 print:hidden">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Info size={16} />
          <span className="font-bold text-sm">Design Note</span>
        </div>
        <p className="text-sm">Inspired by Studio Ghibli aesthetics. Pure CSS implementation.</p>
        <p className="text-xs mt-2 opacity-50">Content based on 2025 Cosmetic Platform Compliance Report.</p>
      </footer>

      {/* Modal Overlay */}
      {selectedCard && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2c3e50]/60 backdrop-blur-sm transition-opacity duration-300 print:hidden"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="relative w-full max-w-lg animate-[popIn_0.3s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute -top-4 -right-4 md:-right-12 z-50 p-2 bg-white rounded-full shadow-lg border-2 border-[#c06c5c] text-[#c06c5c] hover:bg-[#ffcdd2] transition-colors"
            >
              <X size={24} />
            </button>
            <GhibliCard data={selectedCard} isExpanded={true} />
          </div>
        </div>
      )}
      
      {/* Styles */}
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media print {
          body { background: white; }
          button { display: none; }
          header { margin-bottom: 2rem; }
          h1 { font-size: 2rem; }
          main { display: block; text-align: center; }
          /* Ensure backgrounds print */
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>
    </div>
  );
}