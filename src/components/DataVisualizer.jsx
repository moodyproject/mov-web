import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Card } from './common/Card';
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

const VisualizerContainer = styled(Card)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);

  canvas {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  }
`;

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 0 auto;
`;

const DataVisualizer = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Performance Score',
        data: [65, 78, 82, 75, 89, 95, 92, 88, 91, 85, 88, 94],
        fill: true,
        borderColor: '#64748B',
        backgroundColor: 'rgba(100, 116, 139, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#64748B',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Training Efficiency',
        data: [70, 72, 78, 85, 82, 88, 87, 90, 85, 88, 92, 95],
        fill: true,
        borderColor: '#94A3B8',
        backgroundColor: 'rgba(148, 163, 184, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#94A3B8',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#FFFFFF',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        titleColor: '#FFFFFF',
        bodyColor: 'rgba(255, 255, 255, 0.85)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          family: 'Inter, sans-serif',
          weight: '600',
        },
        bodyFont: {
          size: 12,
          family: 'Inter, sans-serif',
        },
        displayColors: true,
        boxPadding: 4,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.85)',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.85)',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <VisualizerContainer>
        <ChartContainer>
          <Line data={data} options={options} />
        </ChartContainer>
      </VisualizerContainer>
    </motion.div>
  );
};

export default DataVisualizer; 