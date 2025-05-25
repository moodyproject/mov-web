import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { backgroundStyles } from '../ui';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import PerformanceGraph from '../PerformanceGraph';
import { 
  UniversalChartContainer, 
  UniversalSection, 
  UniversalContentWrapper, 
  UniversalHeaderContainer 
} from '../../styles/UniversalStyles';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Filler,
  Legend
);

const ShowcaseSection = styled(UniversalSection)`
  ${backgroundStyles}
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled(UniversalContentWrapper)`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  
  // Desktop: Reduced spacing for snap sections
  @media (min-width: 1024px) {
    padding: 1rem 2rem;
    gap: 0.5rem;
  }
`;

const HeaderContainer = styled(UniversalHeaderContainer)`
  text-align: center;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  // Desktop: Reduced padding for snap sections
  @media (min-width: 1024px) {
    padding: 1rem 0;
  }
  
  // Mobile: Keep original padding
  @media (max-width: 1023px) {
    padding: 2rem 0;
  }
`;

const Overline = styled(motion.span)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.components.button.primary.background};
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ChartContainer = styled(UniversalChartContainer)`
  // Desktop: Smaller height for snap sections
  @media (min-width: 1024px) {
    height: 300px;
  }
  
  // Mobile: Keep original height
  @media (max-width: 1023px) {
    height: 500px;
  }
`;

const PerformanceMetrics = () => {
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(20, 20, 30, 0.9)',
        titleColor: 'rgba(255, 255, 255, 0.9)',
        bodyColor: 'rgba(255, 255, 255, 0.7)',
        borderColor: 'rgba(109, 40, 217, 0.2)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          weight: '600',
        },
        bodyFont: {
          size: 13,
        },
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 11,
          },
        },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 11,
          },
          callback: function(value) {
            return value + '%';
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hoverRadius: 6,
      },
    },
  };

  // Sample data
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {
        label: 'Performance',
        data: [72, 75, 79, 83, 88, 91, 94],
        borderColor: '#6D28D9',
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          
          if (!chartArea) {
            return null;
          }
          
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(109, 40, 217, 0)');
          gradient.addColorStop(0.5, 'rgba(109, 40, 217, 0.2)');
          gradient.addColorStop(1, 'rgba(109, 40, 217, 0.4)');
          return gradient;
        },
        borderWidth: 2,
        fill: true,
      },
      {
        label: 'Target',
        data: [78, 81, 83, 85, 87, 89, 90],
        borderColor: '#60A5FA',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  return (
    <ShowcaseSection>
      <ContentWrapper>
        <HeaderContainer>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Performance Metrics
          </Overline>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Training Progress Analytics
          </SectionTitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Track performance improvements and identify areas for enhancement with our comprehensive analytics dashboard.
          </Description>
        </HeaderContainer>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ChartContainer>
            <Line options={options} data={data} />
          </ChartContainer>
        </motion.div>
      </ContentWrapper>
    </ShowcaseSection>
  );
};

export default PerformanceMetrics; 