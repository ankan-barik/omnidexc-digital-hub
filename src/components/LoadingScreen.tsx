import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Crafting Digital Excellence...",
    "Transforming Ideas into Reality...",
    "Building Your Digital Future...",
    "Welcome to OmniDexC"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => {
        if (prev < loadingTexts.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <div className="loading-text mb-8">
          {loadingTexts[currentText]}
        </div>
        <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out"
            style={{ width: `${((currentText + 1) / loadingTexts.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;