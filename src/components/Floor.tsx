import { floorMaterial } from "../constants/settings";

const Floor = () => {
  return (
    <mesh position={[0, 0, 0]} rotation-x={-1.57}>
      <planeGeometry args={[155, 350, 150]} />
      <meshStandardMaterial color={floorMaterial} />
    </mesh>
  );
};

export default Floor;
