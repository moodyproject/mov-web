import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollSection from './ScrollSection';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
`;

const Question = styled(motion.button)`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Answer = styled(motion.div)`
  padding: 1rem 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
`;

const faqData = [
  {
    question: "How does mov's motion tracking work?",
    answer: "Our system uses advanced sensors and AI algorithms to capture and analyze movement patterns in real-time, providing instant feedback for training optimization."
  },
  {
    question: "Is the system compatible with existing military equipment?",
    answer: "Yes, mov is designed to integrate seamlessly with standard military gear and can be customized to work with specific equipment requirements."
  },
  // Add more FAQ items
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <ScrollSection>
      <FAQContainer>
        <Title>Frequently Asked Questions</Title>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <Question
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {item.question}
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </Question>
            <AnimatePresence>
              {activeIndex === index && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </FAQContainer>
    </ScrollSection>
  );
};

export default FAQSection; 