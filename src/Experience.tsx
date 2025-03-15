import Floor from "./Level/Map/Floor";
import Camera from "./Experience/Camera";

const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <Camera />
      <mesh position={[0, 0, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <Floor />
    </>
  );
};

export default Experience;
