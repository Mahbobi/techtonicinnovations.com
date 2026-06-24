import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";
import * as THREE from "three";
import { MorphBlob } from "./MorphBlob";

function WireShell() {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.4}>
      <mesh scale={2.35}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#ccff33" wireframe transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

/**
 * Full WebGL hero scene. Self-contained (no external HDR fetches) so it works
 * offline and on any network. Tracks hero scroll progress via a ref and feeds
 * it to the shader blob.
 */
export function HeroScene() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight || 1;
      scrollRef.current = Math.min(Math.max(window.scrollY / h, 0), 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => gl.setClearColor(new THREE.Color("#000000"), 0)}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 3, 5]} intensity={40} color="#ccff33" />
        <pointLight position={[-5, -2, 3]} intensity={30} color="#6e56ff" />
        <pointLight position={[0, -4, -4]} intensity={18} color="#38bdf8" />
        <MorphBlob scrollRef={scrollRef} />
        <WireShell />
        <Sparkles count={70} scale={9} size={2.4} speed={0.3} opacity={0.5} color="#ccff33" />
        <Sparkles count={40} scale={7} size={1.6} speed={0.2} opacity={0.4} color="#6e56ff" />
      </Suspense>
    </Canvas>
  );
}
