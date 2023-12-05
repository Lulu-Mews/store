import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import Border from "../shared/Border/Border";
import { FileDropper } from "../shared/FileDropper/FileDropper";
import Button from "../shared/Button/Button";
import getModel from "./Helpers/getModel";
import Flex from "../shared/Flex/Flex";

function StlLoader() {
  const ref = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [stlFile, setStlFile] = useState<ArrayBuffer | undefined>();
  const scene = new THREE.Scene();
  scene.add(new THREE.AxesHelper(5));

  var keyLight = new THREE.DirectionalLight(
    new THREE.Color("hsl(30, 100%, 75%)"),
    1.0
  );
  keyLight.position.set(-100, 0, 100);

  var fillLight = new THREE.DirectionalLight(
    new THREE.Color("hsl(240, 100%, 75%)"),
    0.75
  );
  fillLight.position.set(100, 0, 100);

  var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
  backLight.position.set(100, 0, -100).normalize();

  scene.add(keyLight);
  scene.add(fillLight);
  scene.add(backLight);

  const camera = new THREE.PerspectiveCamera(20, 400 / 400, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({ alpha: true });
  camera.up = new THREE.Vector3(0, 0, 1);
  // controls.enableDamping = false;
  camera.position.x = 200;
  camera.position.y = 200;
  camera.position.z = 100;
  renderer.setSize(400, 400);
  const controls = new OrbitControls(camera, renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(renderer.domElement);

      const loader = new STLLoader();
      if (stlFile) {
        const geometry = loader.parse(stlFile);
        scene.add(getModel(geometry, wireframe));
      }
      renderer.render(scene, camera);

      animate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, stlFile, wireframe]);

  return (
    <>
      <Border border="1px solid black">
        <FileDropper onUpload={setStlFile}>
          <div ref={ref} />
        </FileDropper>
      </Border>
      <Flex spacing={{ left: "24px" }} isVertical width="200px">
        <Button onClick={() => setWireframe((e) => !e)}>
          {wireframe ? "show STL" : "show Wireframe"}
        </Button>
      </Flex>
    </>
  );
}
export default StlLoader;
