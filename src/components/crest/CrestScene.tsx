"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const MODEL_URL = "/models/beltra-crest.glb";

/** Studio reflections without any external HDR download. */
function StudioEnvironment() {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    return () => {
      scene.environment = null;
      env.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);

  return null;
}

function CrestModel({
  reducedMotion,
  dark,
}: {
  reducedMotion: boolean;
  dark: boolean;
}) {
  const gltf = useLoader(GLTFLoader, MODEL_URL);
  const spin = useRef<THREE.Group>(null);
  const velocity = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const { gl } = useThree();

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#151515"),
        metalness: 0.85,
        roughness: 0.32,
        clearcoat: 0.5,
        clearcoatRoughness: 0.25,
        envMapIntensity: 1.1,
      }),
    []
  );

  // Dark sheet gets a light machined alloy; light sheet gets black steel
  useEffect(() => {
    material.color.set(dark ? "#d9d9d6" : "#151515");
    material.envMapIntensity = dark ? 0.85 : 1.1;
    material.needsUpdate = true;
  }, [dark, material]);

  const model = useMemo(() => {
    const root = new THREE.Group();

    // Clone so we never mutate the loader's cached scene — mutating it made
    // position/scale non-deterministic across remounts (random zoom on refresh)
    const source = gltf.scene.clone(true);
    source.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.material = material;
      }
    });

    // Normalize by bounding sphere: rotation-invariant, so no orientation of
    // the model can ever poke outside the camera frustum / canvas edges.
    // Visible half-height at z=2.6, fov 32° is ~0.745; 0.66 leaves ~11% margin.
    source.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(source);
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const scale = 0.66 / sphere.radius;
    source.position.copy(sphere.center).multiplyScalar(-1);

    root.add(source);
    root.scale.setScalar(scale);
    return root;
  }, [gltf, material]);

  // Drag-to-spin on the canvas itself; vertical touch still scrolls the page
  useEffect(() => {
    const el = gl.domElement;
    el.style.touchAction = "pan-y";

    const onDown = (e: PointerEvent) => {
      dragging.current = true;
      lastX.current = e.clientX;
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      velocity.current = THREE.MathUtils.clamp(dx * 0.004, -0.12, 0.12);
      if (spin.current) spin.current.rotation.y += dx * 0.006;
    };
    const onUp = () => {
      dragging.current = false;
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, [gl]);

  useFrame((_, delta) => {
    if (!spin.current) return;
    if (!dragging.current) {
      // Inertia decays toward a slow turntable drift
      const idle = reducedMotion ? 0 : 0.0028;
      velocity.current = THREE.MathUtils.lerp(velocity.current, idle, 0.03);
      spin.current.rotation.y += velocity.current * (delta * 60);
    }
  });

  return (
    <group ref={spin} rotation={[0.08, -0.5, 0]}>
      <primitive object={model} />
    </group>
  );
}

export default function CrestScene({
  active,
  reducedMotion,
  dark,
}: {
  active: boolean;
  reducedMotion: boolean;
  dark: boolean;
}) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 2.6], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ cursor: "grab" }}
      aria-label="Interactive 3D Beltra Industries crest — drag to rotate"
    >
      <StudioEnvironment />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} />
      <directionalLight position={[-5, 2, -4]} intensity={0.7} />
      <Suspense fallback={null}>
        <CrestModel reducedMotion={reducedMotion} dark={dark} />
      </Suspense>
    </Canvas>
  );
}
