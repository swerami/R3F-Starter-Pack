import { blackMaterial } from "../constants/settings";

interface Props {
  xPosition?: number;
  yPosition?: number;
  zPosition?: number;
  xScale?: number;
  yScale?: number;
  zScale?: number;
}

const Box = ({
  xPosition = 1,
  yPosition = 1,
  zPosition = 1,
  xScale = 2,
  yScale = 2,
  zScale = 2,
}: Props) => {
  return (
    <mesh
      position={[xPosition, yPosition, zPosition]}
      scale={[xScale, yScale, zScale]}
    >
      <boxGeometry />
      <meshStandardMaterial color={blackMaterial} />
    </mesh>
  );
};

export default Box;
