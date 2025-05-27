import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function FloatingLogo() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-[#1a5b8e] p-2 rounded-full shadow-lg z-50 w-18 h-20 flex flex-col items-center justify-center"
      animate={{ opacity: isVisible ? 1 : 0.6, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-[#f0f3f5] font-bold text-xs leading-none">
        CLINICA
      </div>
      <div className="text-red-500 font-bold text-xs leading-none">ALVAREZ</div>
    </motion.div>
  );
}
