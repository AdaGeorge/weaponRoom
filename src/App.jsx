import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Fragment, Suspense } from "react";
import { Text } from "@react-three/drei";
import Modal from "./components/Modal";

function App() {
  return (
    <Fragment>
      <Modal />
      <div className="container">
        <Canvas
          shadows
          camera={{
            fov: 75,
            near: 0.01,
            far: 1000,
          }}
        >
          <Suspense fallback={<Text>Loading...</Text>}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </Fragment>
  );
}

export default App;
