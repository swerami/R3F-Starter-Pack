import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.tsx";
import { worldColor } from "./constants/settings.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="h-screen w-screen" style={{ backgroundColor: worldColor }}>
      <Suspense fallback={null}>
        <Canvas>
          <Experience />
        </Canvas>
      </Suspense>
    </div>
  </React.StrictMode>
);
