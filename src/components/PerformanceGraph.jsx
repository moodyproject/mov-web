import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  background: transparent;
  border: none;
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 16px;
    z-index: -1;
  }
  
  &:hover {
    background: transparent;
    border-color: transparent;
    
    &::before {
      opacity: 0;
    }
  }
`;

const ChartTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.02em;
`;

const PerformanceGraph = ({ title = "Performance Analytics" }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(10, 9, 15, 0.95)',
        titleColor: 'rgba(255, 255, 255, 0.9)',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(109, 40, 217, 0.3)',
        borderWidth: 1,
        padding: 16,
        cornerRadius: 12,
        titleFont: {
          size: 14,
          weight: '600',
        },
        bodyFont: {
          size: 13,
        },
        displayColors: false,
        boxShadow: '0 8px 32px rgba(109, 40, 217, 0.2)',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(109, 40, 217, 0.08)',
          borderColor: 'rgba(109, 40, 217, 0.15)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 12,
            weight: '500',
          },
        },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(109, 40, 217, 0.08)',
          borderColor: 'rgba(109, 40, 217, 0.15)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 12,
            weight: '500',
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
        hoverRadius: 8,
        hoverBorderWidth: 3,
        hoverBorderColor: 'rgba(109, 40, 217, 0.8)',
        hoverBackgroundColor: 'rgba(255, 255, 255, 0.9)',
      },
    },
  };

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: 'Performance Score',
        data: [68, 72, 76, 81, 85, 89, 92, 95],
        borderColor: '#6D28D9',
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          
          if (!chartArea) {
            return null;
          }
          
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(109, 40, 217, 0)');
          gradient.addColorStop(0.3, 'rgba(109, 40, 217, 0.1)');
          gradient.addColorStop(0.7, 'rgba(109, 40, 217, 0.3)');
          gradient.addColorStop(1, 'rgba(109, 40, 217, 0.5)');
          return gradient;
        },
        borderWidth: 3,
        fill: true,
        pointBackgroundColor: '#6D28D9',
        pointBorderColor: 'rgba(255, 255, 255, 0.8)',
        pointBorderWidth: 2,
      },
      {
        label: 'Target Performance',
        data: [75, 78, 80, 82, 84, 86, 88, 90],
        borderColor: '#8B5CF6',
        borderWidth: 2,
        borderDash: [8, 4],
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <ChartWrapper>
      <ChartTitle>{title}</ChartTitle>
      <div style={{ height: 'calc(100% - 3rem)' }}>
        <Line options={options} data={data} />
      </div>
    </ChartWrapper>
  );
};

export default PerformanceGraph; 