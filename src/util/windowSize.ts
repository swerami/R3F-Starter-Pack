import { useEffect, useState } from "react";
import { XY } from "../types/XY";
import { throttle } from "lodash";

const useWindow = (): XY => {
  const [screenXY, setScreenXY] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      setScreenXY({ x: window.innerWidth, y: window.innerHeight });
    }, 100); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel(); 
    };
  }, []);

  return screenXY;
};

export default useWindow;
