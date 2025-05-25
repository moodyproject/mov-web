import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { backgroundStyles } from '../components/ui';
import { 
  UniversalGrid, 
  UniversalMissionCard, 
  UniversalSection, 
  UniversalContentWrapper, 
  UniversalHeaderContainer,
  spacing 
} from '../styles/UniversalStyles';

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
  gap: 2rem;
`;

const HeaderContainer = styled(UniversalHeaderContainer)`
  text-align: center;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
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

const MissionGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.xxl};
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.lg} 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: ${spacing.lg};
  }
`;

const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
`;

const MissionCard = styled(UniversalMissionCard)`
  &:hover {
    transform: translateY(-4px);
  }
`;

const MissionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem;
  font-weight: 600;
`;

const MissionText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
  font-size: 1.1rem;
`;

const TeamGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(4, 1fr);
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled(UniversalMissionCard)`
  text-align: center;
  min-width: 0;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const TeamName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TeamRole = styled.p`
  color: ${({ theme }) => theme.components.button.primary.background};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
  font-weight: 500;
  white-space: normal;
  line-height: 1.3;
`;

const TeamDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0.75rem 0 0;
  overflow: visible;
  white-space: normal;
`;

const About = () => {
  return (
    <>
      <ShowcaseSection>
        <ContentWrapper>
          <HeaderContainer>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Mission
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Revolutionizing Military Training
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              mov is dedicated to revolutionizing military training through objective, data-driven insights.
            </Description>
          </HeaderContainer>
          
          <MissionGrid>
            <MissionContent>
              <MissionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <MissionTitle>Our Mission</MissionTitle>
                <MissionText>
                  mov is dedicated to revolutionizing military training through objective, data-driven insights.
                  We empower soldiers and commanders to optimize performance, prevent injuries, and maintain
                  peak operational readiness.
                </MissionText>
              </MissionCard>
              
              <MissionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
      </ShowcaseSection>

      <ShowcaseSection>
        <ContentWrapper>
          <HeaderContainer>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leadership
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Meet Our Team
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A diverse team of military veterans, technologists, and industry experts united by the mission
              to transform military training through innovation.
            </Description>
          </HeaderContainer>

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
      </ShowcaseSection>
    </>
  );
};

export default About;