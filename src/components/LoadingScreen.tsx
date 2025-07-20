import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentText, setCurrentText] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const loadingTexts = [
    "Loading Excellence...",
    "Welcome to OmniDexC"
  ];

  useEffect(() => {
    // Check if we should skip the loading screen
    const skipLoading = sessionStorage.getItem('skipLoadingScreen');
    if (skipLoading === 'true') {
      sessionStorage.removeItem('skipLoadingScreen'); // Clean up
      onComplete(); // Skip loading immediately
      return;
    }

    // Show logo immediately
    setLogoVisible(true);

    const interval = setInterval(() => {
      setCurrentText(prev => {
        if (prev < loadingTexts.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 600); // faster exit
          }, 800); // much shorter final delay
          return prev;
        }
      });
    }, 800); // faster text transitions

    return () => clearInterval(interval);
  }, [onComplete]);

  // Don't render anything if we're skipping
  const skipLoading = sessionStorage.getItem('skipLoadingScreen');
  if (skipLoading === 'true') {
    return null;
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Animated Logo Container */}
          <motion.div
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={logoVisible ? { 
              scale: 1, 
              rotate: 0, 
              opacity: 1 
            } : {}}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              type: "spring",
              stiffness: 200
            }}
            className="flex items-center space-x-6 mb-8 group"
          >
            {/* Enhanced Logo - Same as Header but with Loading Animations */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 relative">
                {/* Outer rotating ring with enhanced glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-3 border-blue-400/60 shadow-lg shadow-blue-500/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner rotating ring - opposite direction with pulsing */}
                <motion.div 
                  className="absolute inset-2 rounded-full border-2 border-purple-400/50 shadow-md shadow-purple-500/30"
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Core logo with enhanced effects */}
                <motion.div 
                  className="absolute inset-3 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/40 relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.4)",
                      "0 0 40px rgba(147, 51, 234, 0.6)",
                      "0 0 20px rgba(59, 130, 246, 0.4)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Holographic letter with floating animation */}
                  <motion.span 
                    className="text-2xl md:text-3xl font-black text-white relative z-10"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0.8)",
                        "0 0 20px rgba(59, 130, 246, 0.8)",
                        "0 0 10px rgba(255, 255, 255, 0.8)"
                      ],
                      y: [0, -2, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    O
                  </motion.span>
                  
                  {/* Enhanced scanning light effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatDelay: 1 
                    }}
                  />
                  
                  {/* Pulsing core with enhanced colors */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-300/40 to-purple-400/40 rounded-full"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                
                {/* Enhanced floating particles */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 1, 0.8],
                    y: [0, -5, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-purple-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                    y: [0, 3, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                
                {/* Outer glow with animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full -z-10 blur-xl scale-150"
                  animate={{ 
                    scale: [1.5, 1.8, 1.5],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
            
            {/* Enhanced Company Name with Advanced Typography */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={logoVisible ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <motion.span 
                className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-wide"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backgroundSize: "200% 200%",
                  filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))"
                }}
              >
                OmniDexC
              </motion.span>
              
              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"
                initial={{ width: 0 }}
                animate={logoVisible ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={logoVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-8"
          >
            <motion.p 
              className="text-lg md:text-xl text-blue-200 font-light tracking-wider"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Digital Excellence • Innovation • Future
            </motion.p>
          </motion.div>

          {/* Enhanced Loading Text with Better Typography */}
          <div className="relative h-16 md:h-20 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentText}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-xl md:text-2xl font-semibold text-center"
              >
                <motion.span
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    backgroundSize: "200% 200%",
                    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"
                  }}
                >
                  {loadingTexts[currentText]}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Progress Bar with Neon Effect */}
          <div className="w-80 max-w-[85%] relative mb-8">
            <div className="h-3 rounded-full bg-slate-700/50 relative overflow-hidden shadow-inner border border-slate-600/30">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentText + 1) / loadingTexts.length) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              
              {/* Neon glow effect */}
              <motion.div
                className="absolute top-0 left-0 h-full w-full bg-white/20 rounded-full"
                style={{ 
                  clipPath: `inset(0 ${(100 - ((currentText + 1) / loadingTexts.length) * 100)}% 0 0)`,
                  filter: "blur(1px)"
                }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            {/* Progress percentage */}
            <motion.div
              className="text-center mt-3 text-blue-300 font-medium"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {Math.round(((currentText + 1) / loadingTexts.length) * 100)}%
            </motion.div>
          </div>

          {/* Enhanced Skip Button */}
          <motion.button
            onClick={() => {
              setIsExiting(true);
              setTimeout(onComplete, 600);
            }}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm font-medium border border-white/20 hover:border-white/40 backdrop-blur-sm group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <span className="relative z-10">Skip Introduction</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
            />
          </motion.button>

          {/* Floating Elements for Extra Visual Appeal */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60">
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-50">
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -8, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;