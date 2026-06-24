import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { blobVertexShader, blobFragmentShader } from "./blobShader";

/**
 * The hero centrepiece: a noise-displaced icosahedron driven by a custom GLSL
 * shader. Rotates toward the pointer and breathes with scroll progress.
 */
export function MorphBlob({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useThree((s) => s.pointer);
  const target = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDistort: { value: 0.42 },
      uFrequency: { value: 1.15 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uCore: { value: new THREE.Color("#0a0a12") },
      uAcid: { value: new THREE.Color("#ccff33") },
      uFlux: { value: new THREE.Color("#6e56ff") },
    }),
    []
  );

  useFrame((_, delta) => {
    const mat = matRef.current;
    const mesh = meshRef.current;
    if (!mat || !mesh) return;

    mat.uniforms.uTime.value += delta;

    // smooth pointer follow
    target.current.lerp(pointer, 0.05);
    mat.uniforms.uPointer.value.copy(target.current);

    // gentle auto-rotation + pointer parallax
    mesh.rotation.y += delta * 0.12;
    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, target.current.y * 0.4, 0.05);
    mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, target.current.x * 0.2, 0.05);

    // scroll: scale down + intensify distortion as the user leaves the hero
    const s = scrollRef.current; // 0 → 1 across the hero
    const scale = THREE.MathUtils.lerp(1, 0.78, s);
    mesh.scale.setScalar(scale);
    mat.uniforms.uDistort.value = 0.42 + s * 0.25;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.45, 64]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={blobVertexShader}
        fragmentShader={blobFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
