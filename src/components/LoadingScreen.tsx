import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';


interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentText, setCurrentText] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

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
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 700); // wait for exit animation
          }, 1000);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
        >
          
          

          {/* Animated Text */}
          <div className="relative h-12 md:h-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-lg md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-md"
              >
                {loadingTexts[currentText]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Futuristic Progress Bar */}
          <div className="w-64 max-w-[80%] h-2 rounded-full bg-neutral-700 relative overflow-hidden shadow-inner mt-6">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${((currentText + 1) / loadingTexts.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-white/10 animate-pulse"
              style={{ clipPath: `inset(0 ${(100 - ((currentText + 1) / loadingTexts.length) * 100)}% 0 0)` }}
            />
          </div>

          {/* Optional Skip Button */}
          <button
            onClick={() => {
              setIsExiting(true);
              setTimeout(onComplete, 700);
            }}
            className="mt-8 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
