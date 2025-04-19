import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollSection from './ScrollSection';

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  .number {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const AnimatedNumber = ({ value }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
      });
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
    >
      {value}
    </motion.span>
  );
};

const stats = [
  { number: "98%", label: "Training Efficiency" },
  { number: "50K+", label: "Active Users" },
  { number: "24/7", label: "Support Available" },
  { number: "15+", label: "Military Partners" }
];

const StatsSection = () => {
  return (
    <ScrollSection background="linear-gradient(to right, #1a1a1a, #2d2d2d)">
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="number">
              <AnimatedNumber value={stat.number} />
            </div>
            <div className="label">{stat.label}</div>
          </StatItem>
        ))}
      </StatsGrid>
    </ScrollSection>
  );
};

export default StatsSection; 