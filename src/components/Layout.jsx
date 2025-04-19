import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    circle at center,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  position: relative;
  overflow-x: hidden;

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
    z-index: 0;
    pointer-events: none;
  }
`;

const Main = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
  padding-top: 80px; /* Account for fixed header */
`;

const Layout = () => {
  return (
    <PageWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </PageWrapper>
  );
};

export default Layout; 