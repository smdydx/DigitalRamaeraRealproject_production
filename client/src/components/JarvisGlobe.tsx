import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface JarvisGlobeProps {
  size?: number;
}

const JarvisGlobe = ({ size = 300 }: JarvisGlobeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    renderer.setSize(size, size);
    
    if (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // Create the Earth sphere
    const earthGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    
    // Create a holographic material
    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x00FF00) }, // Primary green
        color2: { value: new THREE.Color(0x32CD32) }, // Lime green
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          // Create a grid pattern
          float gridSize = 20.0;
          vec2 grid = fract(vUv * gridSize);
          float gridLine = max(
            step(0.95, grid.x) * step(grid.x, 0.98),
            step(0.95, grid.y) * step(grid.y, 0.98)
          );
          
          // Create longitude/latitude lines
          float latLine = step(0.97, abs(sin(vUv.y * 3.14159 * 8.0)));
          float longLine = step(0.97, abs(sin(vUv.x * 3.14159 * 16.0)));
          
          // Combine grid and long/lat lines
          float lines = max(max(gridLine, latLine), longLine);
          
          // Edge glow effect
          float rim = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
          rim = pow(rim, 2.0);
          
          // Pulsating effect
          float pulse = 0.5 + 0.5 * sin(time * 0.5);
          
          // Data points that move
          float dataPoint1 = step(0.98, sin(vUv.x * 50.0 + time) * sin(vUv.y * 50.0 + time * 0.7));
          float dataPoint2 = step(0.98, cos(vUv.x * 40.0 - time * 0.3) * sin(vUv.y * 40.0 + time * 0.5));
          float dataPoints = max(dataPoint1, dataPoint2);
          
          // Scanning line effect
          float scanLine = step(0.98, sin(vUv.y * 3.14159 * 2.0 - time));
          
          // Combine all effects
          vec3 baseColor = mix(color1, color2, rim);
          vec3 finalColor = mix(baseColor * 0.5, baseColor, lines);
          finalColor = mix(finalColor, vec3(1.0, 1.0, 1.0), dataPoints);
          finalColor = mix(finalColor, vec3(1.0, 1.0, 1.0), scanLine * 0.5);
          
          // Apply pulsating opacity
          float alpha = 0.7 + 0.3 * pulse;
          // Stronger at edges
          alpha = alpha * (0.6 + rim * 0.4);
          
          gl_FragColor = vec4(finalColor, alpha * (0.3 + lines * 0.7));
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.5,
    });

    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = THREE.MathUtils.randFloatSpread(10);
      const y = THREE.MathUtils.randFloatSpread(10);
      const z = THREE.MathUtils.randFloatSpread(10);
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Holographic rings
    const ringsGeometry = new THREE.RingGeometry(2.2, 2.3, 64);
    const ringsMaterial = new THREE.MeshBasicMaterial({
      color: 0xFF6E00,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const rings = new THREE.Mesh(ringsGeometry, ringsMaterial);
    rings.rotation.x = Math.PI / 2;
    scene.add(rings);

    const rings2Geometry = new THREE.RingGeometry(2.5, 2.55, 64);
    const rings2Material = new THREE.MeshBasicMaterial({
      color: 0xFFA500,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const rings2 = new THREE.Mesh(rings2Geometry, rings2Material);
    rings2.rotation.x = Math.PI / 2;
    scene.add(rings2);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate the earth
      earth.rotation.y = elapsedTime * 0.1;
      
      // Pulse the rings
      const pulse = Math.sin(elapsedTime * 0.5) * 0.1 + 0.9;
      rings.scale.set(pulse, pulse, pulse);
      rings2.scale.set(1.05 - pulse * 0.05, 1.05 - pulse * 0.05, 1.05 - pulse * 0.05);
      
      // Update shader time
      if (earth.material instanceof THREE.ShaderMaterial) {
        earth.material.uniforms.time.value = elapsedTime;
      }
      
      // Rotate the stars slowly
      stars.rotation.y = elapsedTime * 0.02;
      
      // Render
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      
      // Request next frame
      requestAnimationFrame(animate);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current || !containerRef.current) return;
      
      rendererRef.current.setSize(size, size);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (earth.geometry) earth.geometry.dispose();
      if (earth.material) {
        if (Array.isArray(earth.material)) {
          earth.material.forEach((m: THREE.Material) => m.dispose());
        } else {
          earth.material.dispose();
        }
      }
      
      if (starsGeometry) starsGeometry.dispose();
      if (starsMaterial) starsMaterial.dispose();
      
      if (ringsGeometry) ringsGeometry.dispose();
      if (ringsMaterial) ringsMaterial.dispose();
      
      if (rings2Geometry) rings2Geometry.dispose();
      if (rings2Material) rings2Material.dispose();
      
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, [size]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="jarvis-globe"
      style={{ 
        width: size, 
        height: size, 
        position: 'relative',
        margin: '0 auto'
      }}
    />
  );
};
