import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <mesh>
      <OrbitControls />
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default Experience;
