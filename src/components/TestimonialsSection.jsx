import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(to right, #1a1a1a, #2d2d2d);
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const Quote = styled.blockquote`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  h4 {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.9rem;
  }
`;

const testimonials = [
  {
    id: 1,
    quote: "mov has revolutionized how we approach combat readiness training. The insights we get are invaluable.",
    author: "Col. James Mitchell",
    role: "Training Commander",
    image: "/images/testimonial1.jpg"
  },
  {
    id: 2,
    quote: "The precision of movement tracking has helped us identify and prevent potential injuries before they occur.",
    author: "Sgt. Sarah Connor",
    role: "PT Instructor",
    image: "/images/testimonial2.jpg"
  },
  {
    id: 3,
    quote: "Integration was seamless, and the data has been crucial for optimizing unit performance.",
    author: "Maj. David Chen",
    role: "Operations Officer",
    image: "/images/testimonial3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Quote>{testimonial.quote}</Quote>
            <Author>
              <AuthorImage src={testimonial.image} alt={testimonial.author} />
              <AuthorInfo>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </AuthorInfo>
            </Author>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection; 