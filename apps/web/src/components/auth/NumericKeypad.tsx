'use client';

interface NumericKeypadProps {
  onDigitPress: (digit: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  disabled?: boolean;
}

export function NumericKeypad({ 
  onDigitPress, 
  onBackspace, 
  onClear,
  disabled = false 
}: NumericKeypadProps) {
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['clear', '0', 'backspace'],
  ];

  const handleKeyPress = (key: string) => {
    if (disabled) return;
    
    if (key === 'clear') {
      onClear();
    } else if (key === 'backspace') {
      onBackspace();
    } else {
      onDigitPress(key);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {keys.flat().map((key, index) => (
        <button
          key={index}
          onClick={() => handleKeyPress(key)}
          disabled={disabled}
          className={`
            h-16 rounded-xl text-xl font-semibold
            transition-all duration-150
            active:scale-95
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${key === 'clear' || key === 'backspace'
              ? 'bg-[#1c1c1f] text-[#a1a1a6] hover:bg-[#232326]'
              : 'bg-[#141416] text-[#fafafa] hover:bg-[#1c1c1f]'
            }
          `}
        >
          {key === 'backspace' ? (
            <BackspaceIcon />
          ) : key === 'clear' ? (
            'C'
          ) : (
            key
          )}
        </button>
      ))}
    </div>
  );
}

function BackspaceIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="mx-auto"
    >
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <line x1="18" y1="9" x2="12" y2="15" />
      <line x1="12" y1="9" x2="18" y2="15" />
    </svg>
  );
}
