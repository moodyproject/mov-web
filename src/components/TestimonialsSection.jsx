import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  UniversalGrid, 
  UniversalTestimonialCard, 
  UniversalSection, 
  spacing 
} from '../styles/UniversalStyles';

const TestimonialsContainer = styled(UniversalSection)`
  padding: ${spacing.xxl} ${spacing.lg};
`;

const TestimonialsGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const TestimonialCard = styled(UniversalTestimonialCard)`
  /* Additional styling can be added if needed */
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
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TestimonialCard>
              <Quote>{testimonial.quote}</Quote>
              <Author>
                <AuthorImage src={testimonial.image} alt={testimonial.author} />
                <AuthorInfo>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          </motion.div>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection; 