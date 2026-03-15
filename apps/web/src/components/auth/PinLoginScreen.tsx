'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { NumericKeypad } from './NumericKeypad';
import { PinDisplay } from './PinDisplay';
import { StoreLogo } from './StoreLogo';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export function PinLoginScreen() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const triggerShake = useCallback(() => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  }, []);

  const handleDigitPress = useCallback((digit: string) => {
    if (pin.length < 4 && !isLoading) {
      setPin(prev => prev + digit);
      setError(null);
    }
  }, [pin.length, isLoading]);

  const handleBackspace = useCallback(() => {
    if (!isLoading) {
      setPin(prev => prev.slice(0, -1));
      setError(null);
    }
  }, [isLoading]);

  const handleClear = useCallback(() => {
    if (!isLoading) {
      setPin('');
      setError(null);
    }
  }, [isLoading]);

  const handleSubmit = useCallback(async () => {
    if (pin.length !== 4 || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          store_code: 'DEFAULT',
          pin: pin,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        
        if (response.status === 401) {
          setError('Invalid PIN');
          triggerShake();
          setPin('');
        } else {
          setError(data.message || 'Login failed. Please try again.');
          triggerShake();
          setPin('');
        }
        return;
      }

      const data = await response.json();
      
      if (data.access_token) {
        localStorage.setItem('jwt', data.access_token);
        router.push('/order');
      } else {
        setError('Invalid response from server');
        triggerShake();
        setPin('');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please check your connection.');
      triggerShake();
      setPin('');
    } finally {
      setIsLoading(false);
    }
  }, [pin, isLoading, router, triggerShake]);

  return (
    <div className="min-h-screen bg-[#0a0a0b] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">
        <StoreLogo />
        
        <div className="w-full flex flex-col items-center gap-6">
          <PinDisplay 
            length={pin.length} 
            isShaking={isShaking} 
            error={error}
          />
          
          <NumericKeypad
            onDigitPress={handleDigitPress}
            onBackspace={handleBackspace}
            onClear={handleClear}
            disabled={isLoading}
          />
          
          <button
            onClick={handleSubmit}
            disabled={pin.length !== 4 || isLoading}
            className={`
              w-full h-14 rounded-xl font-semibold text-lg
              transition-all duration-200
              ${pin.length === 4 && !isLoading
                ? 'bg-[#22c55e] text-[#052e16] hover:bg-[#4ade80] active:scale-[0.98]'
                : 'bg-[#1c1c1f] text-[#6b6b70] cursor-not-allowed'
              }
              ${isLoading ? 'opacity-70' : ''}
            `}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg 
      className="animate-spin h-5 w-5" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
