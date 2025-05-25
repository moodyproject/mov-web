import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextureLoader } from 'three';

const ViewerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4/3;

  canvas {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
    background: transparent !important;
  }
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background: transparent !important;
`;

const DetailsPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 24px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(145, 71, 255, 0.4) 0%,
      rgba(145, 71, 255, 0.1) 50%,
      rgba(145, 71, 255, 0.4) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const DetailTitle = styled.h4`
  color: var(--color-accent);
  margin-bottom: 0.75rem;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const DetailDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  letter-spacing: 0.02em;
  opacity: 0.8;
`;

const FeaturesSection = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h5`
  color: var(--color-text-primary);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  opacity: 0.9;
  
  &::after {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    background: var(--color-accent);
    margin-top: 0.5rem;
    border-radius: 2px;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;

const FeatureItem = styled.li`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
  letter-spacing: 0.02em;
  padding: 1rem;
  background: rgba(145, 71, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(145, 71, 255, 0.1);
  
  &:hover {
    background: rgba(145, 71, 255, 0.15);
    color: var(--color-text-primary);
    transform: translateX(4px);
    border-color: rgba(145, 71, 255, 0.3);
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ProductViewer3D = ({ 
  modelType = 'bracelet', 
  color = 0x9147ff,
  isRotating = true,
  showDetails = false,
  specs = {
    title: "",
    description: "",
    features: [],
    technicalSpecs: {}
  }
}) => {
  const containerRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const modelRef = useRef();
  const controlsRef = useRef();
  const frameRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    const updateCameraAspect = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      return width / height;
    };

    const camera = new THREE.PerspectiveCamera(
      50,
      updateCameraAspect(),
      0.1,
      1000
    );
    camera.position.set(0, 1.2, 3.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    
    const updateRendererSize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
    };

    updateRendererSize();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2.5;
    controls.maxDistance = 4;
    controls.enablePan = false;
    controls.autoRotate = isRotating;
    controls.autoRotateSpeed = 2.0;
    controlsRef.current = controls;

    let model;
    const createDevice = (isAnklet = false) => {
      const deviceGroup = new THREE.Group();
      
      const bandGeometry = new THREE.TorusGeometry(
        isAnklet ? 1.3 : 1,
        0.08,
        64,  // Increased segments
        128  // Increased segments
      );
      
      const material = new THREE.MeshBasicMaterial({
        color: 0x9147ff,
        wireframe: true,
        transparent: true,
        opacity: 0.9  // Increased opacity
      });
      
      const band = new THREE.Mesh(bandGeometry, material);
      deviceGroup.add(band);

      const bodyGeometry = new THREE.BoxGeometry(
        isAnklet ? 0.7 : 0.6,
        0.35,
        0.08
      );
      
      const body = new THREE.Mesh(bodyGeometry, material);
      body.position.set(isAnklet ? 1.3 : 1, 0, 0);
      body.rotation.y = Math.PI / 2;
      deviceGroup.add(body);

      return deviceGroup;
    };

    if (modelType === 'bracelet') {
      model = createDevice(false);
    } else {
      model = createDevice(true);
    }

    scene.add(model);
    modelRef.current = model;

    // Simple lighting for wireframe
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.autoRotate = isRotating;
        controlsRef.current.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const aspect = updateCameraAspect();
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      updateRendererSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [modelType, color, isRotating]);

  return (
    <ViewerContainer ref={containerRef}>
      {showDetails && (
        <DetailsPanel>
          <DetailTitle>{specs.title}</DetailTitle>
          <DetailDescription>{specs.description}</DetailDescription>
          
          <FeaturesSection>
            <SectionTitle>Key Features</SectionTitle>
            <FeaturesList>
              {specs.features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeaturesList>
          </FeaturesSection>
        </DetailsPanel>
      )}
    </ViewerContainer>
  );
};

export default ProductViewer3D; 