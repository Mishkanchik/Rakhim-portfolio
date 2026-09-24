"use client";

import type React from "react";
import { useRef, type MouseEvent } from "react"
import styles from "./SpotlightCard.module.scss";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "green" | "blue" | "purple" | "cyan" | "custom";
  size?: "sm" | "md" | "lg";
  customGlowColor?: string; // e.g. "rgba(34, 197, 94, 0.15)"
  children: React.ReactNode;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  glowColor = "green",
  size = "md",
  customGlowColor,
  children,
  className = "",
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const glowClass = styles[glowColor] || styles.green;
  const sizeClass = styles[size] || styles.md;
  const combinedClassName = `${styles.spotlightCard} ${glowClass} ${sizeClass} ${className}`.trim();

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={combinedClassName}
      style={{
        ...props.style,
        ...(customGlowColor ? ({ "--custom-glow-color": customGlowColor } as React.CSSProperties) : {}),
      }}
      {...props}
    >
      <div className={styles.glowEffect} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
