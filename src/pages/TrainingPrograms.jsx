import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  position: relative;
  overflow-x: hidden;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;

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
    opacity: 0.05;
    z-index: 1;
    pointer-events: none;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  scroll-snap-align: start;
  
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
    opacity: 0.05;
    z-index: 1;
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
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
  margin-bottom: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const Card = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.4;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;

  &:before {
    content: '→';
    color: var(--color-accent);
    font-weight: bold;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const WorkoutSection = styled(Section)`
  padding: 1rem 0;
  min-height: 95vh;
`;

const WorkoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const WorkoutCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

const WorkoutSchedule = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.4rem;
  margin-top: 0.4rem;
  font-size: 0.85rem;
`;

const TimeSlot = styled.span`
  color: var(--color-accent);
  font-weight: 500;
  white-space: nowrap;
  opacity: 0.9;
`;

const Activity = styled.span`
  color: var(--color-text-secondary);
  line-height: 1.3;
`;

const TrainingPrograms = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['overview', 'workouts'];
  const sectionRefs = sections.map(() => useRef(null));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      sectionRefs.forEach((ref, index) => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageContainer>
      <Section ref={sectionRefs[0]}>
        <ContentWrapper>
          <HeaderSection>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Military Fitness Excellence
            </Overline>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ACFT-Focused Training Programs
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive training solutions designed specifically for military personnel,
              focusing on ACFT performance improvement, injury prevention, and overall
              combat readiness.
            </Description>
          </HeaderSection>

          <Grid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
            </Card>

            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
            </Card>

            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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
            </Card>
          </Grid>
        </ContentWrapper>
      </Section>

      <WorkoutSection ref={sectionRefs[1]}>
        <ContentWrapper>
          <HeaderSection>
            <Overline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Army Physical Readiness Training
            </Overline>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Daily Training Schedule
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Structured physical training following the Army PRT program, designed to build strength,
              endurance, and mobility while preventing injuries.
            </Description>
          </HeaderSection>

          <WorkoutGrid>
            <WorkoutCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
      </WorkoutSection>
    </PageContainer>
  );
};

export default TrainingPrograms; 