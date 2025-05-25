import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ServiceIcon {
  name: string;
  position: THREE.Vector3;
  rotationSpeed: number;
}

const JarvisGlobe = ({ size = 500 }: JarvisGlobeProps) => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const serviceIconsRef = useRef<ServiceIcon[]>([]);
  const markersRef = useRef<THREE.Mesh[]>([]);

  // Service icons configuration
  const services = [
    'Smart Contracts', 'Token', 'NFT', 'Exchange',
    'dApp', 'Blockchain', 'Metaverse', 'Game'
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
    camera.position.z = 8;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Add central chakr symbol
    const loader = new SVGLoader();
    loader.load('https://www.ramestta.com/_next/static/media/chakr.8ab4f202.svg', (data) => {
      const paths = data.paths;
      const group = new THREE.Group();
      
      paths.forEach((path) => {
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(0x00ff00),
          side: THREE.DoubleSide
        });

        const shapes = SVGLoader.createShapes(path);
        shapes.forEach((shape) => {
          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        });
      });

      group.scale.set(0.02, 0.02, 0.02);
      group.position.y = -0.5;
      scene.add(group);
    });

    // Holographic Globe
    const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Service Icons
    const iconGeometry = new THREE.CircleGeometry(0.1, 32);
    services.forEach((service, index) => {
      const angle = (index / services.length) * Math.PI * 2;
      const iconMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.8
      });

      const icon = new THREE.Mesh(iconGeometry, iconMaterial);
      icon.position.set(
        Math.cos(angle) * 3.5,
        Math.sin(angle) * 3.5,
        0
      );
      
      serviceIconsRef.current.push({
        name: service,
        position: icon.position,
        rotationSpeed: Math.random() * 0.02 + 0.01
      });
      scene.add(icon);
    });

    // Interactive Markers
    const markerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const markerPositions = [
      new THREE.Vector3(1.5, 0.5, 0),
      new THREE.Vector3(-1.2, 0.8, 1),
      new THREE.Vector3(0.5, -1, -0.5)
    ];

    markerPositions.forEach(pos => {
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(pos);
      markersRef.current.push(marker);
      scene.add(marker);
    });

    // Animated Rings
    const createRing = (radius: number, color: number) => {
      const ringGeometry = new THREE.RingGeometry(radius, radius + 0.1, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      return ring;
    };

    scene.add(createRing(2.5, 0x00ff00));
    scene.add(createRing(3, 0xffa500));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0x00ff00, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate service icons
      serviceIconsRef.current.forEach((service, index) => {
        const angle = Date.now() * service.rotationSpeed;
        service.position.x = Math.cos(angle + index) * 3.5;
        service.position.y = Math.sin(angle + index) * 3.5;
      });

      // Globe rotation
      globe.rotation.y += 0.002;

      // Marker animation
      markersRef.current.forEach(marker => {
        marker.scale.y = Math.abs(Math.sin(Date.now() * 0.002)) + 0.5;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markersRef.current);

      if (intersects.length > 0) {
        gsap.to(intersects[0].object.scale, {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          duration: 0.3
        });
        setActiveService(`Location: ${intersects[0].object.position.toArray().join(', ')}`);
      } else {
        markersRef.current.forEach(marker => {
          gsap.to(marker.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
        });
        setActiveService(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [size]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ 
        width: size, 
        height: size,
        position: 'relative',
        cursor: 'pointer'
      }}
    >
      {activeService && (
        <div className="info-panel">
          {activeService}
        </div>
      )}
    </motion.div>
  );
};
