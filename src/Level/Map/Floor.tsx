import React from "react";

const Floor = () => {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color="#ff0000" />
      </mesh>
    </>
  );
};

export default Floor;
