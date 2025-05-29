import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    // Create camera model
    const cameraGroup = new THREE.Group();
    // Camera body
    const cameraBody = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1, 1), new THREE.MeshPhongMaterial({
      color: 0x333333,
      specular: 0x999999,
      shininess: 30
    }));
    // Camera lens
    const cameraLens = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.7, 32), new THREE.MeshPhongMaterial({
      color: 0x111111,
      specular: 0xaaaaaa,
      shininess: 90
    }));
    cameraLens.rotation.x = Math.PI / 2;
    cameraLens.position.z = 0.8;
    // Camera viewfinder
    const viewfinder = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshPhongMaterial({
      color: 0x222222
    }));
    viewfinder.position.y = 0.5;
    viewfinder.position.x = -0.3;
    // Add all parts to the camera group
    cameraGroup.add(cameraBody);
    cameraGroup.add(cameraLens);
    cameraGroup.add(viewfinder);
    // Add camera group to scene
    scene.add(cameraGroup);
    // Position the camera model
    cameraGroup.position.set(3, 0, 0);
    cameraGroup.rotation.y = -Math.PI / 4;
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    const pointLight = new THREE.PointLight(0xff00ff, 1, 10);
    pointLight.position.set(-3, 2, 2);
    scene.add(pointLight);
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      // Rotate camera model
      cameraGroup.rotation.y += 0.005;
      // Mouse movement effect
      const parallaxX = (mouseX / window.innerWidth - 0.5) * 2;
      const parallaxY = (mouseY / window.innerHeight - 0.5) * -2;
      cameraGroup.position.x += (3 + parallaxX - cameraGroup.position.x) * 0.1;
      cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 0.1;
      renderer.render(scene, camera);
    };
    // Mouse movement tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Start animation
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0" />;
};
export default ThreeScene;