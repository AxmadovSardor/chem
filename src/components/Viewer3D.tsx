import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Viewer3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0f172a');
    const camera = new THREE.PerspectiveCamera(50, 1.8, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(280, 160);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TetrahedronGeometry(1);
    const material = new THREE.MeshStandardMaterial({ color: '#4ea8ff', wireframe: false });
    const molecule = new THREE.Mesh(geometry, material);
    scene.add(molecule);

    const light = new THREE.DirectionalLight('#ffffff', 1.2);
    light.position.set(2, 2, 3);
    scene.add(light);

    const ambient = new THREE.AmbientLight('#94a3b8', 0.6);
    scene.add(ambient);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      molecule.rotation.x += 0.008;
      molecule.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="rounded-xl border border-white/20" />;
}
