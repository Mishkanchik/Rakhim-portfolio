"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ElegantBackground.module.scss";

interface ElegantShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}

const ElegantShape: React.FC<ElegantShapeProps> = ({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "rgba(34, 197, 94, 0.08)", // emerald alpha weak
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -120,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`${styles.shapeWrapper} ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className={styles.shapeContainer}
      >
        <div
          style={{
            background: `linear-gradient(to right, ${gradient}, transparent)`,
          }}
          className={styles.shapeBody}
        />
      </motion.div>
    </motion.div>
  );
};

export const ElegantBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.elegantBackground}>
      <div className={styles.radialGlow} />

      <div className={styles.shapesWrapper}>
        {/* Top Left - Emerald */}
        <ElegantShape
          delay={0.3}
          width={580}
          height={140}
          rotate={12}
          gradient="rgba(16, 185, 129, 0.12)"
          className={styles.topLeft}
        />

        {/* Bottom Right - Teal/Cyan */}
        <ElegantShape
          delay={0.5}
          width={480}
          height={120}
          rotate={-15}
          gradient="rgba(20, 184, 166, 0.1)"
          className={styles.bottomRight}
        />

        {/* Bottom Left - Lime */}
        <ElegantShape
          delay={0.4}
          width={320}
          height={90}
          rotate={-8}
          gradient="rgba(132, 204, 22, 0.08)"
          className={styles.bottomLeft}
        />

        {/* Top Right - Forest Green */}
        <ElegantShape
          delay={0.6}
          width={220}
          height={65}
          rotate={20}
          gradient="rgba(34, 197, 94, 0.08)"
          className={styles.topRight}
        />

        {/* Top Mid/Left - Mint */}
        <ElegantShape
          delay={0.7}
          width={160}
          height={45}
          rotate={-25}
          gradient="rgba(52, 211, 153, 0.1)"
          className={styles.topMid}
        />
      </div>

      <div className={styles.vignette} />
    </div>
  );
};
export default ElegantBackground;
