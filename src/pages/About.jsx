import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100vh;
`;

const Section = styled.section`
  min-height: 100vh;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 6rem 0;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      var(--color-accent) 0%,
      transparent 70%
    );
    opacity: 0.1;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Overline = styled(motion.span)`
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--color-text-primary);
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 100px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.02em;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto;
`;

const MissionGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 3rem;
  }
`;

const MissionContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
`;

const MissionCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    background: rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
  }
`;

const MissionTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin: 0 0 1rem;
  font-weight: 600;
`;

const MissionText = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
  font-size: 1.1rem;
`;

const MissionIcon = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  min-width: 0;

  &:hover {
    border-color: var(--color-accent);
    background: rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
  }
`;

const TeamName = styled.h3`
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin: 0 0 0.5rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TeamRole = styled.p`
  color: var(--color-accent);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TeamDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0.75rem 0 0;
  overflow: visible;
  white-space: normal;
`;

const About = () => {
  return (
    <PageContainer>
      <Section id="mission">
        <ContentWrapper>
          <HeaderSection>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </Overline>
            <Title
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Revolutionizing Military Training
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              mov is dedicated to revolutionizing military training through objective, data-driven insights.
            </Description>
          </HeaderSection>
          <MissionGrid>
            <MissionContent>
              <MissionCard
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <MissionTitle>Our Mission</MissionTitle>
                <MissionText>
                  mov is dedicated to revolutionizing military training through objective, data-driven insights.
                  We empower soldiers and commanders to optimize performance, prevent injuries, and maintain
                  peak operational readiness.
                </MissionText>
              </MissionCard>
              <MissionCard
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <MissionTitle>Our Technology</MissionTitle>
                <MissionText>
                  By combining advanced accelerometers, gyroscopes, and innovative capacitive sensors,
                  we capture the nuances of full-body movement with unparalleled precision—even in the
                  most challenging environments.
                </MissionText>
              </MissionCard>
            </MissionContent>
          </MissionGrid>
        </ContentWrapper>
      </Section>

      <Section id="team">
        <ContentWrapper>
          <HeaderSection>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Leadership
            </Overline>
            <Title
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Meet Our Team
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A diverse team of military veterans, technologists, and industry experts united by the mission
              to transform military training through innovation.
            </Description>
          </HeaderSection>

          <TeamGrid>
            {[
              {
                name: "Mahmoud Hammad",
                role: "Software Engineer - Army Veteran",
                description: "Distinguished Army veteran and accomplished software engineer at a leading Fortune 100 technology company. Holds a Bachelor's degree in Computer Science with expertise in full-stack development."
              },
              {
                name: "Terry Zhao",
                role: "Software Engineer",
                description: "Accomplished software engineer at a premier Fortune 100 technology firm. Computer Engineering graduate with extensive experience in scalable systems architecture and cloud-native applications."
              },
              {
                name: "Lukasz Astemborski",
                role: "Software Engineer",
                description: "Accomplished software engineer at a leading Fortune 100 technology company. Computer Science graduate with extensive experience in high-performance computing and distributed systems."
              },
              {
                name: "Zach McFarland",
                role: "Mechanical Engineer",
                description: "Accomplished Mechanical Engineer at a Fortune 500 manufacturing corporation. Mechanical Engineering graduate with expertise in product design, systems integration, and industrial automation."
              }
            ].map((member, index) => (
              <TeamCard
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamDescription>{member.description}</TeamDescription>
              </TeamCard>
            ))}
          </TeamGrid>
        </ContentWrapper>
      </Section>
    </PageContainer>
  );
};

export default About;