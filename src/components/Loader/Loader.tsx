import { motion } from "motion/react";

const GREEN = "rgb(0, 200, 83)";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      {/* Spinner rings */}
      <motion.div
        className="relative size-32"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${GREEN} 90deg, transparent 180deg)`,
            mask: "radial-gradient(circle at 50% 50%, transparent 35%, black 37%, black 39%, transparent 41%)",
            WebkitMask: "radial-gradient(circle at 50% 50%, transparent 35%, black 37%, black 39%, transparent 41%)",
            opacity: 0.8,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Primary ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${GREEN} 120deg, rgba(0,200,83,0.5) 240deg, transparent 360deg)`,
            mask: "radial-gradient(circle at 50% 50%, transparent 42%, black 44%, black 48%, transparent 50%)",
            WebkitMask: "radial-gradient(circle at 50% 50%, transparent 42%, black 44%, black 48%, transparent 50%)",
            opacity: 0.9,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />

        {/* Counter-rotation ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 180deg, transparent 0deg, rgba(0,200,83,0.6) 45deg, transparent 90deg)`,
            mask: "radial-gradient(circle at 50% 50%, transparent 52%, black 54%, black 56%, transparent 58%)",
            WebkitMask: "radial-gradient(circle at 50% 50%, transparent 52%, black 54%, black 56%, transparent 58%)",
            opacity: 0.35,
          }}
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />

        {/* Accent particle ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 270deg, transparent 0deg, rgba(0,200,83,0.4) 20deg, transparent 40deg)`,
            mask: "radial-gradient(circle at 50% 50%, transparent 61%, black 62%, black 63%, transparent 64%)",
            WebkitMask: "radial-gradient(circle at 50% 50%, transparent 61%, black 62%, black 63%, transparent 64%)",
            opacity: 0.5,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="text-center space-y-2 max-w-56"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.h1
          className="text-base font-mono font-medium tracking-widest text-terminal-green antialiased"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.span
            animate={{ opacity: [0.9, 0.6, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
          >
            Opening ...
          </motion.span>
        </motion.h1>
      </motion.div>
    </div>
  );
}
