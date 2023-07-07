import { OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import Floor from "./components/Floor";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      {Array.from(Array(100).keys()).map((key) => (
        <Box
          key={key}
          xPosition={(Math.random() - 0.5) * 150}
          zPosition={(Math.random() - 0.5) * 150}
          xScale={Math.random() * 4}
          // yScale={Math.random() * 4}
          // zScale={Math.random() * 4}
        />
      ))}

      <Floor />

      <directionalLight intensity={0.5} position={[0, 3, 4]} />
    </>
  );
};

export default Experience;
