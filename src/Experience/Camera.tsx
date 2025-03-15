import { useRef, useEffect } from "react";
import * as THREE from "three";
import useMouse from "../util/mouse";
import { PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { x, y } = useMouse();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 35, 10);
      cameraRef.current.lookAt(new THREE.Vector3(0, -Math.PI * 2, 0));
    }
  }, []);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(new THREE.Vector3(x * 0.04, -y * 0.04, 0));
      console.log(x);
    }
  }, [x, y]);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={40}
      near={0.01}
      far={1000}
    />
  );
};

export default Camera;
