import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { backgroundStyles } from '../components/ui';
import { 
  UniversalGrid, 
  UniversalFeatureCard, 
  UniversalSection, 
  UniversalContentWrapper, 
  UniversalHeaderContainer 
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

const ProgramsGrid = styled(UniversalGrid)`
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProgramCard = styled(UniversalFeatureCard)`
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.components.button.primary.background};
    transition: transform 0.3s ease;
  }

  ${ProgramCard}:hover &::before {
    transform: translateX(4px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const WorkoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const WorkoutCard = styled(ProgramCard)`
  padding: 2rem;
`;

const WorkoutSchedule = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const TimeSlot = styled.span`
  color: ${({ theme }) => theme.components.button.primary.background};
  font-weight: 500;
  white-space: nowrap;
`;

const Activity = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;

const TrainingPrograms = () => {
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
              Military Fitness Excellence
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ACFT-Focused Training Programs
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Comprehensive training solutions designed specifically for military personnel,
              focusing on ACFT performance improvement, injury prevention, and overall
              combat readiness.
            </Description>
          </HeaderContainer>

          <ProgramsGrid>
            <ProgramCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>ACFT Event Optimization</CardTitle>
              <CardDescription>
                Tailored programs targeting each ACFT event with progressive training methodologies.
              </CardDescription>
              <List>
                <ListItem>Deadlift strength and technique development</ListItem>
                <ListItem>Standing power throw explosiveness training</ListItem>
                <ListItem>Hand-release push-up endurance building</ListItem>
                <ListItem>Sprint-drag-carry interval conditioning</ListItem>
                <ListItem>Plank hold core strengthening</ListItem>
                <ListItem>2-mile run aerobic capacity improvement</ListItem>
              </List>
            </ProgramCard>

            <ProgramCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Injury Prevention & Recovery</CardTitle>
              <CardDescription>
                Comprehensive approach to maintaining soldier health and preventing common military training injuries.
              </CardDescription>
              <List>
                <ListItem>Joint mobility and stability exercises</ListItem>
                <ListItem>Active recovery protocols</ListItem>
                <ListItem>Proper movement pattern training</ListItem>
                <ListItem>Load management optimization</ListItem>
                <ListItem>Pre-hab exercise routines</ListItem>
                <ListItem>Recovery nutrition guidance</ListItem>
              </List>
            </ProgramCard>

            <ProgramCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Performance Tracking</CardTitle>
              <CardDescription>
                Advanced monitoring systems to track and improve soldier performance metrics.
              </CardDescription>
              <List>
                <ListItem>Real-time movement analysis</ListItem>
                <ListItem>Progress tracking for each ACFT event</ListItem>
                <ListItem>Fatigue and recovery monitoring</ListItem>
                <ListItem>Performance trend analysis</ListItem>
                <ListItem>Personalized feedback and adjustments</ListItem>
                <ListItem>Unit-wide performance analytics</ListItem>
              </List>
            </ProgramCard>
          </ProgramsGrid>
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
              Army Physical Readiness Training
            </Overline>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Daily Training Schedule
            </SectionTitle>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Structured physical training following the Army PRT program, designed to build strength,
              endurance, and mobility while preventing injuries.
            </Description>
          </HeaderContainer>

          <WorkoutGrid>
            <WorkoutCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Morning PRT Session</CardTitle>
              <CardDescription>
                Daily PT following FM 7-22 guidelines
              </CardDescription>
              <WorkoutSchedule>
                <TimeSlot>0630</TimeSlot>
                <Activity>Preparation Drill (PD)</Activity>
                <TimeSlot>0640</TimeSlot>
                <Activity>4C & Hip Stability</Activity>
                <TimeSlot>0655</TimeSlot>
                <Activity>Movement Drill 1</Activity>
                <TimeSlot>0710</TimeSlot>
                <Activity>Conditioning Drills</Activity>
                <TimeSlot>0740</TimeSlot>
                <Activity>Recovery</Activity>
              </WorkoutSchedule>
            </WorkoutCard>

            <WorkoutCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Strength Focus</CardTitle>
              <CardDescription>
                Combat readiness strength development
              </CardDescription>
              <List>
                <ListItem>Pull-ups & Grip Training</ListItem>
                <ListItem>Strength Circuits</ListItem>
                <ListItem>Push/Sit-up Intervals</ListItem>
                <ListItem>Sprint/Crawl Series</ListItem>
                <ListItem>Advanced Conditioning</ListItem>
              </List>
            </WorkoutCard>

            <WorkoutCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Endurance Training</CardTitle>
              <CardDescription>
                Progressive cardio & movement drills
              </CardDescription>
              <List>
                <ListItem>30:60 & 60:120 Intervals</ListItem>
                <ListItem>Group Release Runs</ListItem>
                <ListItem>Hill & Terrain Training</ListItem>
                <ListItem>Loaded March Progress</ListItem>
                <ListItem>Unit Formation Runs</ListItem>
              </List>
            </WorkoutCard>

            <WorkoutCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Recovery Focus</CardTitle>
              <CardDescription>
                Injury prevention & maintenance
              </CardDescription>
              <List>
                <ListItem>5-Exercise Recovery</ListItem>
                <ListItem>Mobility & Flexibility</ListItem>
                <ListItem>Joint Care Protocol</ListItem>
                <ListItem>Core Stabilization</ListItem>
                <ListItem>Cool-down Routine</ListItem>
              </List>
            </WorkoutCard>
          </WorkoutGrid>
        </ContentWrapper>
      </ShowcaseSection>
    </>
  );
};

export default TrainingPrograms; 