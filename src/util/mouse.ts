import { useEffect, useState } from "react";
import { XY } from "../types/XY";
import { throttle } from "lodash";
import useWindow from "./windowSize";

const useMouse = (): XY => {
  const [mousePosition, setMousePosition] = useState<XY>({ x: 0, y: 0 });
const {x,y} = useWindow()
  useEffect(() => {
    const updateMousePosition = throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX-(x/2), y: e.clientY-(y/2) });
    }, 16); 

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      updateMousePosition.cancel(); 
    };
  }, [x,y]);

  // useEffect(() => {
  //   console.log(
  //     Math.min(mousePosition.x / window.innerWidth-0.5, 1),
  //     Math.min(mousePosition.y / window.innerHeight-0.5, 1)
  //   );
  // }, [mousePosition]);

  return mousePosition;
};

export default useMouse;
