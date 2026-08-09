import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  separator?: string;
  decimals?: number;
  className?: string;
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  separator = ',',
  decimals = 0,
  className = '',
}: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const [hasStarted, setHasStarted] = useState(false);

  const spring = useSpring(from, {
    damping: 60,
    stiffness: 100,
  });

  const rounded = useTransform(spring, (current) => {
    return current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  });

  useEffect(() => {
    if (isInView && !hasStarted) {
      spring.set(to);
      setHasStarted(true);
    }
  }, [isInView, hasStarted, spring, to]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
