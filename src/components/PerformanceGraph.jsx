import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const GraphContainer = styled(motion.div)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2rem;
  height: 400px;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

const GraphTitle = styled(motion.h3)`
  font-size: 1.25rem;
  color: var(--color-text-primary);
  margin: 0 0 2rem 0;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const CustomTooltip = styled(motion.div)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
`;

const TooltipTitle = styled.p`
  color: var(--color-text-primary);
  margin: 0 0 0.5rem 0;
  font-weight: 500;
`;

const TooltipValue = styled.p`
  color: ${props => props.color};
  margin: 0;
  font-size: 0.875rem;
`;

const CustomTooltipContent = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltip
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        <TooltipTitle>{label}</TooltipTitle>
        {payload.map((entry, index) => (
          <TooltipValue key={index} color={entry.color}>
            {entry.name}: {entry.value}%
          </TooltipValue>
        ))}
      </CustomTooltip>
    );
  }
  return null;
};

const data = [
  { name: 'Week 1', performance: 75, accuracy: 82, efficiency: 70 },
  { name: 'Week 2', performance: 80, accuracy: 85, efficiency: 75 },
  { name: 'Week 3', performance: 85, accuracy: 88, efficiency: 80 },
  { name: 'Week 4', performance: 88, accuracy: 90, efficiency: 85 },
  { name: 'Week 5', performance: 92, accuracy: 93, efficiency: 90 },
  { name: 'Week 6', performance: 95, accuracy: 95, efficiency: 92 },
  { name: 'Week 7', performance: 98, accuracy: 97, efficiency: 95 },
];

const PerformanceGraph = ({ title }) => {
  return (
    <GraphContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <GraphTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </GraphTitle>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2196F3" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#2196F3" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.2} />
          <XAxis
            dataKey="name"
            stroke="var(--color-text-secondary)"
            tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--color-text-secondary)', strokeWidth: 1 }}
            tickLine={{ stroke: 'var(--color-text-secondary)' }}
            height={60}
          />
          <YAxis
            stroke="var(--color-text-secondary)"
            tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--color-text-secondary)', strokeWidth: 1 }}
            tickLine={{ stroke: 'var(--color-text-secondary)' }}
            width={60}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltipContent />} />
          <Area
            type="monotone"
            dataKey="performance"
            stroke="var(--color-accent)"
            fillOpacity={1}
            fill="url(#colorPerformance)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="accuracy"
            stroke="#4CAF50"
            fillOpacity={1}
            fill="url(#colorAccuracy)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="efficiency"
            stroke="#2196F3"
            fillOpacity={1}
            fill="url(#colorEfficiency)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default PerformanceGraph; 