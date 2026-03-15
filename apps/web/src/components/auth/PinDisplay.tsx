'use client';

interface PinDisplayProps {
  length: number;
  isShaking: boolean;
  error: string | null;
}

export function PinDisplay({ length, isShaking, error }: PinDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-[#a1a1a6] text-sm font-medium">Enter your PIN</p>
      
      <div 
        className={`
          flex gap-4
          ${isShaking ? 'animate-shake' : ''}
        `}
      >
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`
              w-4 h-4 rounded-full
              transition-all duration-150
              ${index < length 
                ? error ? 'bg-[#ef4444]' : 'bg-[#22c55e]'
                : 'bg-[#2a2a2e]'
              }
            `}
          />
        ))}
      </div>
      
      {error && (
        <p className="text-[#ef4444] text-sm font-medium mt-1 animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  );
}
